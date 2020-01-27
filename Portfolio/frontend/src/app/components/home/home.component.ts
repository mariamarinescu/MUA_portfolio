import { Component, AfterViewInit, Input } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { IHomeComponent } from '../../shared/models/shared/home';
import { TranslateService } from '@ngx-translate/core';
import { CoreMapContentComponent } from './gmap-component/core-map-content.component';
import * as $ from 'jquery'

const storagePath:string = "firebasestorage.googleapis.com"
const bucket: string = "alexandraciausu-a6df7";
const linkSuffix: string = "appspot.com";

declare var google: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements AfterViewInit {
  lgXLImg: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2Fportrait-of-a-girl-1344647.png?alt=media`;
  mdImg: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F1279mobile.jpg?alt=media`;
  smImg: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F959mobile.jpg?alt=media`;
  xsImg: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F599mobile.jpg?alt=media`;
  mapImg: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2Fbucharest.png?alt=media`;
  secondImglgXL: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F1860homepage.jpg?alt=media`;
  secondImgMd: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F1279mobile2.jpg?alt=media`;
  secondImgSm: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F959mobile2.jpg?alt=media`;
  secondImgxs: string = `https://${storagePath}/v0/b/${bucket}.${linkSuffix}/o/assets%2F599mobile2.jpg?alt=media`;
  map: any;
  lat: number = 44.421026;
  lng: number = 26.122668;
  zoom: number = 15;
  locations: {};

  constructor(public gMaps: GoogleMapsAPIWrapper,
    private translate: TranslateService) {
    translate.addLangs(['en', 'ro'])
    translate.setDefaultLang('ro');
    translate.use('ro');
  }


  scrollFunction(): any {
    // const docWidth = $(document).width();
    // if(docWidth === '600px') {
    //   if (
    //     document.body.scrollTop > 10 ||
    //     document.documentElement.scrollTop > 10
    //   ) {
    //     // document.getElementById('myBtn').style.display = 'block';
    //       const button = document.getElementById('myBtn');
    //       button.classList.remove('btn-large');
    //       button.classList.add('btn-mobile');
    //       button.addEventListener('click', () => {
    //         window.scrollTo(0, 0);
    //       });
    //       button.classList.remove("btn-mobile");
    //     } 
    // } 
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {

      document.getElementById('myBtn').style.display = 'block';
      const button = document.getElementById('myBtn');
      button.addEventListener('click', () => {
        window.scrollTo(0, 0);
      });
    } else {
      document.getElementById('myBtn').style.display = 'none';

    }


  };


  //   $(window:any).scroll(function() {
  //     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
  //         $('#return-to-top').fadeIn(200);    // Fade in the arrow
  //     } else {
  //          // Else fade out the arrow
  //     }
  // });


  ngAfterViewInit(): void {
    window.onscroll = () => {
      this.scrollFunction();
    };
  }
  public loadAPIWrapper(map: any): void {
    this.map = map;

  }

  public markerClicked(lat: number, lng: number): void {
    const position = new google.maps.LatLng(lat, lng);
    this.map.panTo(position);
    this.zoom = this.map.getZoom();
    this.zoom++;
    this.map.setZoom(this.zoom);
  }
}

