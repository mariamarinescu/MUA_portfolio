import { browser, by, element } from 'protractor';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

var PrivacyPolicyPage = function()  {

    this.getPrivacyPolicyPage = () => {
      browser.get('https://alexandraciausu-a6df7.firebaseapp.com/pagina-principala/politica-de-confidentialitate');
    };
  
    this.title = () => {
      return element(by.css('.title'));
    };
  
    this.countReadings = () => {
      return element.all(by.css('.reading'));
    };
  
    this.countReadings_One = () => {
      return element.all(by.css('.reading-1'));
    };
  
    this.countReadings_Two = () => {
      return element.all(by.css('.reading-2'));
    };
  
    this.countReadings_Three = () => {
      return element.all(by.css('.reading-3'));
    };
  
    this.countReadings_Four = () => {
      return element.all(by.css('.reading-4'));
    };
  
    this.countReadings_Five = () => {
      return element.all(by.css('.reading-5'));
    };
  
    this.countReadings_Six = () => {
      return element.all(by.css('.reading-6'));
    };
  
    this.countReadings_Seven = () => {
      return element.all(by.css('.reading-7'));
    };
  
    this.countReadings_Eight = () => {
      return element.all(by.css('.reading-8'));
    };
  
    this.countReadings_Nine = () => {
      return element.all(by.css('.reading-9'));
    };
  
    this.countReadings_Ten = () => {
      return element.all(by.css('.reading-10'));
    };
  
    this.countReadings_Eleven = () => {
      return element.all(by.css('.reading-11'));
    };
  
    this.countReadings_Twelve = () => {
      return element.all(by.css('.reading-12'));
    };
  
    this.countReadings_Thirteen = () => {
      return element.all(by.css('.reading-13'));
    };
  
  };
  
  module.exports = new PrivacyPolicyPage();