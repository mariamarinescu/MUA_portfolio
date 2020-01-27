const storagePreffix : string = "firebasestorage";
const googleSuffix : string  = "googleapis";
const appSuffix: string = "appspot"
const artist: string = "alexandraciausu";
const uniqueId: string = "a6df7";
const fileName: string = "file"

import { Injectable, OnInit, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IData } from '../models/data';


export interface IDataService {
  _dataURL: string;
  getData(): Observable<IData>;
}

@Injectable({
  providedIn: "root"
})


export class DataService implements IDataService {

   _dataURL:string = `https://${storagePreffix}.${googleSuffix}.com/v0/b/${artist}-${uniqueId}.${appSuffix}.com/o/${fileName}.json?alt=media`;


  constructor(private http: HttpClient) { }

      getData():Observable<IData> {
    return this.http.get<IData>(this._dataURL);
  };

}

