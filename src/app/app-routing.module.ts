import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ClientListPageComponent } from './pages/hierarchy-page/hierarchy-page';


const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'report', component: ReportPageComponent },
  { path: 'clients', component: ClientListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
