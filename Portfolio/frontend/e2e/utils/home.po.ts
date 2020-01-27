
import { browser, by, element } from 'protractor';
import { expand } from 'rxjs/operators';
import { elementStyleProp, elementEnd } from '@angular/core/src/render3';
const publicUrl = "https://alexandraciausu-a6df7.firebaseapp.com";
// const publicUrl = "http://localhost:4200"

var HomePage = function() {

  this.goToHomePage = function() {
 browser.get(`${publicUrl}`);
  };

  this.navigateToHomePage = () => {
    browser.get(`${publicUrl}`);
  };

 this.logo = () => {
    element(by.css('.logo'));
  };

  this.logoClick = () => {
    element(by.css('.logo')).click();
  };

  this.logoSrc = ()  =>{
   return element(by.css('.logo')).getAttribute('src');
  };


  this.bannerSrc = () => {
    return element(by.css('.firstImg')).getAttribute('src');
  };

  this.quote = () =>{
    return element(by.css('.home-proverb'));
  };
  this.quoteText = () =>{
    return element(by.css('.home-proverb')).getText();
  };

  this.artistDescription = () => {
    return element(by.css('#home-desc'));
  };
  this.artistDescriptionText = () => {
    return element(by.css('#home-desc')).getText();
  };

  this.artistSignature = () => {
    return element(by.css('.sign'));
  };

  this.artistSignatureSrc = () => {
    return element(by.css('.sign')).getAttribute('src');
  };

  this.artistSignatureText = () => {
    return element(by.css('.sign')).getText();
  };

  this.GMapBackgroundImageSrc = function ()  {
    return element(by.css('.map-img')).getAttribute('src');
  };

  this.GMapTitle = () => {
    return element(by.css('.invite'));
  };

  // TODO: getGMapPointer();  getGMapZoomInButton(); getGMapZoomOutButton();
  this.GMap = () => {
    return element(by.tagName('agm-map'));
  };

  this.secondBannerSrc = () => {
    return element(by.css('.secondImg')).getAttribute("src");
  };

  this.secondDescriptionTitle = () => {
    return element(by.css('#artistName'));
  };

  this.secondDescriptionPartOne = () => {
    return element(by.css('.desc1p'));
  };

  this.secondDescriptionPartTwo = () => {
    return element(by.css('.desc2p'));
  };

  this.secondDescriptionMotto = () => {
    return element(by.css('.firstb'));
  };

  this.phoneIcon = () => {
    return element(by.tagName('i'));
  };

  this.artistPhoneNumber = () => {
    return element(by.css('.ph-number'));
  };

  this.goToTopButton = () => {
    return element(by.css('#myBtn'));
  }

  this.goToTopButtonAttr = () => {
return element(by.css('#myBtn')).getAttribute('style="display"');
  }



};

module.exports = new HomePage();

