import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobListComponent } from './jobs/job-list-component/job-list-component';
import { JobDetailComponent } from './jobs/job-detail-component/job-detail-component';
import { JobCreateComponent } from './jobs/job-create-component/job-create-component';

import { JobService } from './jobs/job.service';
import { EnumService } from './jobs/enum.service';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    JobDetailComponent,
    JobCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    JobService,
    EnumService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
