const expect = require('chai').expect;
const Page = require("../pages/chairsPage.js");
const page = new Page();

var myStepDefinitionsWrapper = function () {
    this.Given(/^I navigate to the main page$/, function (callback) {
        page.get();
        callback.pending();
    });
    this.When(/^I push log in, fill user name and password and submit$/, function (callback) {
        page.login('a675188@nwytg.net', 'Password1')
        callback.pending();
    });
    this.Then(/^I should be logged in$/, function (callback) {
        page.showMeLoginUser().then((text) => {
            expect(text).to.eql('My Account');
        });
        callback.pending();
    });
    this.When(/^I go to the living link and choose chairs$/, function (callback) {
        page.openLivingChairs();
        callback.pending();
    });
    this.When(/^I add "([^"]*)" chairs to the cart$/, function (number, callback) {
        page.addChair(number);
        callback.pending();
    });
    this.Then(/^I see "([^"]*)" in cart$/, function (price, callback) {
        page.showPrice().then((text) => {
            expect(text).to.eql(price);
        });
        callback.pending();
    });

    this.When(/^I go to shop now link$/, function (callback) {
        page.goToShopNowLink();
        callback.pending();
    });
    this.When(/^Choose first sofa$/, function (callback) {
        page.openSofaLink();
        callback.pending();
    });
    this.Then(/^I see its lite silver color and walnut legs by default$/, function (callback) {
        page.lookAtDefaultParameters().then((text) => {
            expect(text).to.eql("Light Silver Walnut");
        });
        callback.pending();
    });

    this.Then(/^I see all parameters$/, function (callback) {
        page.showParameters();
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;

