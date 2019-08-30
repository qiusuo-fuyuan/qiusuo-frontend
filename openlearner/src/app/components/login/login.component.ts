import { Component, OnInit, Query } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  username: string;
  password: string;
  returnUrl: string;
  socialLoginProviders: string[]

  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginService
    this.route.queryParams.subscribe((params: Query) => {
      this.returnUrl = params['returnUrl']; 
    });
    this.socialLoginProviders = this.loginService.availableLoginProviders;
  }

  login(loginPlatform: string) {
    this.loginService.login(loginPlatform);
    this.go();
  }

  private go() {
    this.router.navigateByUrl(this.returnUrl);
  }
}
