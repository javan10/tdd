
export class bdUsuarioFake {
    constructor(){
        this.dadosUsuarios = [
            {
              "_key": "398012",
              "usuario": "usuario130",
              "nome": "usuario130",
              "email": "outro@gmail.com"
            },
            {
              "_key": "399256",
              "usuario": "novoalterado1",
              "nome": "novoalterado1",
              "email": "email@emailalterado"
            },
            {
              "_key": "420693",
              "usuario": "usuario",
              "nome": "joao",
              "email": "jao@gmail.com"
            },
          ]
    }

    pesquisarUsuario(_keyUsuario){
        return this.dadosUsuarios.find((usu) => {
            return usu._key === _keyUsuario;
        });
    }

    adicionarUsuario(usuario){
        usuario._key;
        usuario._key= Math.floor((Math.random() * 100000) + 1);
        this.dadosUsuarios = [...this.dadosUsuarios, usuario];
        return usuario;
    }
    
    adicionarVariosUsuarios(arrayUsuarios){
        arrayUsuarios = arrayUsuarios.map(usu =>{
            usu._key;
            usuario._key= Math.floor((Math.random() * 100000) + 1);
        });
        this.dadosUsuarios = [...this.dadosUsuarios, ...arrayUsuarios];
        return arrayUsuarios;
    }

    removerUsuario(_keyUsuario){
        this.dadosUsuarios = this.dadosUsuarios.filter((usu) => {
            return usu._key !== _keyUsuario;
        });
    }

    atualizarUsuario(usuario){
        this.dadosUsuarios = this.dadosUsuarios.filter((usu) => {
            return usuario._key === usu._key?
                usuario : usu 
        });
        return usuario;
    }

    atualizarVariosUsuario(arrayUsuarios){
        this.dadosUsuarios = this.dadosUsuarios.filter((usu) => {
            const usuario = arrayUsuarios.find(u => u._key === usu._key);
            return usuario? usuario: usu
        })
    }

    static get dadosUsuarios () {
        /* return [
        {
          "_key": "398012",
          "usuario": "usuario130",
          "nome": "usuario130",
          "email": "outro@gmail.com"
        },
        {
          "_key": "399256",
          "usuario": "novoalterado1",
          "nome": "novoalterado1",
          "email": "email@emailalterado"
        },
        {
          "_key": "420693",
          "usuario": "usuario",
          "nome": "joao",
          "email": "jao@gmail.com"
        },
        / *{
          "_key": "420696",
          "usuario": "usuario120",
          "nome": "usuario120",
          "email": "outro@gmail.com"
        },
        {
          "_key": "420722",
          "usuario": "usuario110",
          "nome": "usuario110",
          "email": "jao@gmail.com"
        },
        {
          "_key": "420725",
          "usuario": "usuario100",
          "nome": "usuario100",
          "email": "outro@gmail.com"
        },
        {
          "_key": "420835",
          "usuario": "usuario90",
          "nome": "joao",
          "email": "jao@gmail.com"
        },
        {
          "_key": "420839",
          "usuario": "usuario80",
          "nome": "usuario80",
          "email": "outro@gmail.com"
        },
        {
          "_key": "421332",
          "usuario": "usuario70",
          "nome": "usuario70",
          "email": "jao@gmail.com"
        },
        {
          "_key": "421335",
          "usuario": "usuario60",
          "nome": "usuario60",
          "email": "outro@gmail.com"
        },
        {
          "_key": "421371",
          "usuario": "usuario50",
          "nome": "usuario50",
          "email": "jao@gmail.com"
        },
        {
          "_key": "421374",
          "usuario": "usuario140",
          "nome": "usuario140",
          "email": "outro@gmail.com"
        },
        {
          "_key": "397792",
          "usuario": "usuario150",
          "nome": "usuario150",
          "email": "email@email"
        },
        {
          "_key": "397831",
          "usuario": "usuario30",
          "nome": "usuario30",
          "email": "email@email"
        },
        {
          "_key": "421423",
          "usuario": "usuario20",
          "nome": "usuario20",
          "email": "outro@gmail.com"
        },
        {
          "_key": "421420",
          "usuario": "usuario10",
          "nome": "usuario10",
          "email": "jao@gmail.com"
        }* /
      ]*/
    }
      
}