
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { UsersManagementPageComponent } from './pages/users-management-page/users-management-page';
import { HierarchyPageComponent } from './pages/hierarchy-page/hierarchy-page';
import { BagsManagementPageComponent } from './pages/bags-management-page/bags-management-page';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BagmanagementComponent } from './pages/bag-management-page/bag-management';
import { BagReportPageComponent } from './pages/bag-report-page/bag-report-page.component';
import { CommonArticlesPageComponent } from './pages/common-articles-page/common-articles-page';

const routes: Routes = [
  { path: '', redirectTo: '/report', pathMatch: 'full' },
  { path: 'auth', component: LoginPageComponent },
  { path: 'report', component: ReportPageComponent },
  { path: 'hierarchy', component: HierarchyPageComponent },
  { path: 'bags', component: BagsManagementPageComponent },
  { path: 'users', component: UsersManagementPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'bag-management/:id', component: BagmanagementComponent },
  { path: 'bag-report', component: BagReportPageComponent },
  { path: 'common-articles', component: CommonArticlesPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
