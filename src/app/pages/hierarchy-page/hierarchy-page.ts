
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
import { Project } from 'src/app/model';

@Component({
  selector: 'app-hierarchy-page',
  templateUrl: './hierarchy-page.html',
  styleUrls: ['./hierarchy-page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HierarchyPageComponent implements OnInit {
  clients: Client[];
  pepa: string;
  myControl = new FormControl();
  options: string[] = ['123', '345', '123214'];
  selectedClient: any = null;
  selectedProject: any = null;
  isShowinput = false;
  dialogType: HierarchyDialogType;
  name: string;
  searchText: string;
  searchProject: string;
  searchClient: string;

  clientForm: FormGroup;
  clientSub: Subscription;
  projectSub: Subscription;
  projectForm: FormGroup;

  constructor(private hierarchyService: HierarchyService, public dialog: MatDialog, private fb: FormBuilder) {
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
        this.hierarchyService.modifyClient({ id: client.id, name: data.name })
          .subscribe((res: any) => {
            this.selectedClient.name = res.name;
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
        this.hierarchyService.modifyProject({ id: project.id, name: data.name })
          .subscribe((res: any) => {
            this.selectedProject.name = res.name;
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
