import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
declare let gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSiginProvider {
  clientId: string = '221933879361-q5b8f85o01elrn8q8rm5qi49ovfm4kkd.apps.googleusercontent.com';
  scriptUrl: string = 'https://apis.google.com/js/platform.js';
  auth2: any;

  loadScript(onload: any): void {
    let signInJS = document.createElement('script');
    signInJS.async = true;
    signInJS.type = 'text/javascript';
    signInJS.src = this.scriptUrl;
    signInJS.onload = onload;
    document.head.appendChild(signInJS);
  }

  initialize():Promise<User> {
    return new Promise((resolve,reject) => {
      this.loadScript(() => {
        gapi.load('auth2',() => {
          this.auth2 = gapi.auth2.init({
            client_id: this.clientId,
            scope: 'email'
          });
          this.auth2.then(()=> {
            if(this.auth2.isSignedIn.get()) {
              resolve(this.getUserProfile());
            }
          })
        });
      });
    });
  }

  constructor() {
    this.initialize();
   }

  login():Promise<User>{
    return new Promise((resolve,reject) => {
      let promise = this.auth2.signIn();
      promise.then(()=> {
        resolve(this.getUserProfile());
      });
    });
  }

  getUserProfile(): User {
    let user: User = new User();
    let profile = this.auth2.currentUser.get().getBasicProfile();
    let authResponseObj = this.auth2.currentUser.get().getAuthResponse(true);
    user.id = profile.getId();
    user.username = profile.getName();
    user.email = profile.getEmail();
    user.imageUrl = profile.getImageUrl();
    user.token = authResponseObj.access_token;
    user.refreshToken = authResponseObj.id_token;
    return user;
  }

  logout() {
  }
}
