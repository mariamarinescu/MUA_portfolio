import { browser, by, element, By } from 'protractor';


var Header = function() {
    this.navbar = () => {
            return element(by.css('.menu'));
          };
        
          this.homePageMenuButton = () => {
            return element(by.css(".home"));
          };
          this.logoSrc = ()  =>{
            return element(by.xpath('//app-header/nav/img')).getAttribute('src');
           };
         
          this.portfolioDropDownMenuButton= () => {
            return element(by.css('.dropDownButton'));
          };
        
          this.portfolioDropDownMenuFirstCategoryButton = () => {
            return element(by.css('.firstItem'));
          };
        
          this.portfolioDropDownMenuSecondCategoryButton = () => {
            return element(by.css('.secondItem'));
          };
        
          this.portfolioDropDownMenuThirdCategoryButton = () => {
            return element(by.css('.thirdItem'));
          };
        
          this.portfolioDropDownMenuFourthCategoryButton = () => {
            return element(by.css('a.dropdown-item.fourthItem'));
          };
        
          this.servicesMenuButton = () => {
            return element(by.css('.services'));
          };
        
          this.contactMenuButton = () => {
            return element(by.css('.contact'))
          };
        
};

module.exports = new Header();