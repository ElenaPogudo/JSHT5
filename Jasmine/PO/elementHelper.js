const legoPageObject = require('../PO/legoPageObject.js');

class ElementHelper {

    getPageObjectElement(alias) {
        const selector = legoPageObject.elements[alias];
        return element(by.css(selector));
    }
    getPageObjectElements(alias) {
        const selector = legoPageObject.elements[alias];
        return element.all(by.css(selector));
    }
}

module.exports = new ElementHelper();