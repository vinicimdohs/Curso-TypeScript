//super classe
export class Pessoa {
    constructor(
        public nome:string,
        public sobrenome : string,
        private idade: number,
        protected cpf :string){}

        getIdade():number {
            return this.idade;
        }

        getCpf():string{
            return this.cpf;
        }

        getNomeCompleto() : string {
            return this.nome + '' + this.sobrenome;
        }
}

//Sobrescrevendo métodos(polimorfismo)
//extend é a herança
export class Aluno extends Pessoa{
    //super : quando preciso adcionar atributos aos filhos
    constructor(
         nome:string,
         sobrenome : string,
         idade: number,
         cpf :string,
         public sala: string
         ){
             //acesso a superclasse
             super(nome,sobrenome,idade,cpf);
         }

    getNomeCompleto() : string {
        return 'Aluno :' +this.nome + ' ' + this.sobrenome;
    }
}
//Sobrescrevendo métodos(polimorfismo)
export class Cliente extends Pessoa{
    getNomeCompleto() : string {
        return 'Cliente :' +this.nome + ' ' + this.sobrenome;
    }
}

const aluno = new Aluno('Vinicius','Fernandes',21,'000.000.000-00','sala b');
const cliente = new Cliente('Livia','Brunelle',20,'0')

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

