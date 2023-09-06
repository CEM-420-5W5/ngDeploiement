import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngDeploiement';
  url = "";

  constructor(public api: ApiService){
    this.url = environment.apiUrl;
  }

  async register(){
    await this.api.register();
  }

  async connect(){
    await this.api.connect();
  }

  async logout(){
    await this.api.logout();
  }
}
