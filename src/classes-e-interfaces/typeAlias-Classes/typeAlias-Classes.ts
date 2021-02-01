//Método alternativo para classes abstratas
//Tipando a classe.
//todos os atributos e métodos ficam públicos.
type TipoNome = {
     nome:string;
};
type TipoSobrenome = {
    sobrenome: string;
};

type TipoNomeCompleto = {
    nomeCompleto() : string;
};

//Consigo implementar quantos tipos eu quiser em uma classe
export class Pessoa implements TipoNome,TipoSobrenome,TipoNomeCompleto{
    constructor(public nome:string,public sobrenome: string){}

     nomeCompleto() : string{
        return this.nome + " " + this.sobrenome
    };
}

const pessoa = new Pessoa('Vinicius','Fernandes');
console.log(pessoa.nomeCompleto());

