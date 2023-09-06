import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }
  async login() {
    let user = { userName:'', password: ''};
    let result = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'api/Account/Login', user))
  }
}