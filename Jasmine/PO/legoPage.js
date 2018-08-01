'use strict';

const elementHelper = require('../PO/elementHelper.js');
const logger = require('../logger').logger;

class legoPage {

    get(url) {
        logger.info(`I opening ${url} site`);
        return browser.get(url);
    }

    clickLink(alias) {
        logger.info(`I clicking ${alias} link`);
        return elementHelper.getPageObjectElement(alias).click();
    }

    countElements(alias) {
        logger.info(`I counting elements ${alias}`);
        return elementHelper.getPageObjectElements(alias).count();
    }

    getTitle() {
        logger.info(`I gets page title`);
        return browser.getTitle();
    }

    getSomeAttribute(alias, attribute) {
        logger.info(`I taking attribute ${attribute} of element ${alias}`);
        const element = elementHelper.getPageObjectElement(alias);
        return element.getAttribute(attribute);
    }

    isElementPresentOnPage(alias) {
        logger.info(`I checking if element ${alias} is present on page`);
        return elementHelper.getPageObjectElement(alias).isPresent();
    }
}

module.exports = legoPage;