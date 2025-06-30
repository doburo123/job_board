import { Component, OnInit } from '@angular/core';
import { BullhornService } from '../../services/bullhorn.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];
  loading: boolean = true;
  error: boolean = false;

  constructor(private bullhornService: BullhornService) {}

  ngOnInit(): void {
    this.bullhornService.getJobs().subscribe({
      next: (response: any) => {
        this.jobs = response.data || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching jobs:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}