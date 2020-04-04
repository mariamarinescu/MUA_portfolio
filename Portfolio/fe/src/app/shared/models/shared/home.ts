

export interface IHomeComponent {
    map: any;
    lat: number;
    lng: number;
    zoom: number;
    locations: {};
  
    scrollFunction(): void
    ngAfterViewInit(): void
    loadAPIWrapper(map: any): void;
    markerClicked(lat: number, lng: number): void;
  }
  