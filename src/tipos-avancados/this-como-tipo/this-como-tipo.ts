//this polimorfico;
export class Calculadora{
    constructor(public numero : number){}

    //estou retornando a própria instância
    add(n:number): this {
        this.numero += n;
        return this;
    }

    sub(n:number): this {
        this.numero -= n;
        return this;
    }

    div(n:number): this {
        this.numero /= n;
        return this;
    }

    mul(n:number): this {
        this.numero *= n;
        return this;
    }
};

//o this agora é da subCalc
export class SubCalc extends Calculadora {
    pow(n: number): this{
        this.numero **=n;
        return this;
    }
}

const calc = new SubCalc(10);
//por estar usando o this, consigo fazer chamadas em cadeia
calc.add(5).mul(2).div(2).sub(5).pow(2);

console.log(calc);

//--------------------------------------------
//builder - gof
//aplicação real de tipagem de this
export class RequestBuilder{
    private method : 'get'| 'post' | null = null;
    private url : string| null = null;

    setMethod(method: 'get'| 'post') : this {
        this.method = method;
        return this;
    }

    setUrl(url: string) : this {
        this.url = url;
        return this;
    }

    send(): void {
        console.log(`Enviando dados via ${this.method} para ${this.url}`);
    }
};

const request = new RequestBuilder();//bulder
//chamadas em cadeia
request.setUrl('http://localhost').setMethod('post').send();
