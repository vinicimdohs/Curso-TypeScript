//Personagem não pode mais ser instanciado;
export abstract class Personagem {
    protected abstract emoji : string;
    constructor(
        protected nome:string ,
        protected ataque : number,
        protected vida : number){}

        atacar(personagem : Personagem) : void {
            this.bordao();
            personagem.perderVida(this.ataque);
        }

        perderVida(forcaAtaque : number) : void {
            this.vida -= forcaAtaque;
            console.log(`${this.nome} agora tem ${this.vida} de vida ...`);
        }

        //estou afirmando que todas as classes que extenderem
        //precisam ter esse método criado
        abstract bordao() : void ;
}

class Guerreira extends Personagem{
    protected emoji = '\u{1F9DD}';

    bordao() : void {
        console.log(this.emoji + 'Guerreira do balacobaco');
    }
};

class Monstro extends Personagem{
    protected emoji = '\u{1F9DF}';
    bordao() : void {
        console.log(this.emoji +'Monstrão babalu');
    }
};

const guerreira = new Guerreira('guerreira',100,1000);
const monstro = new Monstro('Monstro',87,1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
