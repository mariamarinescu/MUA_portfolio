import { browser, by, element } from 'protractor';


var ContactPage = function() {
    this.getContactPage = () => {
        browser.get('https://alexandraciausu-a6df7.firebaseapp.com/pagina-principala/contact');
      };
    
      this.navigateToContactPage = () => {
        browser.get('/contact');
      };
    
      this.form = () => {
        return element(by.css('#form'));
      };
    
      this.formMessage = () => {
        return element(by.css('.message'));
      };
    
      this.formNameInput = () => {
        return element(by.css('#name'));
      };
    
      this.formNameInputValue = () => {
        return element(by.css('#name')).getAttribute('value');
      };

      this.formPhoneNumberInput = () => {
        return element(by.css('#number'));
      };

      this.formPhoneNumberInputValue = () => {
        return element(by.css('#number')).getAttribute('value');
      };
    
      this.formMessageInput = () => {
        return element(by.css('#message'));
      };

      this.formMessageInputValue = () => {
        return element(by.css('#message')).getAttribute('value');
      };
    
      this.formSubmitButton = () => {
        return element(by.css('#submit'));
      };

      this.formSubmitButtonClickAttr = () => {
        return element(by.css('#submit')).getAttribute('disabled');
      }
};

module.exports = new ContactPage();