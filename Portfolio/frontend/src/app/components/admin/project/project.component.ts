import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { Error } from '../../../shared/models/shared/error';
import { DevCategories } from '../../../shared/categ.enum/devCategories.enum';
import * as Firebase from 'firebase';
const firebase = require('firebase');
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { AngularFireStorage } from '@angular/fire/storage';


export interface IProjectComponent { 
  adminEmail: string;
  imageCategories:DevCategories[];

  onSignOut(): void;
  ngOnInit(): void;
}


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})


export class ProjectComponent implements IProjectComponent, OnInit {
  adminEmail:string;
  imageCategories: DevCategories[] = [DevCategories.day, DevCategories.night, DevCategories.bridal, DevCategories.special]
  handImgSrc: string ="https://firebasestorage.googleapis.com/v0/b/alexandraciausu-a6df7.appspot.com/o/assets%2FlogOut-hand.png?alt=media";

  
  constructor(private authService: AuthService,
    private translate: TranslateService,
    private storage: AngularFireStorage) { 
      translate.addLangs(['en', 'ro'])
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        console.log("onLangChange", event.translations)
      })
     translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
        console.log("onDefaultLangChange", event.translations)
      }) 
      translate.setDefaultLang('ro');
}


  onSignOut(): void {
    try {
      this.authService.SignOut();
    } catch (error) {
      console.error(`An error occurred trying to sign-out : ${error.message}`)
      if (error.message === "internal" || error.message === "unknown" || error.message === "canceled" || error.message === "permission-denied") {
        alert('Ne pare rau, pentru moment acest serviciu este indisponibil. Incerca mai tarziu!');
      } else alert('Mai incearca odata!');
    }
  }

  ngOnInit(): void {
    this.adminEmail = this.authService.currentUSerEmail();
  }
}

