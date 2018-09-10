import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  headers;
  apiUrl: string = environment.apiUrl;
  constructor(private http: Http) { }

  saveUser(data){
    debugger;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/user/saveUser', data, { headers: this.headers })
      .map(res => res.json()
    );
  }
}
