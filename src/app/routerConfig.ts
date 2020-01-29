import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
// routerConfig.ts

import { Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'AboutUs', component: AboutUsComponent},
  { path: 'ContactUs', component: ContactUsComponent},
  { path: 'courses', component: CoursesComponent},
  { path: '**', component: NotFoundComponent},
];
export default appRoutes;
