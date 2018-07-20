'use strict'

describe('lego homepage', function () {
     const mainlogo = element(by.className('l-gh__logo  l-logo'));
     const logIn = element(by.css('div.links > a'));
     const languageButton = element(by.xpath('//footer[@id=\'l-gf\']/div/div/div[2]/div/button'));
     const RusLanguageButton= element(by.xpath('//a[contains(text(),\'Россия (Русский)\')]')) ;
     const headerButtons = element.all(by.className('l-nav__link'));
     const productsButton = element(by.xpath('//a[contains(text(),\'Products\')]'));
     const nextImgButton = element(by.className('mainstage__btn-icon icon icon-angle-right'));
    const prevImgButton = element(by.className('mainstage__btn mainstage__btn--prev'));

    beforeEach(function () {
        browser.get('https://www.lego.com/en-us/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('LEGO.com US - Inspire and develop the builders of tomorrow');
    });

    xit('should have main logo', () => {
        expect(mainlogo.getAttribute('href')).toEqual('https://www.lego.com/en-us');
    });

    it('should have login link', () => {
        expect(logIn.getAttribute('text')).toEqual('Log in');
    });

    xit('should go to russian version', () => {
        languageButton.click();
        RusLanguageButton.click();
        expect(browser.getTitle()).toEqual('LEGO.com RU — Вдохновлять и учить строителей будущего.');
    });

   xit('should have 7 main buttons', () => {
        expect(headerButtons.count()).toBe(7);
    });

    xit('should open products link', () => {
        productsButton.click();
        expect(browser.getTitle()).toEqual('Products - LEGO.com US');
    });

    xit('should have go right button', () => {
        expect(nextImgButton.isPresent()).toBeTruthy();
    });

    xit('should have go left button', () => {
        expect(prevImgButton.isPresent()).toBeTruthy();
    });
});

describe('lego products page', function () {

    const navigButtons = element.all(by.className('nav__title'));

    beforeEach(function () {
        browser.get('https://www.lego.com/en-us/products');
    });

    xit('should contain word LEGO in title', () => {
        expect(browser.getTitle()).toContain('LEGO');
    });

    xit('should have 4 navigation buttons', () => {
        expect(navigButtons.count()).toBe(4);
    });



});

