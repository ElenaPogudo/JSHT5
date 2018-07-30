'use strict';

const Page = require('./PO/legoPage.js');
const page = new Page();

describe('lego homepage', () => {


    beforeEach( () => {
        page.get('https://www.lego.com/en-us/');
    });

    it('should have a correct title', () => {
        expect(page.getTitle()).toEqual('LEGO.com US - Inspire and develop the builders of tomorrow');
    });

    it('should have main logo', () => {
        expect(page.getSomeAttribute('mainLogo', 'href')).toEqual('https://www.lego.com/en-us');
    });

    it('should have login link', () => {
        expect(page.getSomeAttribute('logIn', 'text')).toEqual('Log in');
    });

    it('should go to russian version', () => {
        page.clickLink('languageButton');
        page.clickLink('RusLanguageButton');
        expect(page.getTitle()).toEqual('LEGO.com RU — Вдохновлять и учить строителей будущего.');
    });
//!
    it('should have 7 main buttons', () => {
        expect(page.countElements('headerButtons')).toBe(7);
    });

    it('should open products link', () => {
        page.clickLink('productsButton');
        expect(page.getTitle()).toEqual('Products - LEGO.com US');
    });

    it('should have go right button', () => {
        expect(page.isElementPresentOnPage('nextImgButton')).toBeTruthy();
    });

    it('should have go left button', () => {
        expect(page.isElementPresentOnPage('prevImgButton')).toBeTruthy();
    });
});

describe('lego products page', () =>{

    beforeEach( () => {
        page.get('https://www.lego.com/en-us/products');
    });

    it('should contain word LEGO in title', () => {
        expect(page.getTitle()).toContain('LEGO');
    });

    it('should have 4 navigation buttons', () => {
        expect(page.countElements('navigButtons')).toBe(4);
    });


});

