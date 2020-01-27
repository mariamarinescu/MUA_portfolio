import { Component, ViewChild, OnInit } from '@angular/core';
import { PORTFOLIO_GALLERY_CONF_INLINE } from '../../config';
import {
  GALLERY_CONF,
  GALLERY_IMAGE,
  NgxImageGalleryComponent
} from 'ngx-image-gallery';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { IData } from '../../shared/models/data';
import { KeysPipe } from '../../shared/pipes/keys.pipe'
import { IMakeupGalleryComponent } from '../../shared/models/shared/makeup-gallery';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TitleByCategories } from '../../shared/categ.enum/title.enum';
import { CaptionByCategories } from '../../shared/categ.enum/caption.enum';
import { EOL } from 'os';


@Component({
  selector: 'app-makeup-gallery',
  templateUrl: './makeup-gallery.component.html',
  styleUrls: ['./makeup-gallery.component.sass']
})


export class MakeupGalleryComponent implements OnInit, IMakeupGalleryComponent {

  public showConf: boolean = true;
  @ViewChild('ngxImageGallery', {static: false}) ngxImageGallery: NgxImageGalleryComponent;

  title: string = '';
  caption: string = '';
  conf: GALLERY_CONF = PORTFOLIO_GALLERY_CONF_INLINE;
  images: GALLERY_IMAGE[];
  filterBy: string = '';
  entireData: IData;

  public constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService,
    private translate: TranslateService) {
    translate.addLangs(['en', 'ro']);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    });
    translate.onDefaultLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onDefaultLangChange", event.translations)
    });
    translate.setDefaultLang('ro');
  }

  showData(): void {
    this.dataService.getData()
      .subscribe((data: IData) => {
        this.entireData = { ...data };
        switch (this.filterBy) {
          case 'machiaj-de-zi':
            this.images = this.entireData['day'];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.dayRO;
              this.caption = CaptionByCategories.dayRO;
            } else  {
              this.title = TitleByCategories.dayEN;
              this.caption = CaptionByCategories.dayEN;
            }  
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
              if (this.translate.currentLang === "en") {
                this.title = TitleByCategories.dayEN;
                this.caption = CaptionByCategories.dayEN;
              } else  {
                this.title = TitleByCategories.dayRO;
                this.caption = CaptionByCategories.dayRO;
              }           
             });
           
            break;
          case 'machiaj-de-seara':
            this.images = this.entireData['night'];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.nightRO;
              this.caption = CaptionByCategories.nightRO;
            } else  {
              this.title = TitleByCategories.bridalEN;
              this.caption = CaptionByCategories.bridalEN;
            }  
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
              if (this.translate.currentLang === "en") {
                this.title = TitleByCategories.nightEN;
                this.caption = CaptionByCategories.nightEN;
              } else  {
                this.title = TitleByCategories.nightRO;
                this.caption = CaptionByCategories.nightRO;
              }          
             });
            break;
          case 'machiaj-de-mireasa':
            this.images = this.entireData['bridal'];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.bridalRO;
              this.caption = CaptionByCategories.bridalRO;
            } else  {
              this.title = TitleByCategories.bridalEN;
              this.caption = CaptionByCategories.bridalEN;
            }  
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
              if (this.translate.currentLang === "en") {
                this.title = TitleByCategories.bridalEN;
                this.caption = CaptionByCategories.bridalEN;
              } else  {
                this.title = TitleByCategories.bridalRO;
                this.caption = CaptionByCategories.bridalRO;
              }             
             });
            break;
          case 'machiaj-special':
            this.images = this.entireData['special'];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.specialRO;
              this.caption = CaptionByCategories.specialRO;
            } else  {
              this.title = TitleByCategories.specialEN;
              this.caption = CaptionByCategories.specialEN;
            }    
            this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
              if (this.translate.currentLang === "en") {
                this.title = TitleByCategories.specialEN;
                this.caption = CaptionByCategories.specialEN;
              } else  {
                this.title = TitleByCategories.specialRO;
                this.caption = CaptionByCategories.specialRO;
              }           
             });
            break;
        }
      });
  }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.filterBy = routeParams.category;
      this.showData();
    });
  }


  nextImage(): void {
    this.ngxImageGallery.next();
  }

  prevImage(): void {
    this.ngxImageGallery.prev();
  }

}

