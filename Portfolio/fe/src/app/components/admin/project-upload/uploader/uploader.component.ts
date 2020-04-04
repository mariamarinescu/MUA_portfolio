import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevCategoriesRO, DevCategoriesEN, DevCategories } from '../../../../shared/categ.enum/devCategories.enum';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Categories } from '../../../../shared/categ.enum/dropDown-categories.enum';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.sass']
})
export class UploaderComponent implements OnInit {
  filterBy: Categories;
  // public categoriesRO: DevCategoriesRO;
  // public categoriesEN: DevCategoriesEN;
  public categories: DevCategoriesRO | DevCategoriesEN;
  isHovering: boolean;

  public files: File[] = [];



  constructor(private translate: TranslateService, private activeRoute: ActivatedRoute,
    private router: Router, private storage: AngularFireStorage) {
    translate.addLangs(['en', 'ro']);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    });
    translate.onDefaultLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onDefaultLangChange", event.translations)
    });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.filterBy = routeParams.category;
    });
    if (this.translate.currentLang === 'en') {
      switch (this.filterBy) {
        case Categories.day:
          this.categories = DevCategoriesEN.dayEN;
          break;
        case Categories.night:
          this.categories = DevCategoriesEN.nightEN;
          break;
        case Categories.bridal:
          this.categories = DevCategoriesEN.bridalEN;
          break;
        case Categories.special:
          this.categories = DevCategoriesEN.specialEN;
          break;
      } 
    } else  {
      switch (this.filterBy) {
        case Categories.day:
          this.categories = DevCategoriesRO.dayRO;
          break;
        case Categories.night:
          this.categories = DevCategoriesRO.nightRO;
          break;
        case Categories.bridal:
          this.categories = DevCategoriesRO.bridalRO;
          break;
        case Categories.special:
          this.categories = DevCategoriesRO.specialRO;
          break;
      } 
    }
    
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
