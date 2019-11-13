import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { UsersManagementPageComponent } from './pages/users-management-page/users-management-page';
import { HierarchyPageComponent } from './pages/hierarchy-page/hierarchy-page';


const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'report', component: ReportPageComponent },
  { path: 'hierarchy', component: HierarchyPageComponent },
  { path: 'users', component: UsersManagementPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
