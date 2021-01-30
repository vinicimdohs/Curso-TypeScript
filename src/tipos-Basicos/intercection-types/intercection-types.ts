//Alternativa para union
type TemNome = {nome : string};
type TemSobrenome = {sobrenome : string};
type TemIdade = {idade : number};

//Usando union type , passa a idéia de ou
//Então os 3 atributos ficam opcionais
type Pessoa = TemNome | TemSobrenome | TemIdade;
const pessoa: Pessoa = {
    idade: 30 ,
    nome : 'luiz'
};
console.log('pessoa 1 :',pessoa);
//Porém Quando eu uso intercection-type,passa a ideia de E
//Então todos os tipos são obrigatórios.
type Pessoa2 = TemNome & TemSobrenome & TemIdade;
const pessoa2 : Pessoa2 = {
    nome : 'Vincius',
    sobrenome : 'Fernandes de Paula',
    idade : 21
}
console.log('pessoa 2 :',pessoa2);


export {pessoa};
