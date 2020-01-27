import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-core-map-content',
  templateUrl: './core-map-content.component.html'
})
export class CoreMapContentComponent implements OnInit {
// tslint:disable-next-line: no-output-on-prefix
  @Output() onMapLoad: EventEmitter<{}> = new EventEmitter<{}>();
  constructor(public gMaps: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.gMaps.getNativeMap().then((map) => {
      this.onMapLoad.emit(map);
    });
  }
  
  }


