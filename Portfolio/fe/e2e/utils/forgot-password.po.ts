import { browser, by, element } from 'protractor';

var ForgotPasswordPage = function() {
    this.title = ()  => {
        return element(by.css('.title'));
      };
      
      this.message = ()  => {
        return element(by.css('.email'));
      };
      
      this.emailInput = ()  => {
        return element(by.css('.email'));
      };
      
      this.resetPassButton = ()  => {
        return element(by.css('.reset'));
      };
      
      this.redirectMessage = ()  => {
        return element(by.css('.goBack'));
      };
      
      // this.redirectLink = ()  => {
      //   return element(by.css('.redirect'));
      // };

}
module.exports = new ForgotPasswordPage();