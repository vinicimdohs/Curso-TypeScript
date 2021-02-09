//Quando o generico é muito amplo
//Nesse caso extends funciona como restrição
type ObterChaveFn = <O,K extends keyof O>(objeto : O,chave:K) => O[K];

const obterchave : ObterChaveFn = (objeto,chave) => objeto[chave];

const animal = {
    cor: 'pardo',
    vacinas : ['vacina 1', 'vacina2']
}

const vacinas = obterchave(animal , 'vacinas');
const cor = obterchave(animal,'cor');

console.log(vacinas , cor);
