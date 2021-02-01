type Veiculo = {
    marca: string;
    ano: string
};

type Car = {
//agora as chaves estão ligadas dinâmicamente pelo tipo;
    brand: Veiculo['marca'];
    year: Veiculo['ano'];
    name: string;
}

const carro:Car = {
    brand: 'ford',
    year: '2021',
    name: 'duster'
};

console.log('carro');
