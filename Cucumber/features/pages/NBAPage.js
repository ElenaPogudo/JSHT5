'use strict';

const elementHelper = require('../PO/elementHelper.js');
const logger = require('../../logger').logger;

class NBAPage {

    get(url) {
        logger.info(`Opening ${url} page`);
        return browser.get(url);
    }

    clickLink(alias) {
        logger.info(`Clicking ${alias} link`);
        return elementHelper.getPageObjectElement(alias).click();
    }

    getTextOfElement(alias) {
        logger.info(`Taking text from element ${alias}`);
        return elementHelper.getPageObjectElement(alias).getText();
    }

}

module.exports = NBAPage;