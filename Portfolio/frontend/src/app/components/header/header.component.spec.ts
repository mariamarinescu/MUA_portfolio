import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { NO_ERRORS_SCHEMA, Directive, Input, HostListener, DebugElement } from '@angular/core';
import { AuthGuard } from 'src/app/shared/auth/auth.guard';
import { AngularFireAuth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const AngularFireMocks = {
    auth: of({ uid: 'ABC123' })
};
let linksDe;
let routerLinks;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ HeaderComponent, RouterLinkDirectiveStub ],
      providers: [AngularFireAuth,
        {provide: AngularFireAuth, useValue: AngularFireMocks},
        AuthService,
        {provide: AuthService, useValue:{}}
    ],
        schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    linksDe = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linksDe.map(de => de.injector.get(RouterLinkDirectiveStub));
  });


  it('component should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(7, 'should have 7 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/home');
    expect(routerLinks[1].linkParams).toEqual(['/makeup-gallery', 'machiaj-de-zi']);
    expect(routerLinks[2].linkParams).toEqual(['/makeup-gallery', 'machiaj-de-seara']);
    expect(routerLinks[3].linkParams).toEqual(['/makeup-gallery', 'machiaj-de-mireasa']);
    expect(routerLinks[4].linkParams).toEqual(['/makeup-gallery', 'machiaj-special']);
    expect(routerLinks[5].linkParams).toBe('/prices');
    expect(routerLinks[6].linkParams).toBe('/contact');

    
  });
});
