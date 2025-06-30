import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // or wherever your routes are defined

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // ✅ This provides HttpClient globally
    provideRouter(routes)
  ]
});