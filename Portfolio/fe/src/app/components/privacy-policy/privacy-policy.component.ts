import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.sass']
})

export class PrivacyPolicyComponent {

  constructor(private translate: TranslateService) { 
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

