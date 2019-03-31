import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { GoogleSiginProvider } from './authentication/providers/google-signin.provider';
import { FacebookSiginProvider } from './authentication/providers/facebook-sigin.provider';
import { WechatSiginProvider } from './authentication/providers/wechat-sigin.provider';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: User

  constructor(private googleSiginProvider: GoogleSiginProvider,
    private facebookSiginProvider: FacebookSiginProvider,
    private wechatSiginProvider: WechatSiginProvider) { }

  isAnonymous():boolean {
    if(this.currentUser==null) {
      return true;
    }
    return false;
  }

  login(provider: string) {
    if(provider === "facebook") {

    }

    if(provider === "google") {
      this.googleSiginProvider.login().then(result => {
        this.currentUser = result;
      })
    }

    if(provider === "wechat") {

    }

    if(provider === "default") {
    }
  }
}
