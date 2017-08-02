import { Injectable } from '@angular/core';

import { JobInterface } from '../job.model';
import { job } from '../index.js';

@Injectable()
export class JobService {
  getFirstJob(): JobInterface {
    return job;
  } 
}
