import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';


import { AuthModule, AuthServiceConfig, AuthService } from "../features/authentication";
import { GoogleLoginProvider} from "../features/authentication";
import { AppConfigService } from '../config';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  currentUser: User
  availableLoginProviders: string[];

  constructor(private appConfigService:AppConfigService,
    private authService:AuthService) { }

  ngOnInit() {
      this.availableLoginProviders = Array.from(this.appConfigService.getAuthConfig().providers.keys())
      this.availableLoginProviders.push("default");
  }

  isAnonymous():boolean {
    if(this.currentUser==null) {
      return true;
    }
    return false;
  }
}
