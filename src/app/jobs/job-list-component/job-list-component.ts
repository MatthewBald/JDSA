import { Component, OnInit } from '@angular/core';
import { JobService } from "../job.service";
import { JobInterface } from "../../job.model";

@Component({
  selector: 'app-job-list-component',
  template: `
    <p>
      job-list-component Works!
    </p>
    <p>
      -- {{ jobs[0].id }}
      -- {{ jobs[0].headline }}
    </p>
  `,
  styles: []
})
export class JobListComponent implements OnInit {
  
  public jobs: JobInterface[];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs = [];

    // Get the sample job from index.js
    this.jobs.push(this.jobService.getFirstJob());

    // Get any other jobs that have been created

  }

}
