// export class FileUpload {
//     url: string;
//     file: File;

//   constructor(file: File) {
//     this.file = file
//   }
// }

export class Image {
  url: string
  file: File;
  constructor(file: File) {
    this.file = file
  }
}

export interface ImageCategory  extends Image {
    day: Image[];
    night: Image[];
    bridal: Image[];
    special: Image[];
  }

export class SelectableImage extends Image {
  isSelected: boolean;
}
export interface FirebaseItem {
  $key: string;
}
