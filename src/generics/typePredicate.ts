//Sempre que o valor retornado for true, quer dizer que é um number
//predicate
export function isNumber(value: unknown) : value is number {
    return typeof value === 'number';
}

console.log(isNumber(3));
console.log(isNumber('3'));

export function soma<T>(...args:T[]) : number | null {
    const retorno = args.reduce((sum,value)=>{
        if(isNumber(sum) && isNumber(value)){
            return sum + value;
        }
        return sum;
    },0)

    return retorno;
}

//o primeiro valor inferido, vai para o T, nesse caso number.
console.log(soma(1,2,3));
