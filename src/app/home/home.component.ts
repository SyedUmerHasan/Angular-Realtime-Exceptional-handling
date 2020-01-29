import { CoursesService } from './../services/courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private courseApi: CoursesService) {
  }

  ngOnInit() {

  }
  callme()
  {
    console.log('Response : ' + JSON.stringify(this.courseApi.getUsers()));
  }

}
