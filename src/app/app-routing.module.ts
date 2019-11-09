import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ClientListPageComponent } from './pages/client-list-page/client-list-page';
import { UsersManagementPageComponent } from './pages/users-management-page/users-management-page';


const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'report', component: ReportPageComponent },
  { path: 'clients', component: ClientListPageComponent },
  { path: 'users', component: UsersManagementPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
