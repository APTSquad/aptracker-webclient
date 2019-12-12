import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatFormFieldModule, MatPaginatorModule, MatRippleModule, MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatAutocompleteModule, MatOptionModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HierarchyPageComponent, HierarchyDialog } from './hierarchy-page';
import { HierarchyService } from 'src/app/shared/services/hierarchy-service';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

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
        MatDialogModule
    ],
    exports: [HierarchyPageComponent],
    providers: [HierarchyService],
    declarations: [HierarchyPageComponent, HierarchyDialog, FilterPipe],
    entryComponents: [HierarchyDialog]
})
export class HierarchyPageModule { }
