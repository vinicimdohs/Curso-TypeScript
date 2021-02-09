//faço uma tipagem generica, de forma dinâmica
type FilterCallback<U> = (
    value : U,
    index? : number ,
    array? : U[],
) => boolean;

export function meuFilter<T>(array : T[],callbackfn : FilterCallback<T>) : T[]{
    const newArray = [];

    for(let i =0 ; i<array.length;i++){
        if(callbackfn(array[i])){
            newArray.push(array[i])
        }
    }

    return newArray;
}

const array = [1,2,3,4,5,6] ;

//funçao generica - ela aceita qualquer coisa.
const arrayFiltrado = meuFilter(array,(value) => value < 5);

console.log(arrayFiltrado);

//console.log(array.filter((value) => value < 5));
