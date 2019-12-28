import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import { Bag, Project, Client, Article  } from 'src/app/model';
import { ActivatedRoute } from '@angular/router';


// tslint:disable-next-line:max-line-length
import { Subscription } from 'rxjs';
import { HierarchyService } from 'src/app/shared/services/hierarchy-service';
import { MatDialog } from '@angular/material';
import { ProjectCreationDialog } from './project-dialog/project-creation-dialog';
import { ArticleCreationDialog } from './article-dialog/article-creation-dialog';
 import { BagManagementService } from 'src/app/shared/services/bag-service';


@Component({
  selector: 'app-bag-management',
  templateUrl: './bag-management.html',
  styleUrls: ['./bag-management.scss'],
})
export class BagmanagementComponent implements OnInit {


  clients: Client[];
  selectedClient: any = null;
  projects: Project[];
  articles: Article[];
  isLoadingBags: boolean = true;
  bagId: number;
  selectedBag: any;



  // tslint:disable-next-line:max-line-length
  constructor(
    private hierarchyService: HierarchyService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private bagService: BagManagementService,
    ) {

  }

  ngOnInit() {
    this.hierarchyService.getHierarchy().subscribe(data => {
      this.clients = data;
      this.isLoadingBags = false;
    });
    this.bagService.getProjects().subscribe(data => {
      this.projects = data;
    });
    this.bagService.getArticles().subscribe(data => {
      this.articles = data;
    });

    this.selectedBag = this.route.params.subscribe(params => {
      this.bagId = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });

  this.bagService.getBagById(this.bagId).subscribe(bag => {
    this.selectedBag = bag;
  });

  }


  removeProject(project: Project): void {
    let data = { bagId: null, id: project.id };
        this.bagService.ProjectSetBag(data).subscribe(res => {
          this.selectedBag.projects.splice(res);
        });
  }

  removeArticle(article: Article): void {
    let data = { bagId: null, id: article.id };
        this.bagService.ArticleSetBag(data).subscribe(res => {
          this.selectedBag.articles.splice(res);
        });
  }

  onProjectDialog(): void {
    const projects = this.projects;
    const bagId = this.bagId;
    const dialogRef = this.dialog.open(ProjectCreationDialog, {
      width: '450px',
      data: {
        projects,
        bagId
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        let data = { bagId: this.bagId, id: result.id };
        this.bagService.ProjectSetBag(data).subscribe(res => {
          this.selectedBag.projects.push(res);
        });

      });

  }

  onArticleDialog(): void {
    const articles = this.articles;
    const bagId = this.bagId;
    const dialogRef = this.dialog.open(ArticleCreationDialog, {
      width: '450px',
      data: {
       articles,
       bagId
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        let data = { bagId: this.bagId, id: result.id };
        this.bagService.ArticleSetBag(data).subscribe(res => {
          this.selectedBag.articles.push(res);
        });
      });
  }




}


