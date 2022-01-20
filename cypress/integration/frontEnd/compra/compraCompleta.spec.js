/// <reference types="cypress" />

import Login from       '../../../support/frontEnd/pages/login';
import Product from     '../../../support/frontEnd/pages/product';
import Cart from        '../../../support/frontEnd/pages/cart';
import Checkout from    '../../../support/frontEnd/pages/checkout';

describe('Compra completa', () => {
    before(() => {
        Login.acessarLogin();
        Login.preencherLogin(objetoLoginCompraCompleta);
    })

    it('deve realizar uma compra completa com mais de um produto no carrinho', () => {
        Product.acessarAllItems();
        Product.comprarProdutos(objetoProdutos);
        Product.acessarProductCart();
        Cart.checkoutCart();
        Checkout.preencherCheckoutInformation(objetoChecoutInformation);
        Checkout.finishCheckout();
        Checkout.validaCheckoutComplete('THANK YOU FOR YOUR ORDER');
    });
});

let objetoLoginCompraCompleta = {
    userName: 'standard_user',
    password: 'secret_sauce',
    logon: true
} 

let objetoProdutos = {
    backpack: true,
    fleeceJacket: true
}

let objetoChecoutInformation = {
    firstName: 'Teste',
    lastName: 'sobrenome',
    zipPostalCode: '99999-000',
    continue: true,
}

