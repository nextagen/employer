import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUri = "http://localhost:4000/api";
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) {}

  createEmployee(data): Observable<any> {
    const url = `${this.baseUri}/employee`;
    return this.http.post(url, data).pipe(catchError(this.errorCallback));
  }

  getEmployees() {
    return this.http.get(`${this.baseUri}/employee`);
  }

  getEmployee(id): Observable<any> {
    const url = `${this.baseUri}/employee/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.errorCallback)
    );
  }

  updateEmployee(id, data): Observable<any> {
    const url = `${this.baseUri}/employee/${id}`;
    return this.http
      .put(url, data, { headers: this.headers })
      .pipe(catchError(this.errorCallback));
  }

  deleteEmployee(id): Observable<any> {
    const url = `${this.baseUri}/employee/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .pipe(catchError(this.errorCallback));
  }

  createTag(data): Observable<any> {
    const url = `${this.baseUri}/tag`;
    return this.http.post(url, data).pipe(catchError(this.errorCallback));
  }

  getTags() {
    return this.http.get(`${this.baseUri}/tag`);
  }

  getTag(id): Observable<any> {
    const url = `${this.baseUri}/tag/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorCallback)
    );
  }

  updateTag(id, data): Observable<any> {
    const url = `${this.baseUri}/tag/${id}`;
    return this.http
        .put(url, data, { headers: this.headers })
        .pipe(catchError(this.errorCallback));
  }

  deleteTag(id): Observable<any> {
    const url = `${this.baseUri}/tag/${id}`;
    return this.http
        .delete(url, { headers: this.headers })
        .pipe(catchError(this.errorCallback));
  }

  errorCallback(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
