import { Courses } from './../../model/Courses';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, take } from 'rxjs/operators';

// Local Variables
const coursesUrl = 'http://localhost:8000/api/courses';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'http://localhost:8000/api/user';

  getCourses() {
    return this.http.post(coursesUrl, null, httpOptions);
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    console.log('Api is calling');
    return this.http.get(this.apiUrl)
    .pipe(take(1)) // <-- HERE
     .subscribe(customers => { // <-- AND HERE
      return customers;
     });
    }

  handleError(error: HttpErrorResponse) {

    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
