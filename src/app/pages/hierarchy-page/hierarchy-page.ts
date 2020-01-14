
import { HierarchyService } from '../../shared/services/hierarchy-service';
import { Client } from '../../model/client';

import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HierarchyDialogType } from './dialog-type';
import { ClientCreationDialog } from './client-dialog/client-creation-dialog';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ProjectCreationDialog } from './project-dialog/project-creation-dialog';
import { ArticleCreationDialog } from './article-dialog/article-creation-dialog';

import { Project, Article } from 'src/app/model';
import { TransferDialog } from './transfer-dialog/transfer-dialog';

@Component({
  selector: 'app-hierarchy-page',
  templateUrl: './hierarchy-page.html',
  styleUrls: ['./hierarchy-page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyPageComponent implements OnInit {
  clients: Client[];
  projects: Project[];
  myControl = new FormControl();
  selectedClient: any = null;
  selectedProject: any = null;
  selectedArticle: any = null;
  isShowinput = false;
  searchText: string;
  searchProject: string;
  searchClient: string;
  isLoadingBags: boolean = true;

  clientForm: FormGroup;
  clientSub: Subscription;
  projectSub: Subscription;
  projectForm: FormGroup;
  editingClient: any;
  editingProject: any;
  editingArticle: any;


  constructor(private hierarchyService: HierarchyService,
    public dialog: MatDialog,
    private fb: FormBuilder) {
    this.clientForm = fb.group({
      name: new FormControl('')
    });

    this.projectForm = fb.group({
      name: new FormControl('')
    });
  }

  ngOnInit() {
    this.hierarchyService.getHierarchy().subscribe(data => {
      this.clients = data;
      this.isLoadingBags = false;
    });

  }

  transferProjectDialog() {
    const filteredClients = this.clients.filter(x => x != this.selectedClient);
    const dialogRef = this.dialog.open(TransferDialog, {
      data: {
        title: `Перенос проекта ${this.selectedProject.name} другому клиенту`,
        items: filteredClients
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        const req = { destinationId: result.selectedId, itemId: this.selectedProject.id };
        this.hierarchyService.transferProject(req).subscribe(_ => {
          this.selectedClient.projects = this.selectedClient.projects
            .filter((x: any) => x.id != this.selectedProject.id);
          this.selectedClient = this.clients.find(x => x.id == result.selectedId);
          this.selectedClient.projects.push(this.selectedProject);
        });

      });
  }


  transferArticleDialog() {
    this.projects = this.selectedClient.projects;
    const filteredProjects = this.projects.filter((x: any) => x != this.selectedProject);
    const dialogRef = this.dialog.open(TransferDialog, {
      data: {
        title: `Перенос статью ${this.selectedArticle.name} другому проекту`,
        items: filteredProjects
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        const req = { destinationId: result.selectedId, itemId: this.selectedArticle.id };
        this.hierarchyService.transferArticle(req).subscribe(_ => {
          this.selectedProject.articles = this.selectedProject.articles
            .filter((x: any) => x.id != this.selectedArticle.id); 
          this.selectedProject = this.projects.find(x => x.id == result.selectedId);
          this.selectedProject.articles.push(this.selectedArticle);
        });

      });
  }

  onClientSelected(client: Client) {
    if (this.clientSub) {
      this.clientSub.unsubscribe();
    }
    this.selectedClient = client;
    this.selectedProject = null;

    this.clientForm.controls.name.setValue(client.name);

    this.clientSub = this.clientForm.valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((data: any) => {
        this.editingClient = this.selectedClient;
        this.hierarchyService.modifyClient({ id: client.id, name: data.name })
          .subscribe((res: any) => {
            // const found = this.clients.find(x => x.id == res.id);
            this.editingClient!.name = res.name;
            // this.selectedClient.name = res.name;
          });
      });

  }

  showInput() {
    this.isShowinput = !this.isShowinput;
  }

  onProjectDialog(): void {
    const client = this.selectedClient;
    const dialogRef = this.dialog.open(ProjectCreationDialog, {
      width: '450px',
      data: {
        client
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        this.hierarchyService.createProject(result).subscribe(res => {
          this.selectedClient.projects.push(res);
        });
      });
  }

  onProjectSelected(project: Project) {
    if (this.projectSub) {
      this.projectSub.unsubscribe();
    }

    this.selectedProject = project;

    this.projectForm.controls.name.setValue(project.name);

    this.projectSub = this.projectForm.valueChanges
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((data: any) => {
        this.editingProject = this.selectedProject;
        this.hierarchyService.modifyProject({ id: project.id, name: data.name })
          .subscribe((res: any) => {
            this.editingProject.name = res.name;
          });
      });

  }

  openClientDialog(): void {
    const dialogRef = this.dialog.open(ClientCreationDialog, {
      width: '450px',
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        this.hierarchyService.createClient(result).subscribe(res => {
          this.clients.push(res);
        });
      });
  }

  onArticleDialog(): void {
    const project = this.selectedProject;
    const createMode = true; // not edit mode (false)
    const dialogRef = this.dialog.open(ArticleCreationDialog, {
      width: '450px',
      data: {
        project,
        createMode
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .subscribe(result => {
        this.hierarchyService.createArticle(result).subscribe(res => {
          this.selectedProject.articles.push(res);
        });
      });

  }

  onArticleSelected(article: Article) {
    this.selectedArticle = article;
    console.log('selected article: ' + this.selectedArticle);
  }
  onEditArticleDialog(): void {
    const project = this.selectedProject;
    const editMode = true;
    const articleName = this.selectedArticle.name;
    const dialogRef = this.dialog.open(ArticleCreationDialog, {
      width: '450px',
      data: {
        project,
        editMode,
        articleName
      }
    });

    dialogRef.afterClosed()
      .filter(result => result != null)
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .subscribe((result) => {
        this.editingArticle = this.selectedArticle;
        this.hierarchyService.modifyArticle({ id: this.selectedArticle.id, name: result.name })
          .subscribe((res: any) => {
            this.editingArticle.name = res.name;
          });
      });
  }
}

@Component({
  selector: 'hierarchy-dialog',
  templateUrl: 'hierarchy-dialog.html',
})
export class HierarchyDialog {

  constructor(
    public dialogRef: MatDialogRef<HierarchyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { DialogType: HierarchyDialogType, name: any }) {
  }
  dialogTypes = HierarchyDialogType;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
