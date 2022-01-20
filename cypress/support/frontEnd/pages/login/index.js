// ações da pagina de Login

const elements = require('./elements').ELEMENTS_LOGIN;

class Login {
    acessarLogin(){
        cy.visit('https://www.saucedemo.com/');
    }

    preencherLogin(objetoLogin){
        if(objetoLogin.userName){
            cy.get(elements.ID_USERNAME_INPUT).type(objetoLogin.userName);
        }
        if(objetoLogin.password){
            cy.get(elements.ID_PASSWORD_INPUT).type(objetoLogin.password);
        }
        if(objetoLogin.logon){
            cy.get(elements.ID_LOGIN_BUTTON).click();
        }
    }

    validaUsuarioBloqueado(objetoValidar){
        cy.get(elements.DATA_TESTERROR_MESSAGE).should('have.text', objetoValidar.textoValidar); 
    }
}

export default new Login();