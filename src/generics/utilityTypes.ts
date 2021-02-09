//Record
const objeto1 : Record<string,string | number> = {
    nome: 'Vinicius',
    sobrenome: 'Fernandes',
    idade : 20
}
console.log(objeto1)

type PessoaProtocol = {
    nome?:string;
    sobrenome?: string;
    idade?: number;
}
//Required
//Transforma tudo que não é opcional para required.
type PessoaRequired = Required<PessoaProtocol> ;
//Partial
//Transforma tudo que é requerido em opcional
type PessoaPartial = Partial<PessoaRequired>
//ReadOnly
//Transforma tudo em readOnly
type PessoaReadOnly = Readonly<PessoaRequired>;
//Pick
//Escolha oque quero utilizar de dentro do objeto
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2 : PessoaRequired = {
    nome: 'Vinicius',
    sobrenome: 'Fernandes',
    idade : 20
}

console.log(objeto2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC,CDE>;
type TipoExtract = Extract<ABC,CDE>;

//
type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
}

type AccountApi = Pick<AccountMongo,Exclude<keyof AccountMongo, '_id'>> & {
    id : string;
};

const accountMongo : AccountMongo = {
    _id:'asdasdsad',
    nome: 'Vinicius',
    idade: 21
};

function mapAccount(accountMongo: AccountMongo) : AccountApi{
    const {_id,...accountData} = accountMongo;
    return {...accountData,id : _id};
}

const accountApi = mapAccount(accountMongo);
console.log('api');
console.log(accountApi);
export default 1;
