import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatDialogModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "@angular/fire";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
import {MatSelectModule} from '@angular/material/select'
import {MatMenuModule} from '@angular/material/menu';


import { GoogleMapsAPIWrapper } from "@agm/core";

import { NgxImageGalleryModule } from "ngx-image-gallery";
import { AlertModule } from "ng2-bootstrap";

import { KeysPipe } from "../shared/pipes/keys.pipe";
import { ImageFilterPipe } from "../shared/pipes/filter.pipe";
import { AppRoutingModule } from "./app-routing.module";
import { routes } from "./app-routing.module";

import { AppComponent } from "../components/app.component";
import { HeaderComponent } from "../components/header/header.component";
import { HomeComponent } from "../components/home/home.component";
import { HighlightDirective } from "../shared/directives/highlight.directive";
import { CoreMapContentComponent } from "../components/home/gmap-component/core-map-content.component";
import { MakeupGalleryComponent } from "../components/makeup-gallery/makeup-gallery.component";
import { ContactComponent } from "../components/contact/contact.component";
import { ServicesComponent } from "../components/services/services.component";
import { AdminComponent } from "../components/admin/admin.component";
import { FooterComponent } from "../components/footer/footer.component";
import { PrivacyPolicyComponent } from "../components/privacy-policy/privacy-policy.component";

import { AuthService } from '../shared/auth/auth.service';
// import { AdminRoutingModule } from './admin/admin-routing.module';
import { AuthGuard } from '../shared/auth/auth.guard';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AngularFireStorage, AngularFireStorageModule, StorageBucket } from '@angular/fire/storage';
import { DataService } from '../shared/services/data.service';
import { LoginComponent } from '../components/login/login.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
// import { environment } from '../../environments/environment';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule, FirestoreSettingsToken, AngularFirestore } from '@angular/fire/firestore';
import { ProjectComponent } from '../components/admin/project/project.component';
import { ProjectUploadComponent } from '../components/admin/project-upload/project-upload.component';
import { ProjectGalleryComponent } from '../components/admin/project-gallery/project-gallery.component';
import { FileSize } from '../shared/pipes/file-size.pipe';
import { DropzoneDirective } from '../shared/directives/drop-zone.directive';
import { UploadTaskComponent } from '../components/admin/project-upload/upload-task/upload-task.component';
import { UploaderComponent } from '../components/admin/project-upload/uploader/uploader.component';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


var config = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4J5ZMR0C0mklcF6eK4I0BtAk7mb72k3Q",
    authDomain: "alexandraciausu-a6df7.firebaseapp.com",
    databaseURL: "https://alexandraciausu-a6df7.firebaseio.com",
    projectId: "alexandraciausu-a6df7",
    storageBucket: "alexandraciausu-a6df7.appspot.com",
    messagingSenderId: "833859289093"
  }
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQi5-BLLLK-OB7fpJloedND7CYKzjMayA'
    }),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    HttpClientModule,
    [RouterModule.forRoot(routes, { enableTracing: true, onSameUrlNavigation: 'reload' })],
    NgxImageGalleryModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    AngularFireStorageModule,
    AngularFirestoreModule.enablePersistence({experimentalTabSynchronization:true}),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: createTranslateLoader, // exported factory function needed for AoT compilation
          deps: [HttpClient]
      }
    }),
    FlexLayoutModule
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightDirective,
    CoreMapContentComponent,
    ContactComponent,
    MakeupGalleryComponent,
    ServicesComponent,
    AdminComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    PageNotFoundComponent,
    ImageFilterPipe,
    KeysPipe,
    LoginComponent,
    ForgotPasswordComponent,
    ProjectGalleryComponent,
    ProjectUploadComponent,
    ProjectComponent,
    UploadTaskComponent,
    UploaderComponent,
    FileSize,
    DropzoneDirective

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    DataService,
    GoogleMapsAPIWrapper,
    AuthService,
    AuthGuard,
    FileSize,
    TranslatePipe,
    AngularFirestore,
    AngularFireAuth,
    AngularFireStorage,
    {provide: StorageBucket, useValue: "alexandraciausu-a6df7.appspot.com"}


  ],
  exports: [ImageFilterPipe, KeysPipe],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
