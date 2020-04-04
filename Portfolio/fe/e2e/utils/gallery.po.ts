import { browser, by, element, By } from 'protractor';
const app: string = "alexandraciausu";
const uniqueId: string = "a6df7";
const gallerySuffix: string = "galerie"
const hostingSuffix: string = "firebaseapp.com";
const makeUpPreffix: string = "machiaj";
const makeupDSuffix: string = "zi";
const makeupNSuffix: string = "seara";
const makeupMSuffix: string = "mireasa";
const xSMakeUP: string = "special";


var Gallery = function() { 


  this.pageDescription = () => {
    return element(by.tagName('mat-card-subtitle'));
  };
  this.activeImage = () => {
    return element(by.css('.image.active'));
  };

  this.activeImageSrc = () => {
   return element(by.css('.image.active')).getAttribute('src');
  }

  this.nextThumbnailImages = () =>  {
    return element.all(by.css('div.image'));
  };

  this.leftButtonDisabled = () =>  {
    return element(by.css('div.control.arrow.left.disabled'));
  };

  this.rightButton = () =>  {
    return element(by.css('div.control.arrow.right.dark'));
  };

  this.leftButton = () =>  {
    return element(by.css('div.control.arrow.left.dark'));
  };

  this.pageTitle = () =>  {
    return element(by.css('.mat-card-title'));
  };

  this.matCard = () => {
      return element(by.tagName('mat-card'));
  }

  //Category: day
  this.navigateToDayGalleryPage = () =>  {
    browser.get(`https://${app}-${uniqueId}.${hostingSuffix}/${gallerySuffix}/${makeUpPreffix}-de-${makeupDSuffix}`);
  };

  this.navigateToDayGalleryPage = () => {
    return browser.get(`/${gallerySuffix}/${makeUpPreffix}-de-${makeupDSuffix}`);
  };



  //Category: night
  this.goNightGalleryPage = () =>  {
    browser.get(`https://${app}-${uniqueId}.${hostingSuffix}/${gallerySuffix}/${makeUpPreffix}-de-${makeupDSuffix}`);
  };

  this.navigateToNightGalleryImage = () =>  {
    return browser.get(`/${gallerySuffix}/${makeUpPreffix}-de-${makeupDSuffix}`);
  };

  // Category: special
  this.getSpecialGalleryPage = () =>  {
    browser.get(`https://${app}-${uniqueId}.${hostingSuffix}/${gallerySuffix}/${makeUpPreffix}-de-${xSMakeUP}`);
  };

  this.navigateToSpecialGalleryImage = () =>  {
    return browser.get(`/${gallerySuffix}/${makeUpPreffix}-de-${xSMakeUP}`);
  };

  //Category: bridal
  this.getBridalGalleryPage = () =>  {
    browser.get(`https://${app}-${uniqueId}.${hostingSuffix}/${gallerySuffix}/${makeUpPreffix}-de-${makeupMSuffix}`);
  };

  this.navigateToBridalGalleryImage = () =>  {
    return browser.get(`/${gallerySuffix}/${makeUpPreffix}-de-${xSMakeUP}`);
  };

    
}

module.exports = new Gallery();