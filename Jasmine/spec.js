'use strict'
describe('angularjs homepage', function () {

    beforeEach(function () {
        browser.get('https://www.lego.com/en-us/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('LEGO.com US - Inspire and develop the builders of tomorrow');
    });
});