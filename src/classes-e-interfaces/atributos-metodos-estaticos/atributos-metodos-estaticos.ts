//static só pode ser acessado pela classe e não pela instância
export class Pessoa {
    //atributos estáticos
    static idadePadrao = 21;
    static cpfPadrao = '111.222.333-44'

    constructor(
        public nome:string,
        public sobrenome : string,
        public idade: number,
        public cpf :string){}

        //Não tem acesso pela instância, mas apenas pela classe
        static falaOi() : void {
            console.log('oi');
        }
        //factory method
        //ex de uso real de métodos estaticos
        static criaPessoa(nome: string , sobrenome : string) : Pessoa{
                                             //ex de uso de atributos estáticos
            return new Pessoa(nome,sobrenome ,Pessoa.idadePadrao , Pessoa.cpfPadrao)
        }
}
//pessoa é uma instância então, não tem acesso a um método static
const pessoa = new Pessoa('Vinicius','fernandes',21,'000.000');
//ex de uso real de métodos estaticos
const pessoa1 = Pessoa.criaPessoa('Livia','Brunelle');
//ex de uso real de atributos estáticos
console.log(Pessoa.idadePadrao,Pessoa.cpfPadrao);
console.log(pessoa1);
