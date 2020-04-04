
import {
    NgxImageGalleryComponent,
    GALLERY_CONF,
    GALLERY_IMAGE,
} from 'ngx-image-gallery';
import { IData } from '../data';


export interface IMakeupGalleryComponent {
    showConf: boolean;
    ngxImageGallery: NgxImageGalleryComponent;
    title: string;
    caption: string;
    conf: GALLERY_CONF;
    images: GALLERY_IMAGE[];
    filterBy: string;
    entireData: IData;

    showData(): void;
    ngOnInit(): void;
    nextImage(): void;
    prevImage(): void;
}