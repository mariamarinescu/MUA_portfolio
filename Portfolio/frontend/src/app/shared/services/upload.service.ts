import { Injectable } from "@angular/core";
import * as firebase from "firebase/app";
import { AngularFireStorage } from "angularfire2/storage";
import { Upload } from '../models/upload';
import { PathCategories } from '../categ.enum/img-cat-paths.enum';

export interface IUploadService {
  basePath: PathCategories;
  pushUpload(upload: Upload): void;
}

@Injectable({
  providedIn: "root"
})
export class UploadService implements IUploadService {
  constructor(private af: AngularFireStorage) {}

basePath: PathCategories = PathCategories.day;

  pushUpload(upload: Upload): void {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef
      .child("${this.basePath}/${upload.file.name}")
      .put(upload.file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      error => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL
        upload.name = upload.file.name
      }
    );
  }
}




















// deleteUpload(upload: Upload) {
//   this.deleteFileStorage(upload.name)
// }

// private deleteFileStorage(name:string) {
//   let storageRef = firebase.storage().ref();
//   storageRef.child('${this.basePath}/${name}').delete();
// }


