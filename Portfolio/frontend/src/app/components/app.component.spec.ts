import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../shared/auth/auth.service';
import { DataService } from '../shared/services/data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    const AngularFireMocks = {
        auth: of({ uid: 'ABC123' })
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
      providers: [
          AngularFireAuth,
        {provide: AngularFireAuth, useValue: AngularFireMocks},
        AuthService,
        {provide: AuthService, useValue:{}},
        DataService,
        {provide: DataService, useValue: {}},
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
