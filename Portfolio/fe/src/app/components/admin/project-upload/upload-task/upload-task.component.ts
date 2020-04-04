import { Input, Component } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UploaderComponent } from '../uploader/uploader.component'
import { tap, finalize } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { TitleByCategories } from '../../../../shared/categ.enum/title.enum'
import { Categories } from '../../../../shared/categ.enum/dropDown-categories.enum'
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { DevCategories } from '../../../../shared/categ.enum/devCategories.enum';


@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.sass']

})


export class UploadTaskComponent {

  @Input() files: File[] = [];
  @Input() file: File;
  filterBy: string = '';
  selectedCategory: string = "";
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;
  metadata: string = 'Alexandra Ciausu - All rights reserved!';
  URLsList = [];
  changes: boolean = false;

  // @Input('category') imgCategory: string;

  constructor(public storage: AngularFireStorage, private db: AngularFirestore,
    private activeRoute: ActivatedRoute,
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

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.filterBy = routeParams.category;
    });
    this.startUpload();
  }

  startUpload() {
    
    if (this.filterBy === Categories.day) {
      const path = `${Categories.day}/${new Date().getTime()}_${this.file.name}`;
      const customMetadata = { app: this.metadata };
      this.task = this.storage.upload(path, this.file, { customMetadata });
      this.selectedCategory = DevCategories.day;
      const ref = this.storage.ref(path);
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        finalize(async () => {
          this.downloadURL = ref.getDownloadURL().toPromise()
          // .then(result => {
          //   (this.URLsList += result).then(() => {
          //     this.changes = true;
          //   })

          // })

          // do {
          //   let publishImage = firebase.functions().httpsCallable('publishImage');;
          //       publishImage({
          //         imgCategory: this.selectedCategory,
          //         imgURL: this.downloadURL
          //       }).then((result: any) => {
          //         console.log(result)
          //       }).catch((error: any) => {
          //         console.error(`An error occured: ${error} publishing the image in JSON file.`);
          //     })
          // } while()
          // this.downloadURL = await this.storage.ref(path).getDownloadURL();
          // new Promise(() => {
          //   this.downloadURL.subscribe(response => {
          //     console.log(response);
          //     let publishImage = firebase.functions().httpsCallable('publishImage');;
          //     publishImage({
          //       imgCategory: this.selectedCategory,
          //       imgURL: response
          //     }).then((result: any) => {
          //       console.log(result)
          //     }).catch((error: any) => {
          //       console.error(`An error occured: ${error} publishing the image in JSON file.`);
          //   })
          //   })

          // })

          // this.downloadURL.subscribe(response => {
          //   console.log(response);
          //   let publishImage = firebase.functions().httpsCallable('publishImage');;
          //   publishImage({
          //     imgCategory: this.selectedCategory,
          //     imgURL: response
          //   }).then((result: any) => {
          //     console.log(result)
          //   }).catch((error: any) => {
          //     console.error(`An error occured: ${error} publishing the image in JSON file.`);
          // })
          // })
        })
      );
    } else if (this.filterBy === Categories.night) {
      const path = `${Categories.night}/${new Date().getTime()}_${this.file.name}`;
      const customMetadata = { app: this.metadata };
      this.task = this.storage.upload(path, this.file, { customMetadata });
      this.selectedCategory = DevCategories.night;
      const ref = this.storage.ref(path);
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges().pipe(
        tap(),
        finalize(() => {
          // this.downloadURL = await this.storage.ref(path).getDownloadURL();
          this.downloadURL = ref.getDownloadURL().toPromise()
          // .then(result => {
          //   (this.URLsList += result).then(() => {
          //     this.changes = true;
          //   })

            //   let publishImage = firebase.functions().httpsCallable('publishImage');;
            //   publishImage({
            //     imgCategory: this.selectedCategory,
            //     imgURL: this.downloadURL
            //   }).then((result: any) => {
            //     console.log(result)
            //   }).catch((error: any) => {
            //     console.error(`An error occured: ${error} publishing the image in JSON file.`);
            // })

          // })

          // this.downloadURL.subscribe(response => {
          //   console.log(response);
          //   let publishImage = firebase.functions().httpsCallable('publishImage');;
          //   publishImage({
          //     imgCategory: this.selectedCategory,
          //     imgURL: response
          //   }).then((result: any) => {
          //     console.log(result)
          //   }).catch((error: any) => {
          //     console.error(`An error occured: ${error} publishing the image in JSON file.`);
          //   })
          // })

        }))
    } else if (this.filterBy === Categories.bridal) {
      const path = `${Categories.bridal}/${new Date().getTime()}_${this.file.name}`;
      const customMetadata = { app: this.metadata };
      this.task = this.storage.upload(path, this.file, { customMetadata });
      this.selectedCategory = DevCategories.bridal;
      const ref = this.storage.ref(path);
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        finalize(async () => {
          this.downloadURL = ref.getDownloadURL().toPromise()
          // .then(result => {
          //   (this.URLsList += result).then(() => {
          //     this.changes = true;
          //   })
          // })

          // this.downloadURL.subscribe(response => {
          //   console.log(response);
          //   let publishImage = firebase.functions().httpsCallable('publishImage');;
          //   publishImage({
          //     imgCategory: this.selectedCategory,
          //     imgURL: response
          //   }).then((result: any) => {
          //     console.log(result)
          //   }).catch((error: any) => {
          //     console.error(`An error occured: ${error} publishing the image in JSON file.`);
          //   })
          // })
        }));
    } else if (this.filterBy === Categories.special) {
      const path = `${Categories.special}/${new Date().getTime()}_${this.file.name}`;
      const customMetadata = { app: this.metadata };
      this.task = this.storage.upload(path, this.file, { customMetadata });
      this.selectedCategory = DevCategories.special;
      const ref = this.storage.ref(path);
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        finalize(async () => {
          this.downloadURL = ref.getDownloadURL().toPromise()
        //   .then(result => {
          
        //       this.URLsList += result
        // if(this.URLsList === result) {
        //   this.changes = true;
        // }
             
          
        //   })

          // this.downloadURL.subscribe(response => {
          //   console.log(response);
          // let publishImage = firebase.functions().httpsCallable('publishImage');;
          // publishImage({
          //   imgCategory: this.selectedCategory,
          //   imgURL: response
          // }).then((result: any) => {
          //   console.log(result)
          // }).catch((error: any) => {
          //   console.error(`An error occured: ${error} publishing the image in JSON file.`);
          // })
          // })
        }));
    }
  // if(this.changes === true) {
  //   console.log(this.URLsList)
  //   let publishImage = firebase.functions().httpsCallable('publishImage');;
  //   publishImage({
  //     imgCategory: this.selectedCategory,
  //     imgURLs: [this.URLsList]
  //     //TODO
  //     // imgURL: response
  //   }).then((result: any) => {
  //     console.log(result)

  //   }).catch((error: any) => {
  //     console.error(`An error occured: ${error} publishing the image in JSON file.`);

  //   })
  // }
}
      
    



  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}

// // The storage path
// const path = `test/${Date.now()}_${this.file.name}`;

// // Reference to storage bucket
// const ref = this.storage.ref(path);

// // The main task
// this.task = this.storage.upload(path, this.file);

// // Progress monitoring
// this.percentage = this.task.percentageChanges();

// this.snapshot   = this.task.snapshotChanges().pipe(
//   tap(console.log),
//   // The file's download URL
//   finalize( async() =>  {
//     this.downloadURL = await ref.getDownloadURL().toPromise();

//     this.db.collection('files').add( { downloadURL: this.downloadURL, path });
//   }),
// );



    // // The storage path
    // const path = `test/${Date.now()}_${this.file.name}`;

    // // Reference to storage bucket
    // const ref = this.storage.ref(path);

    // // The main task
    // this.task = this.storage.upload(path, this.file);

    // // Progress monitoring
    // this.percentage = this.task.percentageChanges();

    // this.snapshot   = this.task.snapshotChanges().pipe(
    //   tap(console.log),
    //   // The file's download URL
    //   finalize( async() =>  {
    //     this.downloadURL = await ref.getDownloadURL().toPromise();

    //     this.db.collection('files').add( { downloadURL: this.downloadURL, path });
    //   }),
    // );


