import { browser, by, element } from 'protractor';


var AdminInterface = function () { 
//admin menu
  this.menuJumbotron = () => {
    return element(by.css('.jumbotron'));
  };

  this.menuWelcomeMessage = () => {
    return element(by.css('.display-4'));
  };

  this.menuLogOutButton =  ()  => {
    return element(by.css('.btn-two'));
  };

  this.menuSplittingLine = () => {
    return element(by.css('.my-4'));
  };

  this.menuMessage = () => {
    return element(by.css('.menuMessage'));
  };

  this.hamburgerMenuIcon = () => {
    return element(by.css('.hamburger-icon'));
  };

  this.hamburgerMenuButton = () => {
      return element(by.css('.hamburger-button'))
  }

  this.menuDropdownUploadLink = () => {
    return element(by.css('.upload'));
  };

  this.menuDropdownInsideMessage = () => {
    return element(by.css('.inside'));
  };

  this.menuDropdownFirstCategoryGalleryLink = () => {
    return element(by.css('#firstChoice'));
  };

  this.menuDropdownSecondCategoryGalleryLink = () => {
    return element(by.css('#secondChoice'));
  };

  this.menuDropdownThirdCategoryGalleryLink = () => {
    return element(by.css('#thirdChoice'));
  };

  this.menuDropdownFourthCategoryGalleryLink = () => {
    return element(by.css('#fourthChoice'));
  };

//admin upload
  this.uploadHeaderMessage = () => {
    return element(by.css('.card-header'));
  };

  this.uploadTitle = () => {
    return element(by.css('.card-title'));
  };

  this.uploadMainMessage = () => {
    return element(by.css('.mainMessage'));
  };

  this.uploadSelectOptions = () => {
    return element.all(by.xpath('//select/option'));
  };

  this.uploadOptionNumOne = () => {
    return element(by.css('.one'));
  };

  this.uploadOptionNumTwo = () => {
    return element(by.css('.two'));
  };

  this.uploadOptionNumThree = () => {
    return element(by.css('.three'));
  };

  this.uploadOptionNumFour = () => {
    return element(by.css('.four'));
  };

  this.uploadSelectedCategoryMessage = () => {
    return element(by.css('.category'));
  };

  this.uploadSelectedCategory = () => {
    return element(by.xpath('//p/b'));
  };

  this.uploadUploadInput = () => {
    return element(by.css('.file-input'));
  };

  this.uploadBackToMenuButton = () => {
    return element(by.css('.takeMeBack'));
  };

  this.uploadLogOutbutton = () => {
    return element(by.css('.takeMeBack'));
  };

  this.uploadProgressBar = () => {
    return element(by.xpath('//div/progress'));
  };

  this.uploadPauseButton = () => {
    return element(by.buttonText('Pause'));
  };

  this.uploadCancelButton = () => {
    return element(by.buttonText('Cancel'));
  };

  this.uploadResumeButton = () => {
    return element(by.buttonText('Resume'));
  };

  this.uploadResultsTitle = () => {
    return element(by.css('.results'));
  };

  this.uploadCurrentImg = () => {
    return element(by.css('.current'));
  };

  this.uploadCurrentImgDownloadLink = () => {
    return element(by.linkText('Download Me!'));
  };


  this.galleryBackToMenuButton = () => {
    return element(by.css('.backToMenu'));
  };


  // admin gallery 
  this.galleryLogOutButton = () => {
    return element(by.buttonText('Log-Out'));
  };

  this.galleryImages = () => {
    return element(by.xpath('//div/div/img'));
  };

  this.galleryDeleteButton = () => {
    return element(by.buttonText('Sterge'));
  };

}

module.exports = new AdminInterface();