//Array<T> - T[]
//Duas formas de inferir o tipo
function multiplicaArgs(...args : Array<number>) : number{
    return args.reduce((ac,valor)=> ac*valor,1);
}

function concatenaString(...args : string[]) : string{
    return args.reduce((ac,valor)=> ac + valor);
}

//Falando que o tipo de retorno da função é um array de string
function elevaCaracter(...args : string[]) : string[] {
    return args.map((valor)=> valor.toUpperCase());
}


const result = multiplicaArgs(1,2,3);
const concat = concatenaString('1','2','3');
const uper = elevaCaracter('vinicius','fernandes','de' , ' Paula');

console.log(result);
console.log(concat);
console.log(uper);

