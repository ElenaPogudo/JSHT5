const expect = require('chai').expect;
const Page = require('../pages/chairsPage.js');
const page = new Page();
const logger = require('../../logger').logger;


const myStepDefinitionsWrapper = function () {


    this.Given(/^I open "([^"]*)"$/, {timeout: 60 * 1000}, (url) => {
        logger.info(`I should open ${url} site`);
        return page.get(url);
    });

    this.When(/^I click link "([^"]*)"$/, {timeout: 60 * 1000}, (alias) => {
        logger.info(`I should click ${alias} link`);
        return page.clickLink(alias);
    });

    this.Then(/^I should see that "([^"]*)" equal "([^"]*)"$/, {timeout: 60 * 1000}, (alias, expText) => {
        logger.info(`I should see that text in element ${alias} equal to ${expText} `);
       return page.getTextOfElement(alias).then((realText) => {
            return expect(realText).to.eql(expText);
        });
    });
};

module.exports = myStepDefinitionsWrapper;

