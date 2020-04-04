import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../shared/auth/auth.service";
import { Router } from "@angular/router";
import { AuthGuard } from "../../shared/auth/auth.guard";
import { AngularFireAuth } from "@angular/fire/auth";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import $ = require('jquery');


export interface IHeaderComponent {
  readonly adminLoggedIn: boolean;
  goToHomePage(): void
}


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements IHeaderComponent {
  private user: Observable<firebase.User>;
  public readonly adminLoggedIn: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public authGuard: AuthGuard,
    private afAuth: AngularFireAuth,
    private translate: TranslateService) {
    translate.addLangs(["ro", "en"]);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    })
   translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
      console.log("onDefaultLangChange", event.translations)
    }) 
    translate.setDefaultLang('ro');
  }


  public changeLanguage(language) {
    console.log("language", language);
    // this.translate.setDefaultLang('ro');
    this.translate.use(language);
  }

  goToHomePage(): void {
    this.router.navigateByUrl('/pagina-principala');
  }

  ngOnInit() {
    $('.nav-btn').on('click', () => {
      $(this).siblings('div.nav-links').removeClass('closed').addClass('open');
    });
    
    $('div.nav-link').on('click', () => {
      $(this).closest('div.nav-links').removeClass('open').addClass('closed');
      // $('section').removeClass('active').filter( $(this).attr('href') ).addClass('active');
      // $('button.dropbtn').text( $(this).text() + " selected!");
    });
  }

}

