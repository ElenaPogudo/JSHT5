const chairsPageObject = require('./Cucumber/features/PO/chairsPageObject.js');

class ElementHelper {

    getPageObjectElement(alias) {
        const selector = chairsPageObject.elements[alias];
        return element(by.css(selector));

    }
}

module.exports = new ElementHelper();