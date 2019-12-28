import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatIconModule, MatListModule, MatFormFieldModule, MatPaginatorModule, MatRippleModule, MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatAutocompleteModule, MatOptionModule, MatDialogModule, MatProgressBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HierarchyPageComponent, HierarchyDialog } from './hierarchy-page';
import { HierarchyService } from 'src/app/shared/services/hierarchy-service';
import { FilterPipeModule } from 'src/app/shared/pipes/filter.pipe';
import { ClientCreationDialog } from './client-dialog/client-creation-dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProjectCreationDialog } from './project-dialog/project-creation-dialog';


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
        MatProgressBarModule,
        MatOptionModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        NgSelectModule,
        FilterPipeModule 

    ],
    exports: [HierarchyPageComponent],
    providers: [HierarchyService],
    // tslint:disable-next-line:max-line-length
    declarations: [HierarchyPageComponent, HierarchyDialog, ClientCreationDialog, ProjectCreationDialog],
    entryComponents: [HierarchyDialog, ClientCreationDialog, ProjectCreationDialog]
})
export class HierarchyPageModule { }
