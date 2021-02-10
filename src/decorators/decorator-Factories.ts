interface Constructor {
    new (...args:any[]) : any;
}

//Eu consigo decorar um decorador se nescessário.
@outroDecorator//2
@inverteNomeEcor('Valor1','Valor2')//1
export class Animal{
    constructor(public nome:string,public cor : string){}
}

//Neste momento minha função está fngindo ser o decorator
//Serve para passar parametro para dentro do decorador
function inverteNomeEcor(param1: string , param2:string){
    return function <T extends Constructor>(target : T) : T{
        return class extends target{
            cor: string;
            nome:string;
            constructor(...args: any[]){
                super(...args);
                this.nome = args[0].split('').reverse().join('') + param1;
                this.cor = args[1].split('').reverse().join('') + param2;
            }
        };
    }
}

function outroDecorator(target : Constructor){
    console.log('Sou o outro decorator');
}

const animal = new Animal('vinicius','roxo');
console.log(animal);
