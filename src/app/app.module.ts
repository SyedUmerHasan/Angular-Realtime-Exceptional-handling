import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CoursesComponent } from './courses/courses.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    NavigationBarComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    CoursesComponent,
    TeachersComponent,
    StudentsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
