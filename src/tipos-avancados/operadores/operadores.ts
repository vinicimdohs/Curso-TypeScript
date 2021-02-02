//Encadeamente opcional e Operador de coalescência nula(null,undefined)

type Documento = {
    titulo : string;
    texto : string;
    data? : Date;
};

const documento :Documento= {
    titulo : 'Titulo',
    texto:'Texto',
    //data: new Date(),
};

//Encadeamento opcional
//console.log(documento.data?.toDateString());
//Encadeamento opcional + coalescência nula
console.log(documento.data?.toDateString() ?? 'Não existe data');
//coalecencia nula
console.log(null ?? 'não existe')//atua
console.log(undefined ?? 'não existe')//atua
console.log(false ?? 'não existe')//não atua pois false é um valor


