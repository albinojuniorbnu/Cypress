const elementsCart = require('./elements').ELEMENTS_CART;

class Cart {
    checkoutCart(){
        cy.get(elementsCart.DATA_CHECKOUT_BUTTON).click();
    }
}

export default new Cart();