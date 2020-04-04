import { browser, by, element } from 'protractor';
import { doesNotReject } from 'assert';
import { NgZone } from '@angular/core';
import { async } from '@angular/core/testing';

const home = require("./utils/home.po");
const footer = require("./utils/footer.po");
const header = require("./utils/header.po");
const gallery = require("./utils/gallery.po");
const services = require("./utils/services.po");
const contact = require("./utils/contact.po");
const adminLogIn = require("./utils/logIn.po");
const adminInterface = require('./utils/admin.po');
const privacyPolicyPage = require('./utils/privacy-policy.po');
const forgotPasswordPage = require('./utils/forgot-password.po');

const app: string = "alexandraciausu";
const uniqueId: string = "a6df7";
const hostingPreffix: string = "firebaseapp.com";
const hostingSuffix: string = "googleapis.com";
const hostingPathPreffix: string = "v0/b"
const hostingPathSuffix: string = "appspot.com";
const storagePreffix: string = "firebasestorage";

const homePreffix: string = "pagina";
const homeSuffix: string = "principala";
const policyPreffix: string = "politica";
const PolicySuffix: string = "confidentialitate";
const adminPreffix: string = "logare";
const adminSuffix: string = "admin";
const galleryPreffix: string = "galerie"
const makeUpPreffix: string = "machiaj";
const makeupDSuffix: string = "zi";
const makeupNSuffix: string = "seara";
const makeupBSuffix: string = "mireasa";
const makeupSSuffix: string = "special";
const servicesSuffix: string = "servicii";
const contactSuffix: string = "contact"
const adminMenuSuffix: string = "meniu"


const mainURL: string = `https://${storagePreffix}.${hostingSuffix}/${hostingPathPreffix}/${app}-${uniqueId}.${hostingPathSuffix}`;

const dayGalleryPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${galleryPreffix}/${makeUpPreffix}-de-${makeupDSuffix}`;
const nightGalleryPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${galleryPreffix}/${makeUpPreffix}-de-${makeupNSuffix}`;
const bridalGalleryPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${galleryPreffix}/${makeUpPreffix}-de-${makeupBSuffix}`;
const specialGalleryPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${galleryPreffix}/${makeUpPreffix}-${makeupSSuffix}`;
const homePath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${homePreffix}-${homeSuffix}`;
const servicesPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${servicesSuffix}`;
const contactPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${contactSuffix}`;
const privacyPolicyPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${policyPreffix}-de-${PolicySuffix}`;
const adminLoginPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${adminPreffix}-${adminSuffix}`;
const adminMenuPath: string = `https://${app}-${uniqueId}.${hostingPreffix}/${adminPreffix}/${adminMenuSuffix}`;

const lRegEx = new RegExp("[\w,.!?]");
const nRegEx = new RegExp(/^[0-9]+$/);
const allRegEx = new RegExp(/[\s\S]*/);


const testEmail: string = `mysupertest@mydomain.com`;
const testPass: string = "oP@rol@.n3buna";


describe('HomePage', () => {

  beforeEach(() => {
    home.navigateToHomePage();
  });

  it('should have homePage path clicking on logo', () => {
    expect(home.logoSrc()).toContain(mainURL);
    home.logoClick().then(() => {
      expect(browser.getCurrentUrl()).toContain(homePath);
    });
  });

  it('should have navBar working properly', () => {
    expect(header.navbar().isDisplayed()).toBe(true);
    expect(header.homePageMenuButton().isDisplayed()).toBe(true);
    expect(header.homePageMenuButton().getText()).toMatch(allRegEx);
    expect(header.portfolioDropDownMenuButton().isDisplayed()).toBe(true);
    expect(header.portfolioDropDownMenuButton().getText()).toMatch(allRegEx);
    expect(header.servicesMenuButton().isDisplayed()).toBe(true);
    expect(header.servicesMenuButton().getText()).toMatch(allRegEx);
    expect(header.contactMenuButton().isDisplayed()).toBe(true);
    expect(header.contactMenuButton().getText()).toMatch(allRegEx);

    header.portfolioDropDownMenuButton().click()
      .then(() => {
        browser.sleep(500);
        expect(header.portfolioDropDownMenuFirstCategoryButton().isDisplayed()).toBe(true);
        expect(header.portfolioDropDownMenuSecondCategoryButton().isDisplayed()).toBe(true);
        expect(header.portfolioDropDownMenuThirdCategoryButton().isDisplayed()).toBe(true);
        expect(header.portfolioDropDownMenuFourthCategoryButton().isDisplayed()).toBe(true);
        header.portfolioDropDownMenuFirstCategoryButton().click()
          .then(() => {
            expect(browser.getCurrentUrl()).toContain(dayGalleryPath);
          });
      });

    home.navigateToHomePage();
    header.portfolioDropDownMenuButton().click()
      .then(() => {
        browser.sleep(500);
        header.portfolioDropDownMenuSecondCategoryButton().click()
          .then(() => {
            expect(browser.getCurrentUrl()).toContain(nightGalleryPath);
          });
      });

    home.navigateToHomePage();
    header.portfolioDropDownMenuButton().click()
      .then(() => {
        browser.sleep(500);
        header.portfolioDropDownMenuThirdCategoryButton().click()
          .then(() => {
            expect(browser.getCurrentUrl()).toContain(bridalGalleryPath);
          });
      });

    //TODO: to find out why Machiaj-special dropdown button is not clickable
    // homePage.navigateToHomePage();
    // header.portfolioDropDownMenuButton().click()
    // .then(() => {
    // browser.sleep(500);
    // header.portfolioDropDownMenuFourthCategoryButton().click()
    // .then(() => {
    // expect(browser.getCurrentUrl()).toContain(specialGalleryPath);
    // });
    // });

    home.navigateToHomePage();
    header.servicesMenuButton().click()
      .then(() => {
        browser.sleep(500);
        expect(browser.getCurrentUrl()).toContain(servicesPath);
      });

    home.navigateToHomePage();
    header.contactMenuButton().click()
      .then(() => {
        browser.sleep(500);
        expect(browser.getCurrentUrl()).toContain(contactPath);
      });
  });


  it('should display the banner & quote & first description & signature', () => {
    expect(home.bannerSrc()).toContain(mainURL);
    expect(home.quote().getText()).toMatch(allRegEx);
    expect(home.artistDescription().getText()).toMatch(lRegEx);
    expect(home.artistSignatureSrc()).toContain(mainURL);
  });

  it('should display GoogleMap & invitation message & background image', () => {
    expect(home.GMap().isDisplayed()).toBe(true);
    expect(home.GMapTitle().getText()).toMatch(lRegEx);
    expect(home.GMapBackgroundImageSrc()).toContain(mainURL);
  });

  //TODO: TEST GMAP ATTR

  it('should go up clicking "Inapoi sus" button', () => {
    const element = home.artistPhoneNumber();
    expect(home.goToTopButton().isDisplayed()).toBe(false);
    browser.actions().mouseMove(element).perform();
    expect(home.goToTopButton().isDisplayed()).toBe(true);
    home.goToTopButton().click();
    expect(home.goToTopButton()).toHaveBeenCalled();
    //TODO: 

  });

  it('should display second banner & description & desc.title & motto & artist phone number & phoneIcon', () => {
    expect(home.secondBannerSrc()).toContain(mainURL);
    expect(home.secondDescriptionTitle().getText()).toMatch(lRegEx);
    expect(home.secondDescriptionPartOne().getText()).toMatch(lRegEx);
    expect(home.secondDescriptionPartTwo().getText()).toMatch(lRegEx);
    expect(home.secondDescriptionMotto().getText()).toMatch(lRegEx);
    expect(home.artistPhoneNumber().getText()).toMatch(nRegEx);
    expect(home.phoneIcon().isDisplayed()).toBe(true);
  });

  it('should have footer working properly', () => {
    expect(footer.footer().isDisplayed()).toBe(true);
    expect(footer.appointmentsMessageAndPhoneNumber().getText()).toMatch(allRegEx);
    expect(footer.allRightsReserved().getText()).toMatch(allRegEx);
    footer.privacyPolicyButton().click().then(() => {
      expect(browser.getCurrentUrl()).toContain(privacyPolicyPath);
    });
    home.navigateToHomePage();
    expect(footer.developerRights().getText()).toContain("Maria Marinescu");
    footer.adminLogInButton().click().then(() => {
      expect(browser.getCurrentUrl()).toContain(adminLoginPath);
    });
  });
});

xdescribe('GalleryPage by category', () => {

  describe('DayGalleryPage', () => {

    beforeEach(() => {
      home.navigateToHomePage();
      header.portfolioDropDownMenuButton().click().then(() => {
        header.portfolioDropDownMenuFirstCategoryButton().click().then(() => {
          expect(browser.getCurrentUrl()).toContain(dayGalleryPath);
        });
      });
    });


    it('should display title & page description', () => {
      displayGalleryTitleAndPageDescription();
    });


    it('should display next image clicking Next Button & gallery thumbnail images', () => {
      displayGalleryNextImageAndGalleryThumbnailImagesClickingOnNextArrowButton()
    });

    it('should display mat-card & arrow buttons', () => {
      displayGalleryMatCardAndArrowButtons();
    });
  });


  describe('NightGalleryPage', () => {


    beforeEach(() => {
      home.navigateToHomePage();
      header.portfolioDropDownMenuButton().click().then(() => {
        header.portfolioDropDownMenuSecondCategoryButton().click().then(() => {
          expect(browser.getCurrentUrl()).toContain(nightGalleryPath);
        });
      });
    });

    it('should display title & page description', () => {
      displayGalleryTitleAndPageDescription();
    });

    it('should display mat-card and arrow buttons', () => {
      displayGalleryMatCardAndArrowButtons();
    });


    it('should display next image clicking Next Button & gallery thumbnail images', () => {
      displayGalleryNextImageAndGalleryThumbnailImagesClickingOnNextArrowButton()
    });
  });

  describe('BridalGalleryPage', () => {

    beforeEach(() => {
      home.navigateToHomePage();
      header.portfolioDropDownMenuButton().click()
      .then(() => {
        header.portfolioDropDownMenuThirdCategoryButton().click()
        .then(() => {
          expect(browser.getCurrentUrl()).toContain(bridalGalleryPath);
        });
      });
    });

    it('should display title, page description', () => {
      displayGalleryTitleAndPageDescription();
    });

    it('should display mat-card and arrow buttons', () => {
      displayGalleryMatCardAndArrowButtons();
    });

    it('should display next image clicking Next Button & gallery thumbnail images', () => {
      displayGalleryNextImageAndGalleryThumbnailImagesClickingOnNextArrowButton()
    });
  });

  describe('SpecialGalleryPage', () => {

    beforeEach(() => {
      home.navigateToHomePage();
      header.portfolioDropDownMenuButton().click();
      element(by.css('.fourthItem')).click();
      expect(browser.getCurrentUrl()).toContain(`/${galleryPreffix}/${makeUpPreffix}-${makeupSSuffix}`);

    });

    it('should display title, page description', () => {
      displayGalleryTitleAndPageDescription();
    });

    it('should display mat-card and arrow buttons', () => {
      displayGalleryMatCardAndArrowButtons();
    });

    it('should display next image clicking Next Button & gallery thumbnail images', () => {
      displayGalleryNextImageAndGalleryThumbnailImagesClickingOnNextArrowButton();
    });
  });

  function  displayGalleryTitleAndPageDescription() {
    expect(gallery.pageTitle().getText()).toMatch(allRegEx);
    expect(gallery.pageDescription().getText()).toMatch(allRegEx);
  };
    
  function displayGalleryMatCardAndArrowButtons() {
    expect(gallery.matCard().isPresent()).toBe(true);
    browser.sleep(1000);
    expect(gallery.leftButton().isPresent()).toBe(true);
    expect(gallery.rightButton().isPresent()).toBe(true);
  };
  
  function displayGalleryNextImageAndGalleryThumbnailImagesClickingOnNextArrowButton() {
    browser.sleep(1000);
    expect(gallery.activeImage().isDisplayed()).toBe(true);
    expect(gallery.nextThumbnailImages().isPresent()).toBe(true);
    expect(gallery.leftButtonDisabled().isPresent()).toBe(true);
    gallery.rightButton().click()
    .then(() => {
      browser.sleep(1000);
      expect(gallery.pageTitle().getText()).toMatch(allRegEx);
      expect(gallery.pageDescription().getText()).toMatch(allRegEx);
      expect(gallery.matCard().isPresent()).toBe(true);
      expect(gallery.activeImage().isDisplayed()).toBe(true);
      expect(gallery.nextThumbnailImages().isPresent()).toBe(true);
    });
  
    gallery.leftButton().click()
    .then(() => {
      browser.sleep(1000);
      expect(gallery.pageTitle().getText()).toMatch(allRegEx);
      expect(gallery.pageDescription().getText()).toMatch(allRegEx);
      expect(gallery.matCard().isPresent()).toBe(true);
      expect(gallery.activeImage().isDisplayed()).toBe(true);
      expect(gallery.nextThumbnailImages().isPresent()).toBe(true);
      expect(gallery.rightButton().isDisplayed()).toBe(true);
    });
  }
});


xdescribe('ServicesPage', () => {


  beforeEach(() => {
    home.navigateToHomePage();
    header.servicesMenuButton().click();
    expect(browser.getCurrentUrl()).toContain(servicesPath);
  });

  it('should display all four cards containing front elements & the message', () => {
    expect(services.cardFirstCategory().isDisplayed()).toBe(true);
    expect(services.cardSecondCategory().isDisplayed()).toBe(true);
    expect(services.cardThirdCategory().isDisplayed()).toBe(true);
    expect(services.cardFourthCategory().isDisplayed()).toBe(true);

    expect(services.cardFrontFirstCategory().isDisplayed()).toBe(true);
    expect(services.cardFrontSecondCategory().isDisplayed()).toBe(true);
    expect(services.cardFrontThirdCategory().isDisplayed()).toBe(true);
    expect(services.cardFrontFourthCategory().isDisplayed()).toBe(true);

    expect(services.cardBackFirstCategory().isPresent()).toBe(true);
    expect(services.cardBackSecondCategory().isPresent()).toBe(true);
    expect(services.cardBackThirdCategory().isPresent()).toBe(true);
    expect(services.cardBackFourthCategory().isPresent()).toBe(true);

    expect(services.cardFrontFirstCategoryTitle().getText()).toMatch(allRegEx);
    expect(services.cardFrontSecondCategoryTitle().getText()).toMatch(allRegEx);
    expect(services.cardFrontThirdCategoryTitle().getText()).toMatch(allRegEx);
    expect(services.cardFrontFourthCategoryTitle().getText()).toMatch(allRegEx);

    browser.sleep(1000);

    expect(services.cardFrontFirstCategoryImg().isDisplayed()).toBe(true);
    expect(services.cardFrontSecondCategoryImg().isDisplayed()).toBe(true);
    expect(services.cardFrontThirdCategoryImg().isDisplayed()).toBe(true);
    expect(services.cardFrontFourthCategoryImg().isDisplayed()).toBe(true);

    expect(services.cardFrontFirstCategoryImgSrc()).toContain(mainURL);
    expect(services.cardFrontSecondCategoryImgSrc()).toContain(mainURL);
    expect(services.cardFrontThirdCategoryImgSrc()).toContain(mainURL);
    expect(services.cardFrontFourthCategoryImgSrc()).toContain(mainURL);

    expect(services.messageAtTheEndOfThePage().getText()).toMatch(allRegEx);
  });

  it('each card should flip containing the right elements on back', () => {
    const firstCard = services.cardFrontFirstCategory();
    const secondCard = services.cardSecondCategory();
    const thirdCard = services.cardThirdCategory();
    const fourthCard = services.cardFourthCategory();
    flipServicesCard(firstCard);
    flipServicesCard(secondCard);
    flipServicesCard(thirdCard);
    flipServicesCard(fourthCard);
});
function flipServicesCard(card) {
  browser.actions().mouseMove(card).perform();
  browser.sleep(1000);
  expect(services.cardBackFirstCategory().isDisplayed()).toBe(true);
  expect(services.cardBackFirstCategoryTitle().getText()).toMatch(allRegEx)
  expect(services.cardBackFirstCategoryFirstChoiceText().getText()).toMatch(allRegEx);
  expect(services.cardBackFirstCategorySecondChoiceText().getText()).toMatch(allRegEx);
  expect(services.cardBackFirstCategoryThirdChoiceText().getText()).toMatch(allRegEx);
}
});

describe('ContactPage', () => {

  const name: string = "OrdinaryName";
  const phNumber: string = "123456";
  const message: string = "Hello, World!";

  beforeEach(() => {
    home.navigateToHomePage();
    header.contactMenuButton().click().then(() => {
      expect(browser.getCurrentUrl()).toContain(contactPath);
    })

  });


  it('should display contactForm and all its elements', () => {
    expect(contact.form().isDisplayed()).toBe(true);
    expect(contact.formMessage().getText()).toMatch(allRegEx);
    expect(contact.formNameInput().isDisplayed()).toBe(true);
    expect(contact.formPhoneNumberInput().isDisplayed()).toBe(true);
    expect(contact.formMessageInput().isDisplayed()).toBe(true);
    expect(contact.formSubmitButton().isDisplayed()).toBe(true);
  });

  it('should change input values', () => {
    contact.formNameInput().sendKeys(name);
    contact.formPhoneNumberInput().sendKeys(phNumber);
    contact.formMessageInput().sendKeys(message);
    expect(contact.formNameInputValue()).toBe(name);
    expect(contact.formPhoneNumberInputValue()).toBe(phNumber);
    expect(contact.formMessageInputValue()).toBe(message);
  });

  //TODO to check with disabled prop ( in  order not to send the actual email )
  xit('should send email', () => {
    contact.formNameInput().sendKeys(name).then(() =>{
      expect(contact.formNameInput().getAttribute('value')).toBe(name);
    });
    contact.formPhoneNumberInput().sendKeys(phNumber).then(() => {
      expect(contact.formPhoneNumberInput().getAttribute('value')).toBe(phNumber);
    });
    contact.formPhoneNumberInput().sendKeys(message).then(() => {
      expect(contact.formPhoneNumberInput().getAttribute('value')).toBe(message);
    });
    expect(contact.formSubmitButtonClickAttr()).toBe(false);
  });

});

describe('PrivacyPolicyPage', () => {
  beforeEach(() => {
    home.navigateToHomePage();
    footer.privacyPolicyButton().click().then(() => {
      expect(browser.getCurrentUrl()).toContain('politica-de-confidentialitate');
    });
  });

  it('should display all elements', () => {
    expect(privacyPolicyPage.title().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_One().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Two().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Three().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Four().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Five().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Six().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Seven().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Eight().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Nine().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Ten().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Eleven().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Twelve().getText()).toMatch(allRegEx);
    expect(privacyPolicyPage.countReadings_Thirteen().getText()).toMatch(allRegEx);
  });
});

describe('ForgotPasswordPage', () => {
  beforeEach(() => {
    browser.get('http://localhost:4200/pagina-principala');
    footer.adminLogInButton().click().then(() => {
      adminLogIn.forgotPasswordButton().click();
      browser.sleep(500);
    });
  });

  it('should contain all elements', () => {
    expect(forgotPasswordPage.title().getText()).toMatch(allRegEx);
    expect(forgotPasswordPage.message().getText()).toMatch(allRegEx);
    expect(forgotPasswordPage.redirectMessage().getText()).toMatch(allRegEx);
    expect(forgotPasswordPage.resetPassButton().getText()).toMatch(allRegEx);
  });

  it('email input should change value', () => {
    forgotPasswordPage.emailInput().sendKeys(testEmail);
    expect(forgotPasswordPage.emailInput().getAttribute('value')).toBe(testEmail);
  });
  //TODO : test if forgotPassword method it's working
})


describe('AdminLogInPage', () => {
  browser.ignoreSynchronization = true;

  beforeEach(() => {
    home.navigateToHomePage();
    footer.adminLogInButton().click();
    // browser.get('http://localhost:4200/logare-admin');
  });

  xit('should display all elements from the left container', () => {
    expect(adminLogIn.leftElement().isDisplayed()).toBe(true);
    expect(adminLogIn.title().getText()).toMatch(allRegEx);
    expect(adminLogIn.message().getText()).toMatch(allRegEx);
  });

  //TODO: test SVG
  xit('should display all element from the right container', () => {
    expect(adminLogIn.rightElement().isDisplayed()).toBe(true);
    expect(adminLogIn.form().isDisplayed()).toBe(true);
    expect(adminLogIn.emailLabel().isDisplayed()).toBe(true);
    expect(adminLogIn.emailInput().isDisplayed()).toBe(true);
    expect(adminLogIn.passwordLabel().isDisplayed()).toBe(true);
    expect(adminLogIn.passwordInput().isDisplayed()).toBe(true);
    expect(adminLogIn.submitButton().isDisplayed()).toBe(true);
    expect(adminLogIn.forgotPasswordButton().isDisplayed()).toBe(true);
    // expect(adminLogIn.SVGStrokeDashoffsetCSSProperty().isDisplayed()).toBe(true);
  });

  it('should log in', () => {
    browser.waitForAngularEnabled(false);
    // browser.get('http://localhost:4200/logare-admin');
    adminLogIn.emailInput().sendKeys(testEmail);
    adminLogIn.passwordInput().sendKeys(testPass);
    adminLogIn.submitButton().click().then(() => {
      browser.sleep(500);
    });
    browser.ignoreSynchronization = true;
    browser.sleep(500);
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(true);
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toContain(adminMenuPath);
    // const myElement = element(by.id('logout'));
    // browser.actions().mouseMove(myElement).perform();
  });

  //TODO: it('should fail with unauthorized credentials)

});



describe('AdminMenuPage', () => {

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    // browser.get('http://localhost:4200/logare-admin');
    adminLogIn.emailInput().sendKeys(testEmail);
    adminLogIn.passwordInput().sendKeys(testPass);
    adminLogIn.submitButton().click().then(() => {
      browser.sleep(500);
    });
    browser.ignoreSynchronization = true;
    browser.sleep(500);
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(true);
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toContain(adminMenuPath)
  });

  xit('should display all elements', () => {
    expect(adminInterface.menuSplittingLine().isDisplayed()).toBe(true);
    expect(adminInterface.menuJumbotron().isDisplayed()).toBe(true);
    expect(adminInterface.menuWelcomeMessage().isDisplayed()).toBe(true);
    expect(adminInterface.menuMessage().isDisplayed()).toBe(true);
    browser.sleep(1000);
    expect(adminInterface.hamburgerMenuIcon().isDisplayed()).toBe(true);
    expect(adminInterface.hamburgerMenuButton().isDisplayed()).toBe(true);
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(1000);
      expect(adminInterface.menuMessage().isDisplayed()).toBe(true);
      expect(adminInterface.menuDropdownInsideMessage().isDisplayed()).toBe(true);
      expect(adminInterface.menuDropdownFirstCategoryGalleryLink().isDisplayed()).toBe(true);
      expect(adminInterface.menuDropdownSecondCategoryGalleryLink().isDisplayed()).toBe(true);
      expect(adminInterface.menuDropdownThirdCategoryGalleryLink().isDisplayed()).toBe(true);
      expect(adminInterface.menuDropdownFourthCategoryGalleryLink().isDisplayed()).toBe(true);
    });
    expect(adminInterface.menuLogOutButton().isDisplayed()).toBe(true);
  });

  it('should log out', () => {
    expect(adminInterface.menuLogOutButton().isDisplayed()).toBe(true);
    adminInterface.menuLogOutButton().click().then(() => {
      browser.sleep(2000);
      expect(browser.getCurrentUrl()).toContain(homePath);
    });
  })

  it('should click on upload and get back', () => {
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(1000);
      adminInterface.menuDropdownUploadLink().click().then(() => {
        browser.sleep(1000);
        expect(browser.getCurrentUrl()).toContain('upload');
        browser.sleep(1000);
        adminInterface.uploadBackToMenuButton().click();
        expect(browser.getCurrentUrl()).toContain('meniu');
      });
    });
  });

  it('should interact gallery and get back', () => {
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(500);
      adminInterface.menuDropdownFirstCategoryGalleryLink().click().then(() => {
        sleepAndCheckCurrentUrlAndClickOnGoBackButton('machiaj-de-zi');
      });
    });
    browser.sleep(500);
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(500);
      adminInterface.menuDropdownSecondCategoryGalleryLink().click().then(() => {
        sleepAndCheckCurrentUrlAndClickOnGoBackButton('machiaj-de-seara');
      });
    });
    browser.sleep(500);
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(500);
      adminInterface.menuDropdownThirdCategoryGalleryLink().click().then(() => {
        sleepAndCheckCurrentUrlAndClickOnGoBackButton('machiaj-de-mireasa');
      });
    });
    browser.sleep(500);
    adminInterface.hamburgerMenuButton().click().then(() => {
      browser.sleep(500);
      adminInterface.menuDropdownFourthCategoryGalleryLink().click().then(() => {
        sleepAndCheckCurrentUrlAndClickOnGoBackButton('machiaj-special');
      })
    })
  });
  function sleepAndCheckCurrentUrlAndClickOnGoBackButton(category) {
    browser.sleep(500);
    expect(browser.getCurrentUrl()).toContain(`admin/galerie/${category}`);
    adminInterface.galleryBackToMenuButton().click();
  }
});

