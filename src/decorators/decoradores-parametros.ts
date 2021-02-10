function decorador(classPrototype:any , nomeMetodo:string| symbol,index : number) : any {
    console.log(classPrototype,nomeMetodo,index);
}
export class UmaPessoa{
    nome : string;
    sobrenome: string;
    idade : number;

    constructor(nome : string,sobrenome:string, idade : number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    metodo(@decorador msg : string): string {
        return `${this.nome} ${this.sobrenome} : ${msg}`
    }

    get nomeCompleto():string {
        return this.nome+ '' + this.sobrenome;
    }

    set nomeCompleto(valor:string){
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if(!primeiroNome) return;

        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}

const person = new UmaPessoa('vinicius','Fernandes',21);
const metodo = person.metodo('hello mundo');
console.log(metodo);
