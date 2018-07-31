const expect = require('chai').expect;
const Page = require('../pages/chairsPage.js');
const page = new Page();


const myStepDefinitionsWrapper = function () {


    this.Given(/^I open "([^"]*)"$/, {timeout: 60 * 1000}, (url) => {
        return page.get(url);
    });

    this.When(/^I click link "([^"]*)"$/, {timeout: 60 * 1000}, (alias) => {
        return page.clickLink(alias);
    });

    this.Then(/^I see "([^"]*)"$/, {timeout: 60 * 1000}, (alias) => {
        return page.showElement(alias);
    });

    this.Then(/^I should see that "([^"]*)" equal "([^"]*)"$/, {timeout: 60 * 1000}, (alias, expText) => {
       return page.getTextOfElement(alias).then((realText) => {
            return expect(realText).to.eql(expText);
        });
    });
};

module.exports = myStepDefinitionsWrapper;

