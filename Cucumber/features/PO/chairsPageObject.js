class chairsPageObject {

    constructor() {
        this.elements = {
            // elements for chairsPage
            'Login Button': 'a[title="User: Login /  Register"] > span',
            'Username Field': 'id=dwfrm_login_username_d0pfraitgcut',
            'Password Field': 'id=dwfrm_login_password_d0btfdmzchvt',
            'Submit Login Button': 'name=dwfrm_login_login',
            'Home Page': 'img[alt="Herman Miller"]',
            'Text in login form': 'a.user-account > span',
            'Shop Now Link': 'a.button.secondary',
            'First Element Of Products': 'a.name-link > h3',
            'Living Link': 'li.has-sub-menu.current > a > span > span.sub-title',
            'Chairs Link': 'img[alt="Chairs"]',
            'First Chair': 'a.name-link > h3',
            'Second Chair': 'li.has-sub-menu.current > a > span > span.sub-title',
            'Add To Cart': 'id=add-to-cart',
            'Cart': 'className=mini-cart-button-text',
            'Price In Cart': 'td.order-value',
            'Sofa Color': 'className=selected-swatch',
            'All Parameters': 'div.product-specification-inner'

        };
    }
}

module.exports = new chairsPageObject();