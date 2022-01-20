const urlUsuarios = require('../urls/urlsUsuarios').URLS_USUARIOS;
const fabricaUsuarios = require('../fabrica/usuarioFabrica').FABRICA_USUARIOS;

class Usuarios {
    
    validarUsuarioCadastrado(){
        cy.request({
            url: urlUsuarios.URLS_SERVEREST_USUARIOS,
            method: 'POST',
            body: 
                fabricaUsuarios.body,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eql("Cadastro realizado com sucesso")
            expect(response.body).to.have.property("_id")
        })
    }

    validarVerificacoesUsuarioCadastrado(){
        cy.request({
            url: urlUsuarios.URLS_SERVEREST_USUARIOS,
            method: 'POST',
            body: 
                fabricaUsuarios.body,
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eql("Este email já está sendo usado")
        })
    }
    
    validaListagemUsuarios(){
        cy.request({
            url: urlUsuarios.URLS_SERVEREST_USUARIOS,
            method: 'GET',
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('quantidade')
            expect(response.body).to.not.be.empty
            expect(response.body.usuarios[1].nome).to.eql(fabricaUsuarios.body.nome)
        })
    }

    alterarUsuarioCadastrado(){
        cy.request({
            url: urlUsuarios.URLS_SERVEREST_USUARIOS,
            method: 'GET'
        }).then(response => {
            let idUsuario = response.body.usuarios[1]._id
            cy.request({
                url: urlUsuarios.URLS_SERVEREST_USUARIOS + '/' + idUsuario,
                method: 'PUT',
                body: 
                    fabricaUsuarios.bodyAlterado,
                failOnStatusCode: false
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eql("Registro alterado com sucesso")
            })
        })
    }

    excluirUsuarioCadastrado(){
        cy.request({
            url: urlUsuarios.URLS_SERVEREST_USUARIOS,
            method: 'GET',
            failOnStatusCode: false
        }).then((response) => {
            let idUsuario = response.body.usuarios[1]._id
            cy.request({
                url: urlUsuarios.URLS_SERVEREST_USUARIOS + '/' + idUsuario,
                method: 'DELETE'
            }).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eql("Registro excluído com sucesso")
            })
        })
    }
}

export default new Usuarios();