import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { NO_ERRORS_SCHEMA, DebugElement, Directive, Input, HostListener } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { IData } from 'src/app/shared/models/data';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { categories } from '../../../shared/title-categories.enum';



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


describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let elementDe: DebugElement;
  let linksDe;
  let routerLinks;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ProjectComponent, RouterLinkDirectiveStub],
      providers: [
        { provide: AuthService, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    elementDe = fixture.debugElement;
    fixture.detectChanges();
    linksDe = fixture.debugElement
    .queryAll(By.directive(RouterLinkDirectiveStub));
    routerLinks = linksDe.map(de => de.injector.get(RouterLinkDirectiveStub));
  });

  it(`component should be defined`, () => {
    expect(component).toBeDefined();
  });


  it('should render  different adminName', () => {
    component.adminName = "Tananana";
    fixture.detectChanges();
    const adminName = elementDe.queryAll(By.css('.display-4'))[0];
    expect(adminName.nativeElement.textContent).toContain("Tananana!");
  });

  it('should render different menuMessage', () => {
    component.menuMessage = "Hello, World!";
    fixture.detectChanges();
    const menuMessage = elementDe.queryAll(By.css('.menuMessage'))[0];
    expect(menuMessage.nativeElement.textContent).toBe('Hello, World!');
  })

  it('should render  different insideMenuMessage', () => {
    component.insideMenuMessage = "Just do it!";
    fixture.detectChanges();
    const insideMenuMessage = fixture.debugElement.queryAll(By.css('.inside'))[0];
    expect(insideMenuMessage.nativeElement.textContent).toBe("Just do it!")
  })

  it('should render different imageCategories', () => {
    const categ: categories[] = [categories.day,categories.night,categories.bridal,categories.special]
    component.imageCategories = categ;
    fixture.detectChanges();
    const firstCateg = fixture.debugElement.queryAll(By.css('.one'))[0];
    const secondCateg = fixture.debugElement.queryAll(By.css('.two'))[0];
    const thirdCateg = fixture.debugElement.queryAll(By.css('.three'))[0];
    const fourthCateg = fixture.debugElement.queryAll(By.css('.four'))[0];
    expect(firstCateg.nativeElement.textContent).toBe("day");
    expect(secondCateg.nativeElement.textContent).toBe("night");
    expect(thirdCateg.nativeElement.textContent).toBe('special');
    expect(fourthCateg.nativeElement.textContent).toBe('bridal');
  })

  it('should get RouterLinks from template', () => {
    expect(routerLinks.length).toBe(5, 'should have 5 routerLinks');
    expect(routerLinks[0].linkParams).toBe('/admin/upload');
    expect(routerLinks[1].linkParams).toEqual(['/admin/galerie', 'machiaj-de-zi']);
    expect(routerLinks[2].linkParams).toEqual(['/admin/galerie', 'machiaj-de-seara']);
    expect(routerLinks[3].linkParams).toEqual(['/admin/galerie', 'machiaj-de-mireasa']);
    expect(routerLinks[4].linkParams).toEqual(['/admin/galerie', 'machiaj-special']);
  });


});
