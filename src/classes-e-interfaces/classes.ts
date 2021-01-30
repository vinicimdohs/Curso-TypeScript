//forma verbosa
export class Empresa {
    public readonly nome : string;
    private readonly colaboradeores : Colaborador[] = [];
    protected readonly cnpj : string;

    constructor(nome: string,cnpj : string){
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adcionaColaborador(colaborador : Colaborador) : void{
        this.colaboradeores.push(colaborador)
    }

    mostrarColaboradores() : void {
        for(const colaborador of this.colaboradeores){
            console.log(colaborador);
        }
    }
}

//forma mais rápida
//Quando uma classe é criada, ela vira um tipo.
export class Colaborador {
    constructor(public readonly nome: string,public readonly sobrenome : string){}
}

const empresa1 = new Empresa('Vinicim','1233423');
const colaborador1 = new Colaborador('Livia','Brunelle');
const colaborador2 = new Colaborador('Pedro','fernandes');
const colaborador3 = new Colaborador('Fabiana','Fernandes');

empresa1.adcionaColaborador(colaborador1);
empresa1.adcionaColaborador(colaborador2);
empresa1.adcionaColaborador(colaborador3);
empresa1.adcionaColaborador({
    nome :'TEste',
    sobrenome : 'testando'
});

empresa1.mostrarColaboradores();
//console.log(empresa1);
//console.log(colaborador1);
