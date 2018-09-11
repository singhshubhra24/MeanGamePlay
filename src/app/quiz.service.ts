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
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/user/saveUser', data, { headers: this.headers })
      .map(res => res.json()
    );
  }

  saveQues(data){
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/user/saveQues', data, { headers: this.headers })
      .map(res => res.json()
    );
  }

  getQues(){
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get(this.apiUrl + '/user/getQues', { headers: this.headers })
      .map(res => res.json()
    );
  }

  updateUser(data){
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(this.apiUrl + '/user/updateUser',data, { headers: this.headers })
      .map(res => res.json()
    );
  }

  getResult(data){
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl + '/user/getResult',data, { headers: this.headers })
      .map(res => res.json()
    );
  }
}
