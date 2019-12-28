import { BagmanagementComponent  } from './bag-management';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HierarchyService } from 'src/app/shared/services/hierarchy-service';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import {
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatInputModule,
  MatButtonModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatCardModule,
  MatDialog,
  MatRippleModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatOptionModule} from '@angular/material';
import { ProjectCreationDialog } from './project-dialog/project-creation-dialog'
import { FilterPipeModule } from 'src/app/shared/pipes/filter.pipe';
import { ArticleCreationDialog } from './article-dialog/article-creation-dialog';
import { BagsManagementService } from 'src/app/shared/services/bags-service';





@NgModule({
    imports: [
      MatIconModule,
      MatListModule,
      MatFormFieldModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      MatRippleModule,
      MatInputModule,
      CommonModule,
      MatButtonModule,
      MatCardModule,
      MatMenuModule,
      FlexLayoutModule,
      ScrollingModule,
      MatAutocompleteModule,
      MatOptionModule,
      FormsModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatProgressBarModule,
      NgSelectModule,
      NgOptionHighlightModule,
      FilterPipeModule
    ],
    exports: [BagmanagementComponent],
    providers: [HierarchyService,BagsManagementService],
    declarations: [BagmanagementComponent,ProjectCreationDialog,ArticleCreationDialog],
    entryComponents: [ProjectCreationDialog,ArticleCreationDialog]
  })
  
  export class BagManagementPageModule {}
  