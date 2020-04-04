import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [AuthService,
        {provide: AuthService, useValue: {}},
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });



 
  it('component should be defined', () => {
    expect(component).toBeDefined();
  });
  

})
//   it('should render title in a h4 tag', async(() => {
//     const fixture = TestBed.createComponent(LoginComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('div.page>div.container>div.left>div.login').textContent).toContain('Admin Login');
//   }))

//   it('should render div tag', async(() => {
//     const fixture = TestBed.createComponent(LoginComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('div.page>div.container>div.left>div.eula').textContent).toContain('Daca nu esti tu admin, ar trebui sa te intorci pe pagina principala. :)');
//   }))


// });

