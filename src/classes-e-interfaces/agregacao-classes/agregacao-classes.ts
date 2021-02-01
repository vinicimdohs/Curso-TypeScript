export class Carrinhodecompras {
    private readonly produtos : Produto[] = [];

    inserirProduto(...produtos : Produto[]) : void{
        for(const produto of produtos){
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal() : number {
        return this.produtos.reduce((soma,produto)=> soma + produto.preco,0);
    }
}

export class Produto{
    constructor(public nome:string,public preco :number){}
}

const produto1 = new Produto('Blusa',49.9);
const produto2 = new Produto('short',50);
const produto3 = new Produto('blusdifri',100);

const carrinhodeCompras = new Carrinhodecompras();

carrinhodeCompras.inserirProduto(produto1,produto2,produto3);

console.log(carrinhodeCompras,carrinhodeCompras.valorTotal(),carrinhodeCompras.quantidadeProdutos());

