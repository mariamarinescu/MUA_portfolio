
# initial setup for fresh computer (Environment)
# Download Node.js and npm ("https://nodejs.org/en/") and install;

node -v
npm -v

npm install npm@latest -g
npm install @angular/cli -g
npm -v



# initial setup for fresh project
ng new AppTest4 --skipGit=true --style=css --routing=true --verbose=true
cd AppTest4
npm install
npm install ng-modules

#validate
ng serve --open

#new component
ng generate ComponentName



#Troubleshoot
npm install -g npm
npm uninstall angular-cli -g 
npm cache clean
npm install @angular/cli@latest -g


set the default style on an existing project:

# set the default style on an existing project:
ng config schematics.@schematics/angular:component '{ styleext: "scss"}'

PORTFOLIO = 
"$ ng new Portfolio --skipGit=true --style=css --routing=true verbose=true --viewEncapsulation=Emulated" 
$ cd Portfolio
$ ng g c header
$ ng g c footer
$ ng g c home
$ ng g c portfolio
$ ng g c contact
npm install bootstrap-css@4.2.1 --save - error /4.1.3  * npm unninstall bootstrap
npm install bootstrap --save ( 4.2.1 )
npm install jquery --save  ( 3.3.1 )
npm install --save popper.js angular-popper ( + popper.js@1.14.6 + angular-popper@2.0.0 )
* npm uninstall bootstrap
npm install bootstrap@4.1.3
+ import 'bootstrap/dist/js/bootstrap.bundle'; in app.component.ts
ng g module admin
$ ng g c admin/project-list
$ ng g c admin/project-create
$ ng g c admin/project-update
$ ng g c admin/project
npm install rxjs ( 6.3.3 )
$ npm install firebase @angular/fire --save
+ firebase@5.8.0
+ @angular/fire@5.1.1"
$ ng g guard admin/admin

$npm install @agm/core --save (Angular Google Maps)


$ng g c Day-Makeup
$ng g c Night-Makeup
$ng g c Bridal-Makeup
$ng g c Special-Makeup
$ng g c Fairytales-Makeup
$ng g c Haloween-Makeup

$npm install ng2-go-top-button@3.0.0 --save
$npm install ui-carousel --save
$ ng g c day-carousel
$ ng g s DayImgs
npm install --save @types/angular
npm install --save ngx-lightbox

$npm i --save angular-carousel@latest
$npm i ng-bootstrap@latest
$npm install --save @ng-bootstrap/ng-bootstrap
$npm install -g npm-check --skipunused
ERROR in The Angular Compiler requires TypeScript >=3.1.1 and <3.3.0 but 3.3.1 was found instead.
$npm i typescript@3.1.6 --save-dev --save-exact
ERROR in No NgModule metadata found for 'AppModule'.
npm cache clear --force
$npm cache verify
$npm i -g @angular/cli@latest
$npm install rm
added : import {APP_BASE_HREF} from '@angular/common'; & providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}] @NGMODULE - in app.module.ts
$npm install rxjs-compat
ng g c DayMakeupGallery
ng g c DayImageDetails
npm install @types/node --save-dev
npm un ng2-go-top-button
npm install firebase angularfire2 --save
npm i angular-firebase-gallery
$ npm install octicons --save
npm i write-file --save
ngx-jsonapi@2.0.0-rc.4 --save
npm install -g json-server
npm install file-system --save

Firebase functions 

npm install -g firebase-tools
firebase login
firebase deploy --only functions:addPerson
npm install --save @google-cloud/language
npm install express

$ npm install animejs --save

npm install --save @google-cloud/storage



export class ImageService {
private _url: string = "../../../../assets/img/Day-Make-Up/Day-Make-Up.json";

constructor( private http: HttpClient) { }
getImages(): Observable<IImages[]> {
    return this.http.get<IImages[]>(this._url);
}
}
