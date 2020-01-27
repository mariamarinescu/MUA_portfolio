import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../../../shared/auth/auth.service';
import { IProjectUploadComponent } from '../../../shared/models/shared/project-upload';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';



@Component({
  selector: "app-project-upload",
  templateUrl: "./project-upload.component.html",
  styleUrls: ["./project-upload.component.sass"]
})


export class ProjectUploadComponent {

  constructor(private translate: TranslateService, private router: Router, private storage: AngularFireStorage) { 
    translate.addLangs(['en', 'ro']);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log("onLangChange", event.translations)
    });
   translate.onDefaultLangChange.subscribe((event: LangChangeEvent)  => {
      console.log("onDefaultLangChange", event.translations)
    });
}

takeMeBack() {
  this.router.navigate(['admin/meniu']);
}
  
}

// export class ProjectUploadComponent implements IProjectUploadComponent {

//   task: AngularFireUploadTask;
//   percentage: Observable<number>;
//   snapshot: Observable<any>;
//   downloadURL: Observable<string>;
//   isHovering: boolean;
//   selectedCategory: string = '';


//   constructor(
//     private storage: AngularFireStorage,
//     private router: Router,
//     private authService: AuthService
//   ) { }


//   selectChangeHandler(event: any):void {
//     this.selectedCategory = event.target.value
//   }

//   toggleHover(event: boolean):void {
//     this.isHovering = event;
//   }

//   startUpload(event: FileList):void {
//     const file = event.item(0);
    
//     if (file.type.split('/')[0] !== 'image') {
//       console.error('unsupported file type :( ');
//       return;
//     }

//     if (this.selectedCategory === 'Machiaj-de-zi') {
//       const path = `machiaj-de-zi/${new Date().getTime()}_${file.name}`;
//       const customMetadata = { app: 'Alexandra Ciausu - All rights reserved!' };
//       this.task = this.storage.upload(path, file, { customMetadata });
//       this.percentage = this.task.percentageChanges();
//       this.snapshot = this.task.snapshotChanges().pipe(
//         tap(snap => {}),
//         finalize(async () => {
//           this.downloadURL = await this.storage.ref(path).getDownloadURL();
//           this.downloadURL.subscribe(response => {
//             console.log(response);
//             let publishImage = firebase.functions().httpsCallable('publishImage');;
//             publishImage({
//               imgCategory: this.selectedCategory,
//               imgURL: response
//             }).then((result: any) => {
//               console.log(result)
//             }).catch((error: any) => {
//               console.error(`An error occured: ${error} publishing the image in JSON file.`);
//             })
//           })
//         })
//       );
//     } else if (this.selectedCategory === 'Machiaj-de-seara') {
//       const path = `machiaj-de-seara/${new Date().getTime()}_${file.name}`;
//       const customMetadata = { app: 'Alexandra Ciausu - All rights reserved!' };
//       this.task = this.storage.upload(path, file, { customMetadata });
//       this.percentage = this.task.percentageChanges();
//       this.snapshot = this.task.snapshotChanges().pipe(
//         tap(snap => {
//         }),
//         finalize(async () => {
//           this.downloadURL = await this.storage.ref(path).getDownloadURL();
//           this.downloadURL.subscribe(response => {
//             console.log(response);
//             let publishImage = firebase.functions().httpsCallable('publishImage');;
//             publishImage({
//               imgCategory: this.selectedCategory,
//               imgURL: response
//             }).then((result: any) => {
//               console.log(result)
//             }).catch((error: any) => {
//               console.error(`An error occured: ${error} publishing the image in JSON file.`);
//             })
//           })
//         })
//       );
//     } else if (this.selectedCategory === "Machiaj-de-mireasa") {
//       const path = `machiaj-de-mireasa/${new Date().getTime()}_${file.name}`;
//       const customMetadata = { app: 'Alexandra Ciausu - All rights reserved!' };
//       this.task = this.storage.upload(path, file, { customMetadata });
//       this.percentage = this.task.percentageChanges();
//       this.snapshot = this.task.snapshotChanges().pipe(
//         tap(snap => {
//         }),
//         finalize(async () => {
//           this.downloadURL = await this.storage.ref(path).getDownloadURL();
//           this.downloadURL.subscribe(response => {
//             console.log(response);
//             let publishImage = firebase.functions().httpsCallable('publishImage');;
//             publishImage({
//               imgCategory: this.selectedCategory,
//               imgURL: response
//             }).then((result: any) => {
//               console.log(result)
//             }).catch((error: any) => {
//               console.error(`An error occured: ${error} publishing the image in JSON file.`);
//             })
//           })
//         }));
//     } else if (this.selectedCategory === "Machiaj-special") {
//       const path = `machiaj-special/${new Date().getTime()}_${file.name}`;
//       const customMetadata = { app: 'Alexandra Ciausu - All rights reserved!' };
//       this.task = this.storage.upload(path, file, { customMetadata });
//       this.percentage = this.task.percentageChanges();
//       this.snapshot = this.task.snapshotChanges().pipe(
//         tap(snap => {
//         }),
//         finalize(async () => {
//           this.downloadURL = await this.storage.ref(path).getDownloadURL();
//           this.downloadURL.subscribe(response => {
//             console.log(response);
//             let publishImage = firebase.functions().httpsCallable('publishImage');;
//             publishImage({
//               imgCategory: this.selectedCategory,
//               imgURL: response
//             }).then((result: any) => {
//               console.log(result)
//             }).catch((error: any) => {
//               console.error(`An error occured: ${error} publishing the image in JSON file.`);
//             })
//           })
//         }));
//     }
//   }

//   isActive(snapshot:any):boolean {
//     return (
//       snapshot.state === 'running' &&
//       snapshot.bytesTransferred < snapshot.totalBytes
//     );
//   }

//   takeMeBack():void {
//     this.router.navigate(['admin/meniu']);
//   }


// }
























// import { Component } from "@angular/core";
// import forOwn from "lodash/forOwn";
// import {
//   AngularFireStorage,
//   AngularFireUploadTask
// } from '@angular/fire/storage';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { tap, finalize } from 'rxjs/operators';

// @Component({
//   selector: "app-project-upload",
//   templateUrl: "./project-upload.component.html",
//   styleUrls: ["./project-upload.component.css"]
// })
// export class ProjectUploadComponent {

// // Main task
// task: AngularFireUploadTask;

// // Progress monitoring
// percentage: Observable<number>;

// snapshot: Observable<any>;

// // Download URL
// downloadURL: Observable<string>;

// // State for dropzone CSS toggling
// isHovering: boolean;

// constructor(
//   private storage: AngularFireStorage,
//   private db: AngularFirestore
// ) {}

// toggleHover(event: boolean) {
//   this.isHovering = event;
// }

// startUpload(event: FileList) {
//   // The File object
//   const file = event.item(0);

//   // Client-side validation example
//   if (file.type.split('/')[0] !== 'image') {
//     console.error('unsupported file type :( ');
//     return;
//   }

//   // The storage path
//   const path = `test/${new Date().getTime()}_${file.name}`;

//   // Totally optional metadata
//   const customMetadata = { app: 'My AngularFire-powered PWA!' };

//   // The main task
//   this.task = this.storage.upload(path, file, { customMetadata });

//   // Progress monitoring
//   this.percentage = this.task.percentageChanges();
//   this.snapshot = this.task.snapshotChanges().pipe(
//     tap(snap => {
//       if (snap.bytesTransferred === snap.totalBytes) {
//         // Update firestore on completion
//         this.db.collection('photos').add({ path, size: snap.totalBytes });
//       }
//     }),
//     finalize(() => this.downloadURL = this.storage.ref(path).getDownloadURL() )
//   );


//   // The file's download URL
// }

// // Determines if the upload task is active
// isActive(snapshot) {
//   return (
//     snapshot.state === 'running' &&
//     snapshot.bytesTransferred < snapshot.totalBytes
//   );
// }
// }