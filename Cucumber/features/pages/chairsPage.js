'use strict';

const elementHelper = require('../PO/elementHelper.js');

class ChairsPage {

    get(url) {
        return browser.get(url);
    }

    clickLink(alias) {
        return elementHelper.getPageObjectElement(alias).click();
    }

    fillField(alias, text) {
        return elementHelper.getPageObjectElement(alias).sendKeys(text);
    }

    getTextOfElement(alias) {
        return elementHelper.getPageObjectElement(alias).getText();
    }

    showElement(alias) {
        const element = elementHelper.getPageObjectElement(alias);
        return this.highlightElement(element);
    }

    highlightElement(el) {
        let bg;
        return el.getCssValue('backgroundColor').then( (col) => {
            bg = col;
        }).then( () => {
            return browser.executeScript(`arguments[0].style.backgroundColor = red`, el);
        }).then( () => {
            return browser.executeScript(`arguments[0].style.backgroundColor = "${bg}"`, el);
        });
    }
}

module.exports = ChairsPage;