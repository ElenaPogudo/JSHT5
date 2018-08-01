const chairsPageObject = require('../PO/chairsPageObject.js');
const logger = require('../../logger').logger;

class ElementHelper {

    getPageObjectElement(alias) {
        logger.info(`Looking for element ${alias} on page`);
        const selector = chairsPageObject.elements[alias];
        return element(by.css(selector));

    }
}

module.exports = new ElementHelper();