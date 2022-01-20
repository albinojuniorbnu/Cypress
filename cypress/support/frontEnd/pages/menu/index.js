
const elementsMenu = require('./elements').ELEMENTS_MENU;

class Menu {
    acessarMenu(opcaoMenu){
        cy.get(elementsMenu.DATA_MENUPRINCIPAL_BUTTON).click();
        if(opcaoMenu == 'allItems'){
            cy.get(elementsMenu.DATA_ALLITEMS_LINK).click();
        }
        if(opcaoMenu == 'about'){
            cy.get(elementsMenu.DATA_ABOUT_LINK).click();
        }
        if(opcaoMenu == 'logout'){
            cy.get(elementsMenu.DATA_LOGOUT_LINK).click();
        }
        if(opcaoMenu == 'resetAppState'){
            cy.get(elementsMenu.DATA_RESETAPPSTATE_LINK).click();
        }
    }

    acessarShoppingCart(){
        cy.get(elementsMenu.DATA_SHOPPINGCART_LINK).click();
    }
}

export default new Menu();