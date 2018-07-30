class chairsPageObject {

    constructor() {
        this.elements = {
            // elements for chairsPage
            LeftMenuButton: 'div.nav-inner__menu-button',
            UsernameField: 'id=dwfrm_login_username_d0pfraitgcut',
            PasswordField: 'id=dwfrm_login_password_d0btfdmzchvt',
            SubmitLoginButton: 'name=dwfrm_login_login',
            HomePage: 'img[alt="Herman Miller"]',
            TextInLoginForm: 'a.user-account > span',
            ShopNowLink: 'a.button.secondary',
            FirstElementOfProducts: 'a.name-link > h3',
            LivingLink: 'li.has-sub-menu.current > a > span > span.sub-title',
            ChairsLink: 'img[alt="Chairs"]',
            FirstChair: 'a.name-link > h3',
            SecondChair: 'li.has-sub-menu.current > a > span > span.sub-title',
            AddToCart: 'id=add-to-cart',
            Cart: 'className=mini-cart-button-text',
            PriceInCart: 'td.order-value',
            SofaColor: 'className=selected-swatch',
            AllParameters: 'div.product-specification-inner'

        };
    }
}

module.exports = new chairsPageObject();