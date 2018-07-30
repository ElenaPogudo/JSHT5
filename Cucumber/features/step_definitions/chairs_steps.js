const expect = require('chai').expect;
const {Given, When, Then} = require('cucumber');
const Page = require('./Cucumber/features/pages/chairsPage.js');
const page = new Page();

const myStepDefinitionsWrapper = () => {

    Given(/^I open "([^"]*)"$/, (url, callback) => {
        page.get(url);
        callback.pending();
    });

    When(/^I click link "([^"]*)"$/, (alias, callback) => {
        page.clickLink(alias);
        callback.pending();
    });

    When(/^I fill "([^"]*)" with "([^"]*)"$/, (alias, text, callback) => {
        page.fillField(alias, text);
        callback.pending();
    });

    Then(/^I see "([^"]*)"$/, (alias, callback) => {
        page.showElement(alias);
        callback.pending();
    });

    Then(/^I should see that "([^"]*)" equal "([^"]*)"$/, (alias, text, callback) => {
        expect(text).to.eql(page.getTextOfElement(alias));
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;

