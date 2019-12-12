import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatListModule, MatInputModule, MatCardModule, MatProgressBarModule, MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { options, ReportPageComponent } from './report-page.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatInputModule,
        FlexLayoutModule,
        MatCardModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot(options),
        MatDialogModule
    ],
    exports: [ReportPageComponent],
    declarations: [ReportPageComponent],
})
export class ReportPageModule { }
