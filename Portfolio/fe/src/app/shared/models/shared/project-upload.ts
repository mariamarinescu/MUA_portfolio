import { AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';



export interface IProjectUploadComponent {
    task: AngularFireUploadTask;
    percentage: Observable<number>;
    snapshot: Observable<any>;
    downloadURL: Observable<string>;
    isHovering: boolean;
    selectedCategory: string;

    selectChangeHandler(event: any): void;
    toggleHover(event: boolean): void;
    startUpload(event: FileList):void;
    isActive(snapshot: any): boolean;
    takeMeBack(): void;
}