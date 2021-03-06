import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListComponent } from "./jobs/job-list-component/job-list-component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/job-list',
    pathMatch: 'full'
  },
  {
    path: 'job-list',
    component: JobListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
