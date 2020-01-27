import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUploadComponent } from './project-upload.component';
import { DataService } from 'src/app/shared/services/data.service';
import { IData } from 'src/app/shared/models/data';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { RouterTestingModule } from '@angular/router/testing';
import { FileSize } from 'src/app/shared/pipes/file-size.pipe';
import { AuthService } from 'src/app/shared/auth/auth.service';

describe('ProjectUploadComponent', () => {
  let component: ProjectUploadComponent;
  let fixture: ComponentFixture<ProjectUploadComponent>;
  let dataService: DataService;
  let serviceStub: Partial<IData> = 
  { day: [{ 
       url:"url"
   }],
   night: [{
     url: "url"
   }],
   bridal: [{
     url:  "url"
   }],
   special: [{
     url: "url"
   }]};
   let httpClientSpy: { get: jasmine.Spy };
   
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUploadComponent, FileSize ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: AngularFireStorage, useValue: {}},
        {provide: FileSize, useValue: {}},
        {provide: AuthService, useValue: {}}
        // DataService,
        // {provide: DataService, useValue: httpClientSpy}
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(`component should be defined`, () => {
    expect(component).toBeDefined();
  });

});
