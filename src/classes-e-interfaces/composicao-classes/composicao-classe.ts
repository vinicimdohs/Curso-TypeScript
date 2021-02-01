//Composição:Uma relação indispensável , como se fosse a relação carro e motor;
export class Carro{
    private readonly motor: Motor = new Motor();

    ligar(): void{
        this.motor.ligar();
    }

    acelerar(): void{
        this.motor.acelerar();
    }

    parar(): void{
        this.motor.parar();
    }

    desligar(): void{
        this.motor.desligar();
    }
}

export class Motor{
    ligar(): void{
        console.log('motor está ligado')
    }

    acelerar(): void{
        console.log('Motor está acelerando')
    }

    parar(): void{
        console.log('Motor está parando')
    }

    desligar(): void{
        console.log('Motor está desligado')
    }
}


const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();
