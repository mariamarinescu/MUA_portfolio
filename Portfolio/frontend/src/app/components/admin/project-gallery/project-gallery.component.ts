import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { Image, ImageCategory } from '../../../shared/models/models';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthService } from '../../../shared/auth/auth.service';
import { IProjectGalleryComponent } from '../../../shared/models/shared/project-gallery';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TitleByCategories } from '../../../shared/categ.enum/title.enum';
import { CaptionByCategories } from '../../../shared/categ.enum/caption.enum';


@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.sass']
})

export class ProjectGalleryComponent implements IProjectGalleryComponent, OnInit, OnChanges {
  public showConf: boolean = true;
  title: string = '';
  caption: string = '';
  @Input() images: ImageCategory;
  filterBy: string = '';
  entireData: Image;
  storage: any = firebase.storage;
  categoryRef: any;
  category: string = "not-defined-yet";
  navigationSubscription: any;
  regularDistribution = 100 / 3;
  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private afStorage: AngularFireStorage,
    private authService: AuthService,
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

ngOnInit(): void {
  this.activeRoute.params.subscribe(routeParams => {
    this.filterBy = routeParams.category;
  });
  this.translate.get('adminGallery.title', {title:this.title}).subscribe((res) => {
    console.log(res);
  });
  this.showData();

}

  takeMeBack(): void {
    this.router.navigate(['admin/meniu']);
  }

  showData(): void {
    try {
      this.dataService.getData().subscribe((data: ImageCategory) => {
        this.entireData = { ...data };
        switch (this.filterBy) {
          case 'machiaj-de-zi':
            this.category = "day";
            console.log(this.category);
            this.images = this.entireData[this.category];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.dayRO;
              this.caption = CaptionByCategories.dayRO;
            } else if (this.translate.currentLang === "en") {
              this.title = TitleByCategories.dayEN;
              this.caption = CaptionByCategories.dayEN;
            }
            this.categoryRef = this.afStorage.ref('machiaj-de-zi');
            break;
          case 'machiaj-de-seara':
            this.category = "night";
            console.log(this.category);
            this.images = this.entireData[this.category];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.nightRO;
              this.caption = CaptionByCategories.nightRO;
            } else if (this.translate.currentLang === "en") {
              this.title = TitleByCategories.nightEN;
              this.caption = CaptionByCategories.nightEN;
            }
            this.categoryRef = this.afStorage.ref('machiaj-de-seara');
            break;
          case 'machiaj-de-mireasa':
            this.category = "bridal";
            console.log(this.category);
            this.images = this.entireData[this.category];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.bridalRO;
              this.caption = CaptionByCategories.bridalRO;
            } else if (this.translate.currentLang === "en") {
              this.title = TitleByCategories.bridalEN;
              this.caption = CaptionByCategories.bridalEN;
            }
            this.categoryRef = this.afStorage.ref('machiaj-de-mireasa');

            break;
          case 'machiaj-special':
            this.category = "special";
            console.log(this.category);
            this.images = this.entireData[this.category];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.specialRO;
              this.caption = CaptionByCategories.specialRO;
            } else if (this.translate.currentLang === "en") {
              this.title = TitleByCategories.specialEN;
              this.caption = CaptionByCategories.specialEN;
            }
            this.categoryRef = this.afStorage.ref('machiaj-special');
            break;
          default:
            this.category = "day";
            console.log(this.category);
            this.images = this.entireData[this.category];
            if (this.translate.currentLang === "ro") {
              this.title = TitleByCategories.dayRO;
              this.caption = CaptionByCategories.dayRO;
            } else if (this.translate.currentLang === "en") {
              this.title = TitleByCategories.dayRO;
              this.caption = CaptionByCategories.dayRO;
            }
            this.categoryRef = this.afStorage.ref('machiaj-de-zi');
        };
        return this.images;
      })
    } catch (error) {
      console.error(`An error occurred loading images: ${error}`);
      if (error.message === "internal" || error.message === "unknown" || error.message === "canceled" || error.message === "permission-denied") {
        alert('A aparut o eroare. Incerca mai tarziu!');
      } else {
        alert('O eroare a aparut.Te rog, mai incearca odata!');
        this.router.navigate(['pagina-principala']);
      }
    }
  }

 

  ngOnChanges(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.filterBy = routeParams.category;
    });
    this.showData();
  }

 


  public trackImage(index: number, image: any): string {
    return image.url ? image.url : null
  }

  deleteImg(img: string): void {
    const modalSuccess = document.getElementById("modal-success");
    const modalFailure = document.getElementById("modal-failure");
    const closeModal = document.getElementById("close-modal");

    this.afStorage.storage.refFromURL(img).delete().then(function () {
      console.log(`File: ${img} deleted successfully from storage.`);
    }).then(() => {
      const deleteImage = firebase.functions().httpsCallable('deleteImage');
      deleteImage({
        imgCategory: this.category,
        content: img
      })
        .then(() => {

          modalSuccess.style.display = "block";
          closeModal.onclick = () => {
            modalSuccess.style.display = "none";
          };
          window.onclick = function (event) {
            if (event.target == modalSuccess) {
              modalSuccess.style.display = "none";
            }
          };
          console.log(`Image deleted & written in JSON successfully.`);

        })
        .catch((error: any) => {
          console.error(`Error writing in JSON deletion of the image ${img} : ${error}.`);
        });
    }).catch((error) => {
      modalFailure.style.display = "block";
      closeModal.onclick = () => {
        modalFailure.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modalFailure) {
          modalFailure.style.display = "none";
        }
      };
      console.error(`An error occured: ${error} deleting the image`);
    });
setTimeout(() =>{
  this.showData();
},1500);
    
  }

  signOut(): void {
    this.authService.SignOut()
  }
}


