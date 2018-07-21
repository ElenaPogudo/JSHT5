'use strict';


const url = 'http://store.hermanmiller.com';
const loginButton = element(by.css("a[title=\"User: Login /  Register\"] > span"));
const usernameField = element(by.css("id=dwfrm_login_username_d0pfraitgcut"));
const passwordField = element(by.css("id=dwfrm_login_password_d0btfdmzchvt"));
const submitLoginButton = element(by.css("name=dwfrm_login_login"));
const homePage = element(by.css("img[alt=\"Herman Miller\"]"));
const loginUser = element(by.css("a.user-account > span"));
const livingLink = element(by.css("li.has-sub-menu.current > a > span > span.sub-title"));
const chairsLink = element(by.css("img[alt=\"Chairs\"]"));
const firstChair = element(by.css("a.name-link > h3"));
const secondChair = element(by.css("li.has-sub-menu.current > a > span > span.sub-title"));
const addToCart = element(by.css("id=add-to-cart"));
const cart = element(by.className("mini-cart-button-text"));
const priceInCart = element(by.css("td.order-value"));


class ChairsPage {

    get() {
        return browser.get(url);
    }

    login(username, password) {
        browser.findElement(loginButton).click();
        browser.findElement(usernameField).sendKeys(username);
        browser.findElement(passwordField).sendKeys(password);
        browser.findElement(submitLoginButton).click();
        return browser.findElement(homePage).click();
    }

    showMeLoginUser() {
        return loginUser.getText();
    }

    openLivingChairs() {
        browser.findElement(livingLink).click();
        return browser.findElement(chairsLink);
    }

    addChair(number) {

        switch (number) {
            case "1":{
                browser.findElement(firstChair).click();
                browser.findElement(addToCart).click();
                browser.findElement(cart).click();
                break;
            }
            case "2":{
                browser.findElement(firstChair).click();
                browser.findElement(addToCart).click();
                browser.back();
                browser.findElement(secondChair).click();
                browser.findElement(addToCart).click();
                browser.findElement(cart).click();
                break;
            }
        }
    }

    showPrice() {
        this.highlightElement(priceInCart);
        return priceInCart.getText();
    }

    highlightElement(el) {
        var bg;
        return el.getCssValue("backgroundColor").then(function (col) {
            bg = col;
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return browser.sleep(1000);
        }).then(function () {
            console.log('bg', bg);
            return browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return browser.sleep(1000);
        })
    }
}

module.exports = ChairsPage;