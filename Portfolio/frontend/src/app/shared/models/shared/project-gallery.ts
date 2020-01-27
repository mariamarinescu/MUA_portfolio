import { Image, ImageCategory } from '../models';


export interface IProjectGalleryComponent {
    showConf: boolean;
     title: string;
     caption: string;
     images: ImageCategory;
     filterBy: string;
     entireData: Image;
     storage: any;
     categoryRef: any;
     category: string;
     navigationSubscription:any;
   
     takeMeBack():void;
     showData():void;
     ngOnInit(): void;
     ngOnChanges(): void;
     trackImage(index: number, image: any): string;
     deleteImg(img: string): void;
     signOut(): void
   }