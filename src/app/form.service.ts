import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { detailed } from './casting'

@Injectable()
export class FormService {

       constructor(private http:HttpClient) { }

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.log('An error occurred:', error.error.message);
  } else {
    alert(
      `Backend returned code ${error.status}, unsuccessful submission.`);
  }
  return throwError(
    'Something bad happened, please try again later.');
}

getDetails(): Observable<detailed[]>{
  return this.http.get<detailed[]>("https://cs251-outlab-6.herokuapp.com/initial_values/");
}
getFormDetails(){
	return this.http.get("https://cs251-outlab-6.herokuapp.com/initial_values/");
	}
postFormDetails(data){
return this.http.post("https://cs251-outlab-6.herokuapp.com/add_new_feedback/",data).pipe(catchError(this.handleError));
}

}
