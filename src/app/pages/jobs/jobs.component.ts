import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BullhornService } from '../../services/bullhorn.service'; // ✅ use relative path

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private bullhornService = inject(BullhornService); // ✅ Angular 14+ recommended for standalone
  jobs: any[] = [];
  loading = false;
  error = false;

  ngOnInit(): void {
    this.loading = true;
    this.bullhornService.getJobs().subscribe({
      next: (response: any) => {
        this.jobs = response.data || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Failed to fetch jobs:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}