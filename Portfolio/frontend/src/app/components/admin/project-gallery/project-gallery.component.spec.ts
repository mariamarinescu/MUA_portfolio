import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect, inject, fakeAsync, tick } from '@angular/core/testing';
import { DataService } from '../../../shared/services/data.service';
import { IData } from '../../../shared/models/data';
import { ActivatedRoute, Data, Params, RouterModule, Router } from '@angular/router';
import { ProjectGalleryComponent } from './project-gallery.component';
import { fn } from '@angular/compiler/src/output/output_ast';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { NO_ERRORS_SCHEMA, DebugElement, Component } from '@angular/core';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Location, APP_BASE_HREF } from '@angular/common';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Image } from 'src/app/shared/models/models';

@Component({ template: '' })
class DummyComponent { }

describe('ProjectGalleryComponent', () => {
  let component: ProjectGalleryComponent;
  let dummyComponent: DummyComponent;
  let dummyFixture: ComponentFixture<DummyComponent>;
  let fixture: ComponentFixture<ProjectGalleryComponent>;
  let location: Location;
  let router: Router;
  let elementDe: DebugElement;
  let dataService: DataService;
  
let imageStub: Partial<IData>;
let entireDataDe;
let deleteImages= jasmine.createSpy('deleteImgSpy')
const mockDataService = {
  getData: () =>{}
};

const mockRouter = {
  nagivate: () => {}
};




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectGalleryComponent, DummyComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        AuthService,
        {provide: AuthService, useValue: {}},
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: 'machiaj-de-zi' })
          }
        },
        { provide: AngularFireStorage, useValue: {} },
       
          {provide: APP_BASE_HREF, useValue: '/'},
          {provide: DataService, useValue: mockDataService},
          {provide: Router, useValue: mockRouter}
      
        // {provide: DataService, useValue: httpClientSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGalleryComponent);
    dummyFixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    dummyComponent = dummyFixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    elementDe = fixture.debugElement;
    fixture.detectChanges();
    // entireDataDe = component.entireData;
  });


it('should call deleteImg when Delete button is clicked', () => {
  component.deleteImg = deleteImages;
  fixture.detectChanges();
const deleteButton =fixture.debugElement.query(By.css('button.delete'));
deleteButton.nativeElement.click();
fixture.detectChanges();
expect(deleteImages).toHaveBeenCalled();

// expect(component.entireData).toEqual(dummyImages);
})
  it(`component should be defined`, () => {
    expect(component).toBeDefined();
  });


  it('should call takeMeBack() when backToMenu button is clicked', async(() => {
    spyOn(component, 'takeMeBack');
    let elementDe: DebugElement = fixture.debugElement
    let buttonDe = elementDe.query(By.css('.backToMenu'));
    let button: HTMLElement = buttonDe.nativeElement;
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.takeMeBack).toHaveBeenCalled();
    });
  }));

  it('should call signOut() when Log-Out button is clicked', async(() => {
   let signOut = spyOn(component, 'signOut');
    let buttonDe = elementDe.query(By.css('.logout'));
    let button: HTMLElement = buttonDe.nativeElement;
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(signOut).toHaveBeenCalled();
    })
  }));


    // it('should call deleteImg() when Delete button is clicked', async(() => {
    //  let deleteImg = spyOn(component, "deleteImg");
    //   let buttonDe = elementDe.query(By.css('.delete'));
    //   let button: HTMLElement = buttonDe.nativeElement;
    //   button.click();
    //   fixture.detectChanges();
    //   fixture.whenStable().then(() => {
    //     expect(deleteImg).toHaveBeenCalled();
    //   })
    // }));
   
    // it('should call showData() on ngOnInit()', async(() => {
    //   component.ngOnInit();
    //   spyOn(component, "ngOnInit");
    //   spyOn(component, "showData");
    //   component.ngOnInit();
    //   fixture.detectChanges();
    //   fixture.whenStable().then(() => {
    //     expect(component.showData).toHaveBeenCalled();
    //   })
    // }))
  




})
