/// <reference types="cypress" />

import Usuarios from    '../../../support/apis/pages/usuarios';

describe('EndPoint Usuarios - ServeRest', () => {

    it('Validar usuário cadastrado com sucesso', () => {
        Usuarios.validarUsuarioCadastrado();
    });

    it('Validar verificações realizadas no cadastro de usuário', () => {
        Usuarios.validarVerificacoesUsuarioCadastrado()
    });

    it('Validar edição de um usuário', () => {
        Usuarios.alterarUsuarioCadastrado()
    });

    it('Validar listagem de usuários', () => {
        Usuarios.validaListagemUsuarios();
    });

    it('Validar exclusão de um usuário', () => {
        Usuarios.excluirUsuarioCadastrado();
    });
});