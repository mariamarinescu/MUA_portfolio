import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {
 
  constructor( private authService: AuthService,
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

}

