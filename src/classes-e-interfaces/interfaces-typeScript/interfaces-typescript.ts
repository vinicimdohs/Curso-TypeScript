//Muito parecido com type alias.(criação de tipos e contratos)
//Foco da interface é objetos
interface TipoNome {
    nome:string;
};
interface TipoSobrenome {
   sobrenome: string;
};

interface TipoNomeCompleto {
   nomeCompleto() : string;
};

interface TipoPessoa extends TipoNome,TipoSobrenome,TipoNomeCompleto{};

export class Pessoa implements TipoPessoa{
   constructor(public nome:string,public sobrenome: string){}

    nomeCompleto() : string{
       return this.nome + " " + this.sobrenome
   };
}

const pessoa = new Pessoa('Vinicius','Fernandes');
console.log(pessoa.nomeCompleto());
