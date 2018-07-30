'use strict';

const elementHelper = require('../PO/elementHelper.js');

class legoPage {

    get(url) {
        return browser.get(url);
    }

    clickLink(alias) {
        return elementHelper.getPageObjectElement(alias).click();
    }

    countElements(alias) {
        return elementHelper.getPageObjectElements(alias).count();
    }

    getTitle() {
        return browser.getTitle();
    }

    getSomeAttribute(alias, attribute) {
        const element = elementHelper.getPageObjectElement(alias);
        return element.getAttribute(attribute);
    }

    isElementPresentOnPage(alias) {
        return elementHelper.getPageObjectElement(alias).isPresent();
    }
}

module.exports = legoPage;