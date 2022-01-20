const elementsCheckout = require('./elements').ELEMENTS_CHECKOUT;

class Checkout {
    preencherCheckoutInformation(objetoCheckout){
        if(objetoCheckout.firstName){
            cy.get(elementsCheckout.DATA_FIRSTNAME_INPUT).type(objetoCheckout.firstName);
        }
        if(objetoCheckout.lastName){
            cy.get(elementsCheckout.DATA_LASTTNAME_INPUT).type(objetoCheckout.lastName);
        }
        if(objetoCheckout.zipPostalCode){
            cy.get(elementsCheckout.DATA_ZIPPOSTALCODE_INPUT).type(objetoCheckout.zipPostalCode);
        }
        if(objetoCheckout.continue){
            cy.get(elementsCheckout.DATA_CONTINUE_BUTTON).click();
        }
    }

    finishCheckout(){
        cy.get(elementsCheckout.DATA_FINISH_BUTTON).click();
    }

    validaCheckoutComplete(textoValidar){
        cy.get(elementsCheckout.DATA_COMPLETEHEADER_MESSAGE).should('have.text', textoValidar);
        cy.get(elementsCheckout.DATA_BACKHOME_BUTTON).click();
    }

    validaValorTotalCompra(valorTotal){
        cy.get(elementsCheckout.DATA_TOTAL_LABEL).should('have.text', valorTotal);
    }
}

export default new Checkout();