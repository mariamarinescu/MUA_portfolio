import { async, ComponentFixture, TestBed, fakeAsync, tick, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { CoreMapContentComponent } from './gmap-component/core-map-content.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
const numbersAndDotsRegex = new RegExp(/^\d+(\.\d+)+$/);
const onlyNumbersRegex = new RegExp(/^[0-9]+$/);
const textWithSpacesAndSymbolsRegex = new RegExp("[\w,.!?]")
const lettersandspaces = new RegExp(/^[a-zA-Z\s]*$/);



  // beforeEach(async(() => {
 
  // }));

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, CoreMapContentComponent ],
      imports: [ AgmCoreModule.forRoot()],
      providers: [GoogleMapsAPIWrapper,
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('component should be defined', () => {
    expect(component).toBeDefined();
  });
//testing if src path of all img are correct
  // it('should render the banner', () => {
  //   renderSomeImage("img.firstImg");
  // });
  
  // it(`should render the signature from the banner`,() => {
  //   renderSomeImage("div.about-me>img.secondImg");
  // });

  // it(`should render the background G-map image`, () => {
  //   renderSomeImage("img.map-img");
  // });


  //testing component variables, check if only numbers exists and dot, when needed
  it(`should have agm-map latitude`, () => {
    expect(component.lat).toMatch(numbersAndDotsRegex);
  });

  it(`should have agm-map longitude`, () => {
    expect(component.lng).toMatch(numbersAndDotsRegex);
  });

  it(`should have agm-map zoom`,() => {
    expect(component.zoom).toMatch(onlyNumbersRegex);
  })


// //check descriptions of the page and phone number
it(`should have the first description`, () => {
  let elementDe: DebugElement = fixture.debugElement;
  let paragraphDe = elementDe.query(By.css('p#home-desc'));
  let p: HTMLElement = paragraphDe.nativeElement;
  expect(p.textContent).toMatch(textWithSpacesAndSymbolsRegex);
})

it(`should have the second description`,() => {
  let elementDe: DebugElement = fixture.debugElement;
  let ParagraphDe = elementDe.query(By.css('p.desc1p'));
  let p: HTMLElement = ParagraphDe.nativeElement;
  expect(p.textContent).toMatch(textWithSpacesAndSymbolsRegex);
})

it(`should have artist name`, () => {
  let elementDe: DebugElement = fixture.debugElement;
  let h2De = elementDe.query(By.css('h2#artistName'));
  let h2: HTMLElement = h2De.nativeElement;
  expect(h2.textContent).toMatch(textWithSpacesAndSymbolsRegex);
})



it(`should have artist phone number at the end of the page`, () => {
  let elementDe: DebugElement = fixture.debugElement
  let spanDe = elementDe.query(By.css('span.ph-number'));
  let span: HTMLElement = spanDe.nativeElement;
  expect(span.textContent).toMatch(onlyNumbersRegex);
})


// //testing agm-marker click event
// it(`should call markerClicked()`,fakeAsync(()=> {
//   let markerClick = fixture.debugElement.query(By.css('agm-marker'));
//   let marker = markerClick.nativeElement;
//   spyOn(component,'markerClicked');
//   marker.click();
//   tick()
//   expect(component.markerClicked).toHaveBeenCalled();
//   expect(component.markerClicked).toHaveBeenCalledTimes(1);
// }));

// it(`should have html attributes in agm-map`,() => {

//   let element = fixture.debugElement.query(By.css('agm-map'));
  // const result = element.nativeElement.querySelector('agm-map');
  // expect(elementAttribute.getAtributeNode("[latitude]")).toContain(component.lat);
  // let el = fixture.debugElement.query(By.css('agm-map'));
  // let agmMapEl = el.nativeElement;
  // let mhm = agmMapEl.innerHTML
  // let result = mhm.hasAttributes();
  
  // expect(element.nativeElement.getAttribute('[latitude]')).toEqual(component.lat);
// })

// it(`should have html attributes in agm-marker`,() => {
//   let agmMap = fixture.debugElement.query(By.css('agm-marker'));
//   let result = agmMap.nativeElement.hasAttributes();
//   expect(result).toBeTruthy();
// });

// it(`should contain exact data in agm-map latitude & longitude html attributes`,() => {
//   let agmMap = fixture.debugElement.query(By.css('agm-map'));
//   let exactLongitude = component.lng;
//   let exactLatitude = component.lat;
//   let exactZoom = component.zoom;
//   let longitude = agmMap.nativeElement.getAttribute('longitude');
//   let latitude = agmMap.nativeElement.getAttribute('latitude');
//   let zoom = agmMap.nativeElement.getAttribute('zoom');
//   expect(longitude).toEqual(exactLongitude);
//   expect(latitude).toEqual(exactLatitude);
//   expect(zoom).toEqual(exactZoom);
// })

// it(`should contain exact data in agm-marker latitude & longitude html attributes`,() => {
//   let agmMarker = fixture.debugElement.query(By.css('agm-marker'));
//   let exactLongitude = component.lng;
//   let exactLatitude = component.lat;
//   let longitude = agmMarker.nativeElement.getAttribute('latitude');
//   let latitude = agmMarker.nativeElement.getAttribute('longitude');
//   expect(longitude).toEqual(exactLongitude);
//   expect(latitude).toEqual(exactLatitude);
// })

// it(`button should go up the page`,fakeAsync(()=>{
//   let button = fixture.debugElement.query(By.css('button'));
//   expect(button.styles.display).toEqual('none');
//   let scrollEvent = document.createEvent('CustomEvent');
//   scrollEvent.initCustomEvent('scroll',false,false,null);
//   tick();
//   let fakeWindow = fixture.nativeElement.createFakeWindow(1008, 1024);
//    let  device = fakeWindow.init(fakeWindow, mocks.news);
//    device.scrollTo(0,device.height);
//    device.dispathEvent(scrollEvent);
//    tick();
//    expect(button.styles.display).toEqual('block');
 
// }))

//   function renderSomeImage(imagePath:string) {
//     const imgPath = fixture.debugElement.query(By.css(imagePath).arguments.src);
//    expect(imgPath).toContain("https://firebasestorage.googleapis.com/v0/b/alexandraciausu-a6df7.appspot.com/o/assets");
   
   
//   }

//   var mocks = {
//     resizeCalled: false,

//     createFakeWindow: function(width, height) {
//         var module = this;

//         return {
//             document: {
//                 documentElement: {
//                     clientWidth: width,
//                     clientHeight: height
//                 }
//             },

//             history: {
//                 back: function(){}
//             },

//             location: {
//                 replace: function(){}
//             },

//             resizeTo: function(width, height) {
//                 this.document.documentElement = {
//                     clientWidth: width,
//                     clientHeight: height
//                 };
//             }
//         };
//     },

//     fireResizeEvent: function() {
//         this.handler();
//     },

//     news: {
//         $: function(element) {
//             return {
//                 on: function(event, handler) {
//                     if (event === 'resize') {
//                         mocks.resizeCalled = true;
//                     }
                    
//                     // mocks.handler = handler;
//                 }
//             };
//         }
//     }
// };



  // it('should render the about-me', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.about-me>img.secondImg.src').toContain('../../assets/img/pixabay/mystical-portrait-of-a-girl-1344632.png'));
  // }));

  // it('should render the map-img', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('img.map-img.src').toContain('../../../assets/img/bucharest.png'));
  // }));

  // //testing if all tags contain the correct text

  // it('should render a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p.home-proverb').textContent).toContain('Dragostea de frumusețe este Gust. Crearea de frumusețe este Artă – Ralph Waldo Emerson');
  // }));

  // it('should render a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p.home-desc').textContent).toContain('In zilele obisnuite in care porti machiaj de zi discret, natural, in serile speciale cand alegi un machiaj de seara sau un machiaj pentru eveniment speciale- machiaj fashion care sa iti puna in valoare trasaturile sau in cea mai importanta seara a vietii tale, nunta, cand, desigur, porti un machiaj de mireasa care te transforma intr-o veritabila printesa, demna de admiratia celor din jur, valorificarea trasaturilor tale la cote maxime depinde de alegerea celui mai bun make-up artist, abil in a transforma frumusetea ta in elementul central al alegerilor cromatice si stilurilor pe care le realizeaza.');
  // }));

  // it('should render a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p.home-proverb').textContent).toContain('Dragostea de frumusețe este Gust. Crearea de frumusețe este Artă – Ralph Waldo Emerson');
  // }));

  // it('should render a h2 tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.about-me-desc>h2').textContent).toContain('Numele meu este Alexandra.');
  // }));

  // it('should render desc1p in a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.about-me-desc>p.desc1p').textContent).toContain('Sunt makeup artist profesionist, cu locația în Bucuresti si sunt specializată pe domeniul makeup utilizând diferite tehnici, incluzând tehnica creionului şi tehnica acuarelei, şi am absolvit o şcoală internațională.');
  // }));

  // it('should render desc2p in a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.about-me-desc>p.desc2p').textContent).toContain(' Folosesc produse profesionale care garantează rezistenţă îndelungată şi tehnici pe care le-am acumulat prin experiență şi cursuri de specializare. Pentru mine, machiajul nu înseamnă neaparat sa fie evident vizibil, ci înseamnă efectul pe care îl oferă purtătoarei fără să strige "uitați-vă la machiajul meu". In schimb, efectul pe care caut să îl ating este unul în care arăți atât de bine, atât de încrezătoare în tine încât atunci când intri într-o încăpere toată lumea care se uită la tine încearcă să îşi dea seama ce e diferit la tine. Acesta este rezultatul pe care vreau să îl ating pentru clientele mele: prin aplicare de machiaj profesională, înțelegerea stilurilor diferite şi tehnica de aplicare de lunga durată.');
  // }));

  // it('should render firstb in a b tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('div.about-me-desc>b.firstb').textContent).toContain('Ma ghidez după propriul motto: "Acolo unde există pasiune, va exista mereu perfecţiune"');
  // }));

  // it('should render a p tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('p.invite').textContent).toContain('Te astept la o sesiune de machiaj, ma gasesti aici :)');
  // }));

  // it('should render a span tag', async(() => {
  //   const fixture = TestBed.createComponent(HomeComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('span.ph-number').textContent).toContain('0729681302');
  // }));

  
})
