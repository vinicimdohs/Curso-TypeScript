//Um objeto que finge ser um objeto real;
//Pode editar,adcionar
@decorator
export class Animal{
    constructor(public nome:string,public cor : string){}
}

function decorator<T extends new(...args: any[]) => any>(target : T) : T{
    return class extends target{
        cor: string;
        nome:string;
        constructor(...args: any[]){
            super(...args);
            this.nome = args[0].split('').reverse().join('');
            this.cor = args[1].split('').reverse().join('');
        }
    };
}


const animal = new Animal('vinicius','roxo');

console.log(animal);
