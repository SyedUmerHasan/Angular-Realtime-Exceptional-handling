import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
