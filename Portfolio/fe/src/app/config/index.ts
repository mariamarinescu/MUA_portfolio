import { GALLERY_CONF, GALLERY_IMAGE } from "ngx-image-gallery";
import { DataService } from '../shared/services/data.service';
// import data from '../../assets/img/portfolio/file.json';


export const PORTFOLIO_GALLERY_CONF_INLINE: GALLERY_CONF = {
  imageOffset: "0px",
  imagePointer: true,
  showDeleteControl: false,
  showCloseControl: false,
  showExtUrlControl: false,
  closeOnEsc: true,
  showImageTitle: false,
  inline: true,
  backdropColor: "default"
};

export const PORTFOLIO_GALLERY_CONF: GALLERY_CONF = {
  imageOffset: "0px",
  showDeleteControl: false,
  showCloseControl: true,
  showImageTitle: false,
  inline: false,
  backdropColor: "rgba(13,13,14,0.85)"
};



// // gallery images
// export const PORTFOLIO_DAY_GALLERY: GALLERY_IMAGE[] = data.day;
// export const PORTFOLIO_NIGHT_GALLERY: GALLERY_IMAGE[] = data.night;
// export const PORTFOLIO_BRIDAL_GALLERY: GALLERY_IMAGE[] = data.bridal;
// export const PORTFOLIO_SPECIAL_GALLERY: GALLERY_IMAGE[] = data.special;
// //  [
//   {
//     url: "../../../../assets/img/portfolio/day/1.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/2.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/3.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/4.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/5.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/6.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/7.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/8.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/9.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/10.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/11.jpg"
//   },
//   {
//     url: "../../../../assets/img/portfolio/day/12.jpg"
//   }
// ];
