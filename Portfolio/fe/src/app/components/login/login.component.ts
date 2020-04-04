
import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import anime from 'animejs';
import {
  FormControl,
  AbstractControlOptions
} from "@angular/forms";
import { ILoginComponent } from '../../shared/models/shared/login';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements ILoginComponent {

  userEmail: AbstractControlOptions = new FormControl('');
  userPassword: AbstractControlOptions = new FormControl('');
  current: boolean = null;

  constructor(private authService: AuthService,
    private translate: TranslateService) { 
      translate.addLangs(['en', 'ro']);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    });
   translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
      console.log("onDefaultLangChange", event.translations)
    });
    translate.setDefaultLang('ro');
}

 async onSubmit(userEmail:string, userPassword:string):Promise<any> {
    await this.authService.SignIn(userEmail,userPassword);
  }

  ngOnInit():void {
    document.querySelector('#email').addEventListener('focus', function (e) {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#password').addEventListener('focus', function (e) {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
    document.querySelector('#submit').addEventListener('focus', function (e) {
      if (this.current) this.current.pause();
      this.current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart'
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart'
        }
      });
    });
  }
}
