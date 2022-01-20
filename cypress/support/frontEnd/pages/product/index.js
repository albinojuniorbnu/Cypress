
const elementsProduct = require('./elements').ELEMENTS_PRODUCT;
import Menu from '../menu/index';

class Product {
    acessarAllItems(){
        Menu.acessarMenu('allItems');
    }

    comprarProdutos(objetoProdutos){
        if(objetoProdutos.backpack){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBACKPACK_BUTTON).click();
        }
        if(objetoProdutos.bikeLight){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBIKELIGHT_BUTTON).click();
        }
        if(objetoProdutos.boltTShirt){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBOLTTSHIRT_BUTTON).click();
        }
        if(objetoProdutos.fleeceJacket){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSFLEECEJACKET_BUTTON).click();
        }
        if(objetoProdutos.onesie){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSONESIE_BUTTON).click();
        }
        if(objetoProdutos.thirtRed){
            cy.get(elementsProduct.DATA_ADDCARTSAUCELABSTSHIRTRED_BUTTON).click();
        }
    }

    adicionarTodosItens(){
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBACKPACK_BUTTON).click();
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBIKELIGHT_BUTTON).click();
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSBOLTTSHIRT_BUTTON).click();
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSFLEECEJACKET_BUTTON).click();
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSONESIE_BUTTON).click();
        cy.get(elementsProduct.DATA_ADDCARTSAUCELABSTSHIRTRED_BUTTON).click();
    }
    
    acessarProductCart(){
        Menu.acessarShoppingCart();
    }
}

export default new Product();