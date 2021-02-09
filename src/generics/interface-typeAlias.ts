//Generics pode ser feito uma analogia com funções, pois temos que passar parametros
//porém esses parametros são os tipos, como por ex temos o valor T e U, e passamos o tipo
//que vamos querer quando chamamos a interface;
interface PessoaProtocolo<T,U> {
    nome: T;
    sobrenome : T;
    idade:U;
}

const aluno : PessoaProtocolo<string , number> = {
    nome: 'Vinicius',
    sobrenome : 'Fernandes',
    idade:21,
}

const aluno2 : PessoaProtocolo<number,number> = {
    nome: 1,
    sobrenome: 2,
    idade: 3
}

console.log(`Aluno 1 :${aluno.nome} , Aluno 2 : ${aluno2.nome}`);
