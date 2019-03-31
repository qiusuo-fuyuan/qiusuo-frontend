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
  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Query) => {
      this.returnUrl = params['returnUrl']; 
    })
  }

  socialLogin(socialPlatform: string) {
    this.loginService.login(socialPlatform);
    this.go();
  }

  private go() {
    this.router.navigateByUrl(this.returnUrl);
  }
}
