import { browser, by, element } from 'protractor';
export class Header {

};

var Footer = function () {
  this.footer = () => {
    return element(by.tagName('footer'));
  };

  this.appointmentsMessageAndPhoneNumber = () => {
    return element(by.css('.f-ph'));
  };

  this.privacyPolicyButton = () => {
    return element(by.css('.p-policy'));
  };

  this.allRightsReserved = () => {
    return element(by.css('.allRightsReserved'));
  };

  this.developerRights = () => {
    return element(by.css('.love'));
  };

  this.adminLogInButton = () => {
    return element(by.css('.admin-login'));
  };
}

module.exports = new Footer();