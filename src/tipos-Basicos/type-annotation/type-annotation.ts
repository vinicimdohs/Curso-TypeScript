//Avisar para o ts o tipo da variável

//O ts infere o tipo string automaticamente.
let nome = 'Luiz';
//Tipos Báscios(ocorre a inferência de tipos) !!!redundante
let names : string = 'luiz';
let idade : number = 30 ;
let adulto : boolean = true;
let simbolo : symbol = Symbol('qualquer-symbol');
//let bif: bigint = 10n;

// Arrays
//Indicando que é um array de números
let arrayOfNumbers : Array<number> = [5,2,4];
let arrayDeNumeros: number[] = [5,2,4];

//Indicando que é um array de strings
let arrayOfStrings : Array<string> = ['amarula','zé gotinha','zabau'];
let arrayDeStrings : string[] = ['amarula','zé gotinha','zabau'];

//Objetos
//Indicando que é um objeto e dizendo quais são os tipos das suas chaves
// adulto? indica que não é obrigatório a chave adulto
let pessoa : {nome:string,idade:number , adulto? : boolean} = {
    nome: 'vinicius' ,
    idade: 20
}

//Funções
function soma(x : number,y:number) : number{
    return x+y;
}

const soma2 : (x:number , y:number) => number = (x,y) => x+y;


