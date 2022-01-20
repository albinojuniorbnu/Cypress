/// <reference types="cypress" />

import Login from       '.../../../support/frontEnd/pages/login';
import Product from     '.../../../support/frontEnd/pages/product';
import Cart from        '.../../../support/frontEnd/pages/cart';
import Checkout from    '.../../../support/frontEnd/pages/checkout';

describe('Todos produtos carrinho', () => {
    before(() => {
        Login.acessarLogin();
        Login.preencherLogin(objetoLoginTodosProdutos);
    })

    it('deve adicionar todos os produtos ao carrinho e validar o valor total da compra a ser pago', () => {
        Product.acessarAllItems();
        Product.adicionarTodosItens();
        Product.acessarProductCart();
        Cart.checkoutCart();
        Checkout.preencherCheckoutInformation(objetoChecoutInformation);
        Checkout.validaValorTotalCompra('Total: $140.34');
        Checkout.finishCheckout();
        Checkout.validaCheckoutComplete('THANK YOU FOR YOUR ORDER');
    });
});

let objetoLoginTodosProdutos = {
    userName: 'standard_user',
    password: 'secret_sauce',
    logon: true
} 

let objetoChecoutInformation = {
    firstName: 'Teste',
    lastName: 'todos produtos',
    zipPostalCode: '99999-000',
    continue: true,
}