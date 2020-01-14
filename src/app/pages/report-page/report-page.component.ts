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
import { IConfig } from 'ngx-mask';
import { AddClientsDialog } from './report-dialog/add-clients-dialog';
import { ReportFormService } from 'src/app/shared/services/report-form-service';


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

  customPatterns = {
    '0': { pattern: new RegExp('\[0-9\]') },
    '9': { pattern: new RegExp('\[05\]') }
  };
  form: FormGroup = this.fb.group({
    commonArticles: this.fb.array([]),
    clients: this.fb.array([])
  });
  percent: number = 0;
  hoursRequired: number = 8;
  date = Date.now();

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private rs: ReportFormService) {

  }

  get commonArticles(): FormArray { return this.form.get('commonArticles') as FormArray; }
  get clients(): FormArray { return this.form.get('clients') as FormArray; }

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
    console.log(this.percent);
    console.log('form after input', this.form);
  }

  finish(event: any) {
    let addable = '';
    if (event.target.value.length == 1) {
      addable = '.0';
    } else if (event.target.value.length == 2) {
      addable = '0';
    }
    event.target.value += addable;
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
      // console.log('The dialog was closed');
      // console.log(result);
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
      time: ['', [Validators.required, Validators.minLength(3)]]
    }));
  }

  ngOnInit() {
    this.rs.getTemplate().subscribe(data => {
      console.log('-------------------', data);
      this.getArticles(data.common).forEach(article => {
        this.commonArticles.push(article);
      });
      this.getClients(data.clients).forEach(client => {
        this.clients.push(client);
      });
      console.log('-----KEK-----', this.form);
    });


    this.dateSub = this.dateFormControl.valueChanges.subscribe(this.dateChangeCallback);

    // set initial date so callback will be called
    this.dateFormControl.setValue(new Date());
  }

  // callback for date change
  dateChangeCallback(date: Date) {
    console.log('date changed: ', date);
  }

  onSubmit() {
    /**
     * TODO:
     * Дата
     * отрефакторить
     * типы
     * 0.1 при автокомплите
     */
    let currentDate = new Date();
    console.log('HEYO');
    let result = {
      'date': currentDate.toISOString(),
      'userId': 6,
      'articles': []
    };
    let articles: any;
    // const controls = this.form.controls;
    // /** Проверяем форму на валидность */
    // if (this.form.invalid) {
    //   /** Если форма не валидна, то помечаем все контролы как touched*/
    //   Object.keys(controls)
    //     .forEach(controlName => controls[controlName].markAsTouched());
    //   /** Прерываем выполнение метода*/
    //   return;
    // }
    /** Обработка данных формы */
    console.log(this.form.value);
    this.form.value.commonArticles.forEach((article: any) => {
      if (article.isChecked) {
        let time;
        console.log('time', article.time);
        if (article.time.length < 2) {
          time = Number(article.time);
        } else {
          time = Number(article.time) / 10;
        }
        articles.push({
          'articleId': article.id,
          'hoursConsumption': time
        });
      }
    });
    this.form.value.clients.forEach((client: any) => {
      if (client.isChecked) {
        client.projects.forEach((project: any) => {
          if (project.isChecked) {
            project.articles.forEach((article: any) => {
              if (article.isChecked) {
                let time;
                console.log('time', article.time);
                if (article.time.length < 2) {
                  time = Number(article.time);
                } else {
                  time = Number(article.time) / 10;
                }

                articles.push({
                  'articleId': article.id,
                  'hoursConsumption': time
                });
              }
            });
          }
        });
      }
    });
    console.log('articles', articles);
    // temporary((((
    result.articles = articles;
    console.log('result', result);
    this.rs.saveReport(result).subscribe(d => {
      console.log('dddd', d);
    });
  }

  showProjects(index: number) {
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

}

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
