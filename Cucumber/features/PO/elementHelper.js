const NBAPageObject = require('../PO/NBAPageObject.js');
const logger = require('../../logger').logger;

class ElementHelper {

    getPageObjectElement(alias) {
        logger.info(`Looking for element ${alias} on page`);
        const selector = NBAPageObject.elements[alias];
        return element(by.css(selector));

    }
}

module.exports = new ElementHelper();