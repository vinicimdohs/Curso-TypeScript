//Sempre tentar colocar o tipo do retorno de funções e metódos
//boas práticas!!!!

//Função ou método não retorna nada!!!!
function semRetorno(...args : string[]) : void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'fernandes',

    exibirNome() : void {
        console.log(this.nome + '' + this.sobrenome)
    }
}

semRetorno('vinicius','Fernandes','de','Paula');
pessoa.exibirNome();

export{ pessoa};
