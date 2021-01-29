let x = 10;
x = 0b1010;

const y = 10;//tipo literal

let a:100;
a= 100;
//a=200;//não posso, pois a é do tipo 100

const person = {
    nome : 'Vinicius' as const,//nome é do tipo Vinicius,não muda
    sobrenome: 'Fernandes'
}

//Union-types com tipos-literais
//Alternativa para Enum
function escolherCor(cor : 'vermelho' | 'amarelo' | 'Azul') : string{
    return cor;
}
console.log(escolherCor('vermelho'));


