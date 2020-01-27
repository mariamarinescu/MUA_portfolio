import { browser, by, element } from 'protractor';

var ServicesPage = function()  {

    this.getServicesPage = () => {
      browser.get('https://alexandraciausu-a6df7.firebaseapp.com/pagina-principala/servicii');
    };
  
    this.navigateToServicesPage = () => {
      return browser.get('/servicii');
    };
  
    //first category

this.cardFirstCategory = () => {
    return element(by.css('.day'));
}
    this.cardFrontFirstCategory = () => {
      return element(by.css('.day-front'));
    };
  
    this.cardFrontFirstCategoryTitle = () => {
      return element(by.css('.day-front-title'));
    };
  
    this.cardFrontFirstCategoryImg = () => {
      return element(by.css('.card-front-day-img'));
    };

    this.cardFrontFirstCategoryImgSrc = () => {
        return element(by.css('.card-front-day-img')).getAttribute('src');
      };
  
    this.cardBackFirstCategory = () => {
      return element(by.css('.day-back'));
    };
  
    this.cardBackFirstCategoryTitle = () => {
      return element(by.css('.day-back-title'));
    };
  
    this.cardBackFirstCategoryFirstChoiceText = () => {
      return element(by.css('.day-back-first-choice'));
    };
  
    this.cardBackFirstCategorySecondChoiceText = () => {
      return element(by.css('.day-back-second-choice'));
    };
  
    this.cardBackFirstCategoryThirdChoiceText = () => {
      return element(by.css('.day-back-third-choice'));
    };
  
    //second category

    this.cardSecondCategory = () => {
        return element(by.css('.night'));
    };

    this.cardFrontSecondCategory = () => {
      return element(by.css('.night-front'));
    };
  
    this.cardFrontSecondCategoryTitle = () => {
      return element(by.css('.night-front-title'));
    };
  
    this.cardFrontSecondCategoryImg = () => {
      return element(by.css('.card-front-night-img'));
    };

    this.cardFrontSecondCategoryImgSrc = () => {
        return element(by.css('.card-front-night-img')).getAttribute('src');
      };
  
    this.cardBackSecondCategory = () => {
      return element(by.css('.night-back'));
    };
  
    this.cardBackSecondCategoryTitle = () => {
      return element(by.css('.night-back-title'));
    };
  
    this.cardBackSecondCategoryFirstChoiceText = () => {
      return element(by.css('.night-back-first-choice'));
    };
  
    this.cardBackSecondCategorySecondChoiceText = () => {
      return element(by.css('.night-back-second-choice'));
    };
  
    this.cardBackSecondCategoryThirdChoiceText = () => {
      return element(by.css('.night-back-third-choice'));
    };
  
    //third category
    this.cardThirdCategory = () => {
        return element(by.css('.bridal'));
    };

    this.cardFrontThirdCategory = () => {
      return element(by.css('.bridal-front'));
    };
  
    this.cardFrontThirdCategoryTitle = () => {
      return element(by.css('.bridal-front-title'));
    };
  
    this.cardFrontThirdCategoryImg = () => {
      return element(by.css('.card-front-bridal-img'));
    };

    this.cardFrontThirdCategoryImgSrc = () => {
        return element(by.css('.card-front-bridal-img')).getAttribute('src');
      };
  
    this.cardBackThirdCategory = () => {
      return element(by.css('.bridal-back'));
    };
  
    this.cardBackThirdCategoryTitle = () => {
      return element(by.css('.bridal-back-title'));
    };
  
    this.cardBackThirdCategoryFirstChoiceText = () => {
      return element(by.css('.bridal-back-first-choice'));
    };
  
    this.cardBackThirdCategorySecondChoiceText = () => {
      return element(by.css('.bridal-back-second-choice'));
    };
  
    this.cardBackThirdCategoryThirdChoiceText = () => {
      return element(by.css('.bridal-back-third-choice'));
    };
  
    this.cardBackThirdCategoryFourthChoiceText = () => {
      return element(by.css('.bridal-back-fourth-choice'));
    };
  
  
    //third category
    this.cardFourthCategory = () => {
        return element(by.css('.special'));
    };

    this.cardFrontFourthCategory = () => {
      return element(by.css('.special-front'));
    };
  
    this.cardFrontFourthCategoryTitle = () => {
      return element(by.css('.special-front-title'));
    };
  
    this.cardFrontFourthCategoryImg = () => {
      return element(by.css('.card-front-special-img'));
    };

    this.cardFrontFourthCategoryImgSrc = () => {
        return element(by.css('.card-front-special-img')).getAttribute('src');
      };
  
    this.cardBackFourthCategory = () => {
      return element(by.css('.special-back'));
    };
  
    this.cardBackFourthCategoryTitle = () => {
      return element(by.css('.special-back-title'));
    };
  
    this.cardBackFourthCategoryFirstChoiceText = () => {
      return element(by.css('.special-back-first-choice'));
    };
  
    this.cardBackFourthCategorySecondChoiceText = () => {
      return element(by.css('.special-back-second-choice'));
    };
  
    this.cardBackFourthCategoryThirdChoiceText = () => {
      return element(by.css('.special-back-third-choice'));
    };
  
    this.messageAtTheEndOfThePage = () => {
      return element(by.css('.last-message'));
    };
  
  };

  module.exports = new ServicesPage();