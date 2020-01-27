import { browser, by, element } from 'protractor';




var LogInPage = function() {

  this.leftElement = () => {
    return element(by.css('.left'));
  };

  this.rightElement = () => {
    return element(by.css('.right'));
  }
    this.title = () => {
        return element(by.css('.login'));
      };
    
      this.message = () => {
        return element(by.css('.eula'));
      };
    
      this.form = () => {
        return element(by.css('.form'));
      };
    
      this.emailLabel = () => {
        return element(by.css('.email'));
      };
    
      this.emailInputValue = () => {
        return element(by.css('#email')).getAttribute('value');
      };

      this.emailInput = () => {
        return element(by.css('#email'));
      };
      
    
      this.passwordLabel = () => {
        return element(by.css('.password'));
      };
    
      this.passwordInput = () => {
        return element(by.css('#password'));
      };

      this.passwordInputValue = () => {
        return element(by.css('#password')).getAttribute('value');
      };
    
      this.submitButton = () => {
        return element(by.css('#submit'));
      };
    
      this.forgotPasswordButton = () => {
        return element(by.css('.forgot-password'));
      };
    
      this.SVGStrokeDashoffsetCSSProperty = () => {
        return element(by.xpath('//app-login/div/div/div/svg/path')).getCssValue('stroke-dashoffset');
      };
    
      this.SVGStrokeDasharrayCSSProperty = () => {
        return element(by.xpath('//svg/path')).getCssValue('stroke-dasharray');
      };
    
};

module.exports = new LogInPage();