'use strict';

const elementHelper = require('../PO/elementHelper.js');

class ChairsPage {

    get(url) {
        return browser.get(url);
    }

    clickLink(alias) {
        return elementHelper.getPageObjectElement(alias).click();
    }

    getTextOfElement(alias) {
         return elementHelper.getPageObjectElement(alias).getText();
    }

    showElement(alias) {
        const element = elementHelper.getPageObjectElement(alias);
        return console.log(element);
    }
}

module.exports = ChairsPage;