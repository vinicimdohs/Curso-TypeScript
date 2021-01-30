//maneira antiga de fazer ou java.
// export class Pessoa {
//     constructor(
//         private nome:string,
//         private sobrenome : string,
//         private idade: number,
//         protected cpf :string){}

//         getCpf():string{
//             return this.cpf.replace(/\D/g,'');
//         }

//         setCpf(valor : string) : void {
//             this.cpf = valor;
//         }
// }
// pessoa.setCpf('123.456.789-90');
// console.log(pessoa.getCpf());
//NOVA MANEIRA JAVA SCRIPT/TYPE SCRIPT
export class Pessoa {
        constructor(
            private nome:string,
            private sobrenome : string,
            private idade: number,
            protected _cpf :string){

            }

            //cpf passa a ser um atributo da classe, onde
            //quando recebe algum valor ele é set, e quando
            //não recebe nada é get.
            set cpf(cpf : string){
                this._cpf = cpf;
            }
            get cpf() : string{
                return this._cpf.replace(/\D/g,'');
            }
}

const pessoa = new Pessoa('Vinicius','fernandes',21,'000.000');
pessoa.cpf = '123.456.789-90';
console.log(pessoa.cpf);
