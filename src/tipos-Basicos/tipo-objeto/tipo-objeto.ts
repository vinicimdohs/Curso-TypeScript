const objetoA : {
    readonly chaveA: string;//Não posso alterar mais
    chaveB: string;
    chaveC?: string;
    [key : string] : unknown;//Me permite criar mais chaves de tipos que eu não conheço
}= {
    chaveA : 'ValorA',
    chaveB : 'ValorB'
};

//objetoA.chaveA = 'A';
objetoA.chaveB = 'B';
objetoA.chaveC = 'C';
objetoA.chaveGenerica = 'generica';

console.log(objetoA);

