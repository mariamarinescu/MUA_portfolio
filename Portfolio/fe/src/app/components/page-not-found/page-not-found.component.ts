import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

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

  ngOnInit() {
  }

}
