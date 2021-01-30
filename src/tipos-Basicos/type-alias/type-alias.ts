//alias
//Criar um apelido pra um tipo

//Tipos Criados por nós, letra maiuscula
//type alias
type Idade = number;//visando ficar mais legível o código

type Pessoa = {
    nome: string;
    idade : Idade;
    salario : number;
    corPreferida?:string;
};

//union-types
type CorRgb = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' |'Preto';
type CorPreferida = CorRgb | CorCMYK;

const pessoa : Pessoa = {
    nome: 'Vinicius',
    idade: 18,
    salario: 200,
}

export function setCorPreferida(pessoa : Pessoa, cor : CorPreferida) : Pessoa {
    return {
        ...pessoa, corPreferida : cor
    }
}

console.log(setCorPreferida(pessoa,'Preto'));
