import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  ElementRef,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddClientsDialog } from './report-dialog/add-clients-dialog';
import {
  Article,
  ArticleToSave,
  ReportFormService,
} from 'src/app/shared/services/report-form-service';


@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReportPageComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if (this.dateSub) {
      this.dateSub.unsubscribe();
    }
  }
  dateSub: Subscription;
  dateFormControl: FormControl = new FormControl(null);

  heck: FormGroup;

  customPatterns = {
    '0': { pattern: new RegExp('\[0-9\]') },
    '9': { pattern: new RegExp('\[05\]') },
  };

  form: FormGroup = this.fb.group({
    commonArticles: this.fb.array([]),
    clients: this.fb.array([])
  });
  percent: number = 0;
  // HARDCODE HERE
  userId: number = 6;
  hoursRequired: number = 8;
  reportState: number;

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private rs: ReportFormService) {  }

  get commonArticles(): FormArray { return this.form.get('commonArticles') as FormArray; }
  get clients(): FormArray { return this.form.get('clients') as FormArray; }
  get dateISO(): string {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
    return (new Date(this.dateFormControl.value - tzoffset)).toISOString().slice(0, -1);
  }

  getProjectsFor(index: number) {
    return (<FormArray>(<FormArray>this.form.get('clients')).controls[index]
      .get('projects')).controls;
  }

  getArticlesFor(clientIndex: number, projIndex: number) {
    return (<FormArray>(<FormArray>(<FormArray>this.form.get('clients'))
      .controls[clientIndex].get('projects')).controls[projIndex].get('articles')).controls;
  }

  @ViewChildren('expenseTime') expenseTime: QueryList<ElementRef>;
  input() {
    this.percent = this
      .expenseTime
      .filter(t => t.nativeElement.value)
      .reduce((x, y) => {
        return x + parseFloat(y.nativeElement.value);
      }, 0);

    this.percent = this.percent * 100 / this.hoursRequired;
  }

  finish(event: any) {
    console.log(this.form.value);
    console.log(event.target.controls);
    let len = event.target.value.length;
    if (len == 0) { return; }

    let addable = '';
    let pointIndex = event.target.value.indexOf('.');
    // если точка есть
    if (pointIndex != -1) {
      // точка - последний символ
      if (pointIndex + 1 == len) {
        addable = '0';
      }
    } else {
      addable = '.0';
    }
    event.target.value += addable;
    console.log(this.form.value);
  }

  selectClient() {
    let clients = this.clients.value.filter((client: any) => {
      return client.isChecked == false;
    });
    const dialogRef = this.dialog.open(AddClientsDialog, {
      width: '450px',
      data: {
        header: 'Заголовок',
        items: clients
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      let index = this.clients.value.indexOf(result);
      if (index >= 0) {
        // @ts-ignore
        this.clients.controls[index].controls.isChecked.setValue(true);
      }
    });
  }

  getClients(clients: any[]) {
    return clients.map(client => this.fb.group({
      name: client.name,
      isChecked: client.isChecked,
      id: client.id,
      projects: this.fb.array(this.getProjects(client.projects))
    }));
  }

  getProjects(projects: any[]) {
    return projects.map(project => this.fb.group({
      name: project.name,
      isChecked: project.isChecked,
      id: project.id,
      articles: this.fb.array(this.getArticles(project.articles))
    }));
  }

  getArticles(articles: any[]) {
    return articles.map(article => this.fb.group({
      name: article.name,
      isChecked: article.isChecked,
      id: article.id,
      time: [
        article.hoursConsumption ? article.hoursConsumption.toString(10) : '',
        [Validators.required]]
    //  , Validators.minLength(3)
    }));
  }

  ngOnInit() {
    this.heck = new FormGroup({
      'heh': new FormControl()
    });

    this.dateSub = this.dateFormControl.valueChanges.subscribe((date) => {
      this.dateChangeCallback(date);
    });

    // set initial date so callback will be called
    this.dateFormControl.setValue(new Date());

    console.log(this.form);
  }

  // callback for date change
  dateChangeCallback(date: Date) {
    console.log('date changed: ', date);
    let body = {
      'userId': this.userId,
      'date': this.dateISO
    };

    this.rs.getDayInfo(body).subscribe(dayInfo => {
      console.log('dayInfo', dayInfo);
      this.reportState = dayInfo.reportState;
      this.hoursRequired = dayInfo.hoursRequired;

      this.commonArticles.clear();
      this.getArticles(dayInfo.data.common).forEach(article => {
        this.commonArticles.push(article);
      });
      this.clients.clear();
      this.getClients(dayInfo.data.clients).forEach(client => {
        this.clients.push(client);
      });

      // пересчитываем проценты
      this.percent = 0;
      dayInfo.data.common.forEach((article: any) => {
        if (article.hoursConsumption) {
          this.percent += article.hoursConsumption;
        }
      });
      dayInfo.data.clients.forEach((client: any) => {
        client.projects.forEach((project: any) => {
          project.articles.forEach((article: any) => {
            if (article.hoursConsumption) {
              this.percent += article.hoursConsumption;
            }
          });
        });
      });
      this.percent = this.percent * 100 / this.hoursRequired;
    });
  }

  parseArticle(article: Article): ArticleToSave {
    console.log(article.time);
    let time = Number(article.time);
    let pointIndex = article.time.indexOf('.');
    // if(pointIndex != -1) {
    //   time /= 10;
    // }
    return { 'articleId': article.id, hoursConsumption: time };
  }

  parseArticlesForm() {
    let articles: ArticleToSave[] = [];
    this.form.value.commonArticles.forEach((article: any) => {
      articles.push(this.parseArticle(article));
    });
    this.form.value.clients.forEach((client: any) => {
      if (client.isChecked) {
        client.projects.forEach((project: any) => {
          if (project.isChecked) {
            project.articles.forEach((article: any) => {
              if (article.isChecked) {
                articles.push(this.parseArticle(article));
              }
            });
          }
        });
      }
    });
    return articles;
  }

  submit(reportState: number) {
    let result = {
      date: this.dateISO,
      userId: this.userId,
      reportState: this.reportState,
      articles: this.parseArticlesForm()
    };
    this.rs.saveReport(result).subscribe();
  }

  onSubmit() {
    if (this.IsValid()) {
      console.log('valid');
      // this.submit(1);
    } else {
      alert('form invalid');
    }
  }

  showProjects(index: number) {
    console.log(this.dateISO);
    // @ts-ignore
    this.form.controls.clients.controls[index]
      .controls.projects.controls.forEach((project: any) => {
        project.controls.isChecked.setValue(true);
      });
  }

  showArticles(cIndex: number, pIndex: number) {
    // @ts-ignore
    this.form.controls.clients.controls[cIndex]
      .controls.projects.controls[pIndex]
      .controls.articles.controls.forEach((article: any) => {
        article.controls.isChecked.setValue(true);
      });
  }

  IsValid() {
    // @ts-ignore
    let commonIsValid = this.form.controls.commonArticles.controls.every((article: any) => {
      return article.valid || article.value.time == '';
    });
    if (!commonIsValid) { return false; }
    // @ts-ignore
    let result = this.form.controls.clients.controls.every((client: any) => {
      if (client.value.isChecked) {
        return client.controls.projects.controls.every((project: any) => {
          if (project.value.isChecked) {
            return project.controls.articles.controls.every((article: any) => {
              if (article.value.isChecked) {
                return article.valid || article.value.time == '';
              }
              return true;
            });
          }
          return true;
        });
      }
      return true;
    });
    return result;
  }

}
