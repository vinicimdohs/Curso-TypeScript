//TUPLE
//Um conjunto de tipos de um array
const dadosClietne1 : [number,string] = [1,'vinicius'];
const dadosClietne2 : readonly[number,string,string?] = [1,'vinicius'];
const dadosClietne3 : [number,string,...string[]] = [1,'vinicius','Fernandes'];


dadosClietne1[0] = 100;
dadosClietne1[1] = 'Vinicius';


console.log(dadosClietne1);

//readonly ARRAY
const array1 : readonly string[] = ['Vinicius','Fernandes'];
const array2 : ReadonlyArray<string> = ['Vinicius','Fernandes']
