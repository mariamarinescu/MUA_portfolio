import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string  = 'Portfolio';


  constructor(
    public translate: TranslateService, 
    private service: DataService
    ) {
   translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    })
   translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
      console.log("onDefaultLangChange", event.translations)
    }) 
    translate.setDefaultLang('ro');
    
  }

 
}
