class legoPageObject {

    constructor() {
        this.elements = {
            // elements for mainPage
            mainLogo: '#l-gh > div > a',
            logIn: 'div.links > a',
            languageButton: '#l-gf > div > div.l-gf__links-market-wrapper > div.l-gf__market > div',
            RusLanguageButton: '#l-gf > div > div.l-gf__links-market-wrapper > div.l-gf__market.l-select--open > div > div > ul > li:nth-child(23) > a',
            headerButtons: 'a.l-nav__link',
            productsButton: '#l-gh > div > div.l-gh__main-wrapper > nav > ul > li.l-nav__item.js-track--products > a',
            nextImgButton: 'body > div.grid-row.grid-row--full-width.mainstage > div > div > div > div.mainstage__nav > button.mainstage__btn.mainstage__btn--next > i',
            prevImgButton: 'body > div.grid-row.grid-row--full-width.mainstage > div > div > div > div.mainstage__nav > button.mainstage__btn.mainstage__btn--prev',
            // elements for productsPage
            navigButtons: 'span.nav__title'
        };
    }
}

module.exports = new legoPageObject();