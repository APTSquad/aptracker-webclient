import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatListModule, MatInputModule, MatCardModule, MatProgressBarModule, MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { options, ReportPageComponent } from './report-page.component';
import { CustomCalendarModule } from 'src/app/shared/custom-calendar/custom-calendar';
import { ReportFormService } from 'src/app/shared/services/report-form-service';

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
        MatDialogModule,
        CustomCalendarModule

    ],
    providers: [ReportFormService],
    exports: [ReportPageComponent],
    declarations: [ReportPageComponent],
})
export class ReportPageModule { }
