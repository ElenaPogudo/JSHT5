const expect = require('chai').expect;
const Page = require('../pages/chairsPage.js');
const page = new Page();

const myStepDefinitionsWrapper = function() {

    this.Given(/^I open "([^"]*)"$/, (url, callback) => {
        page.get(url);
        callback(null, 'pending');

    });

    this.When(/^I click link "([^"]*)"$/, (alias, callback) => {
        page.clickLink(alias);
        callback(null, 'pending');
    });

    this.When(/^I fill "([^"]*)" with "([^"]*)"$/, (alias, text, callback) => {
        page.fillField(alias, text);
        callback(null, 'pending');
    });

    this.Then(/^I see "([^"]*)"$/, (alias, callback) => {
        page.showElement(alias);
        callback(null, 'pending');
    });

    this.Then(/^I should see that "([^"]*)" equal "([^"]*)"$/, (alias, text, callback) => {
        expect(text).to.eql(page.getTextOfElement(alias));
        callback(null, 'pending');
    });
};
module.exports = myStepDefinitionsWrapper;

