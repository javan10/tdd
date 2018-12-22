import { expect } from 'chai';

import { bdUsuarioFake } from './bdUsuariosFake'

describe('Usuario',()=>{

    let usuarioFake = {};

    beforeAll(() =>{
       usuarioFake  = new bdUsuarioFake();
    });
    
    describe('CRUD',()=>{
        it('deveria retornar um usuário pela key',() => {
            const _keyUsuario = "398012";
            const usuarioTeste = {
                "_key": "398012",
                "usuario": "usuario130",
                "nome": "usuario130",
                "email": "outro@gmail.com"
              }
            expect(usuarioTeste).to.deep.equal(usuarioFake.pesquisarUsuario(_keyUsuario));  
        });
    });    

})

