/// <reference types="cypress" />

import Login from '../../../support/frontEnd/pages/login'

describe('Login usuário bloqueado', () => {
    before(() => {
        Login.acessarLogin();
    })

    it('deve fazer login no saucedemo com usuario bloqueado e validar mensagem de bloqueio exibida', () => {
        Login.preencherLogin(objetoLogin);
        Login.validaUsuarioBloqueado(validarUsuarioBloqueado);
    });
});

let objetoLogin = {
    userName: 'locked_out_user',
    password: 'secret_sauce',
    logon: true
} 

let validarUsuarioBloqueado = {
    textoValidar: 'Epic sadface: Sorry, this user has been locked out.'
}