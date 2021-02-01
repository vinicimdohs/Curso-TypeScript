//typeof - inferindo o tipo dinamicamente
type CoresObj = typeof coresObj;
//keyof - inferindo as chaves dinamicamente
type CoresChaves = keyof CoresObj;

const coresObj = {
    vermelho : ' red' ,
    verde : 'green',
    azul : 'blue'
};
//aplicando as chaves e os tipos dinamicos
function traduzirCor(cor : CoresChaves, cores: CoresObj){
    return cores[cor];
}

console.log(traduzirCor('vermelho',coresObj));
