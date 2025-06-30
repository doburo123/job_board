import { Routes } from '@angular/router';
import { HomeDemoOneComponent } from './demos/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './demos/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './demos/home-demo-three/home-demo-three.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmployersComponent } from './pages/employers/employers.component';
import { EmployerDetailsComponent } from './pages/employer-details/employer-details.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SingleResumeComponent } from './pages/single-resume/single-resume.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { FavouriteJobsComponent } from './pages/favourite-jobs/favourite-jobs.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PostAJobComponent } from './pages/post-a-job/post-a-job.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'employers', component: EmployersComponent},
    {path: 'employer-details', component: EmployerDetailsComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'single-resume', component: SingleResumeComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'jobs', component: JobsComponent},
    {path: 'favourite-jobs', component: FavouriteJobsComponent},
    {path: 'job-details', component: JobDetailsComponent},
    {path: 'post-a-job', component: PostAJobComponent},
    {path: 'candidates', component: CandidatesComponent},
    {path: 'candidate-details', component: CandidateDetailsComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactUsComponent},
    // Here add new pages component

    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];