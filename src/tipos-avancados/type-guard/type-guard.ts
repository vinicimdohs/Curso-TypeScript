export function add(a: unknown,b : unknown){
    //typeguard - verificação de tipo
    if(typeof a ==='number' && typeof b=== 'number') return a+b;

    return `${a}${b}`;
}

console.log(add(1,5));
console.log(add('a','b'));
//---------------------------------------------------
type Pessoa = {tipo : 'pessoa' ,nome: string};
type Animal = {tipo : 'animal',cor: string};
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
    tipo: 'pessoa' = 'pessoa';
    constructor (public nome: string){}
}

function mostraNome(obj : PessoaOuAnimal) : void{
    //typeguard - verificação de tipo
    //if('nome' in obj) console.log(obj.nome);
    //if(obj instanceof Aluno) console.log(obj.nome);//Verifica o tipo da instancia
    switch(obj.tipo){
        case 'pessoa' :
            console.log(obj.nome)
            return;
        case 'animal':
            console.log(obj.cor);
            return;
    }
}

mostraNome(new Aluno('Vinicius'));
mostraNome({tipo: 'animal' , cor : 'preto'});
