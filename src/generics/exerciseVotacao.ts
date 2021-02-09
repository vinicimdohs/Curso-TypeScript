type VotationOption = {
    numberOfvotes: number;
    option: string;
};

export class Votation{
    private _votationOptions : VotationOption[] = [];
    constructor(public details : string){}

    addVotationOption(votationOption : VotationOption) : void {
        this._votationOptions.push(votationOption);
    }

    vote(votationIndex : number) : void {
        if(!this._votationOptions[votationIndex]) return;

        this._votationOptions[votationIndex].numberOfvotes += 1;
    }

    get votationOptions(): VotationOption[]{
        return this._votationOptions;
    }
}

export class VotationApp {
    private votations : Votation[] = [];

    addVotation(votation : Votation) : void {
        this.votations.push(votation);
    }

    showVotations(): void {
        for(const votation of this.votations){
            console.log(votation.details);
            for(const votationOption of votation.votationOptions){
                console.log(votationOption.option , votationOption.numberOfvotes);
            }
            console.log('###');
            console.log(' ');
        }
    }
}

const votation = new Votation('Qual sua linguagem de programação favorita ?');
votation.addVotationOption({option: 'Pyton' , numberOfvotes: 0})
votation.addVotationOption({option: 'JavaScript' , numberOfvotes: 0})
votation.addVotationOption({option: 'typeScript' , numberOfvotes: 0})
votation.vote(1);
votation.vote(2);
votation.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation);

votationApp.showVotations();
