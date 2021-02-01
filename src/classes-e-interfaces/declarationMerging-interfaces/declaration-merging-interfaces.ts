//As duas interfaces são unidas, em uma maior
interface Pessoa{
    nome:string;
}
interface Pessoa{
    sobrenome: string;
};
interface Pessoa{
    idade?:number
}

const pessoa1 : Pessoa = {
    nome : 'Vinicius',
    sobrenome : 'Fernandes'
}

const pessoa2 : Pessoa = {
    nome:'livia',
    sobrenome: 'brunelle',
    idade : 20
}

console.log(pessoa1);
