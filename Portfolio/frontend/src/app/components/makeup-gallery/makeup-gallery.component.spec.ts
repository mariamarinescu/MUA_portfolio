// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { } from 'jasmine';
// import { MakeupGalleryComponent } from './makeup-gallery.component';
// import { HttpClient } from '@angular/common/http';
// import { of, fromEventPattern } from 'rxjs';
// import { fakeAsync, tick, ComponentFixtureAutoDetect } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

// import { DebugElement, Directive, } from '@angular/core';
// import { elementAttribute } from '@angular/core/src/render3';
// import { DataService } from 'src/app/shared/services/data.service';
// import { IData } from '../../shared/models/data'
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { makeAnimationEvent } from '@angular/animations/browser/src/render/shared';
// import { KeysPipe } from "../../shared/pipes/keys.pipe";
// import { ActivatedRoute } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe(`MakeupGalleryComponent`, () => {
//   let component: MakeupGalleryComponent;
//   let dataService: DataService;
//   let fixture: ComponentFixture<MakeupGalleryComponent>;
//   let dummyData: IData;
//   let fakeImages: IData =
//   {
//     day: [{
//       url: "url"
//     }],
//     night: [{
//       url: "url"
//     }],
//     bridal: [{
//       url: "url"
//     }],
//     special: [{
//       url: "url"
//     }]
//   };

//   const fakeDataService = jasmine.createSpyObj('DataService', ['getData']);
//   const fakeActiveRoute = jasmine.createSpyObj('ActivatedRoute', [null]);
//   const textWithSpacesAndSymbolsRegex = new RegExp(/[\W\S]^[a-zA-Z\s]+$/);

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       declarations: [MakeupGalleryComponent, KeysPipe],
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule
//       ],
//       providers: [
//         { provide: KeysPipe, useValue: {} },
//         {
//           provide: ActivatedRoute, useValue: {
//             params: of({ id: 'category' })
//           }
//         },
// {provide: DataService, useValue: fakeDataService}      ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//       .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MakeupGalleryComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('component should be defined', () => {
//     expect(component).toBeDefined();
//   });

// //   it('should call showData() on ngOnInit()', async(() => {
// //     fixture.detectChanges();
// //     let showData = spyOn(component,'showData')
// //     fixture.whenStable().then(() => {
// //   expect(showData).toHaveBeenCalled();
// // })
// //   }))

//   // it('should adapt to category selection', async(() => {
//     // const spy = fakeDataService.getData.and.returnValue(of([fakeImages]));
//     // component.ngOnInit();
//     // fixture.detectChanges();
//     // fixture.whenStable().then(() => {
//     //   component.images.subscribe(async(images$) => {
//     //     fixture.detectChanges();
//     //     fixture.whenStable().then(() => {
//     //       expect(images$).toEqual([fakeImages]);
//     //     })
        
//         // expect(spy).toHaveBeenCalled();
//         // expect(spy).toHaveBeenCalledWith();
//         // expect(spy).toHaveBeenCalledTimes(1);
//       // })
//     })


//   // }))

  

// //   it('should ',async(() => {
// // component.filterBy = "machiaj-de-zi";
// // fixture.detectChanges();
// // fixture.whenStable().then(() => {
// // expect(component.title).toContain('zi')
// // })
// //   }))
//   //   it(`should adapt to 'machiaj-de-zi' category selection`, async(() => {
//   //     let category: string = "machiaj-de-zi";
//   //     fakeActiveRoute.params.and.returnValue(`{category: ${category}}`);
//   //     component = new MakeupGalleryComponent(fakeActiveRoute, fakeDataService);
//   //     fixture.detectChanges();
//   //     fixture.whenStable().then(()=> {
//   //       expect(component.filterBy).toEqual(category);
//   //     })
//   // })) 






// //   it(`should adapt to 'machiaj-de-zi' category selection`, () => {
// //     testGalleryComponentAdaptsToCategory("machiaj-de-zi", "zi");
// //   })

// //   it(`should adapt to 'machiaj-de-seara' category selection`, () => {
// //     testGalleryComponentAdaptsToCategory("machiaj-de-seara", "seara");
// //   })

// //   it(`should adapt to 'machiaj-de-mireasa' category selection`, () => {
// //     testGalleryComponentAdaptsToCategory("machiaj-de-mireasa", "mireasa");
// //   })

// //   it(`should adapt to 'machiaj-special' category selection`, () => {
// //     testGalleryComponentAdaptsToCategory("machiaj-special", "special");
// //   })

// //   it(`should return true from nextImage() if there are more images`, () => {
// //    component.ngxImageGallery.activeImageIndex = 0;
// //    expect(component.nextImage()).toBeTruthy();
// //   })

// //   it('should return false from nextImage() if there are no images', () => {
// //     component.ngxImageGallery.activeImageIndex = undefined;
// //     expect(component.nextImage()).toBeFalsy();
// // });

// // it('should return true from prevImage() if there are more images', () => {
// //   component.ngxImageGallery.activeImageIndex = 1;
// //   expect(component.prevImage()).toBeTruthy();
// // });

// // it('should return false from prevImage() if there are no images', () => {
// //   component.ngxImageGallery.activeImageIndex = undefined;
// //   expect(component.prevImage()).toBeFalsy();
// // });








//   //  const fakeDataService = {
//   //    getData: () => {},
//   //    HttpClient: {}
//   //  } as any;
//   // beforeEach(() => {
//   //   component = new MakeupGalleryComponent(fakeActiveRoute, fakeDataService);
//   // });

//   // const spy = fakeDataService.getData.and.returnValue(of([fakeImage]));
//   // component.ngOnInit();
//   // component.images.subscribe(images$ => {
//   //   console.log(images$);
//   //   expect(images$).toEqual([fakeImage]);
//   //   expect(spy).toHaveBeenCalled();
//   //   expect(spy).toHaveBeenCalledWith();
//   //   expect(spy).toHaveBeenCalledTimes(1);
//   // })


