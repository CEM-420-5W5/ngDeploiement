import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }

  async register(){
    let registerData = {
      email : "autre2@test.com",
      password : "Passw0rd!",
      passwordConfirm : "Passw0rd!",
    }
    let result = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'api/Account/Register', registerData));
    console.log(result);
  }

  async connect(){
    let registerData = {
      username : "autre2@test.com",
      password : "Passw0rd!"
    }
    let result = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'api/Account/Login', registerData));
    console.log(result);
  }

  async logout(){
    let result = await lastValueFrom(this.http.get<any>(environment.apiUrl + 'api/Account/Logout'));
    console.log(result);
  }
}
