interface Smartphone {
    chiamata(minutiRicarica: number):void;
    404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void
}


class User implements Smartphone{
    carica: number;
    numeroChiamate: number;

    constructor(carica:number) {
        this.carica = carica;
        this.numeroChiamate = 0
    }
    chiamata(minutiRicarica:number):void {
        let costoChiamata = 0.20 * minutiRicarica;
        this.carica -= costoChiamata;
        this.numeroChiamate++
    }
    404(): number{
        return this.carica;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

//User 1
console.log("***USER 1***")
let user1 = new User (32)
console.log("Credito: ", user1[404]())
user1.chiamata(1)
user1.chiamata(4)
user1.chiamata(2)
console.log("Hai effettuato ", user1.getNumeroChiamate(), "chiamate",)
console.log("Credito corrente: ", user1[404]())
user1.azzeraChiamate()
console.log("RESET", user1.numeroChiamate)


//User 2
console.log("***USER 2***")
let user2 = new User (75)
console.log("Credito: ", user2[404]())
user2.chiamata(6)
user2.chiamata(3)
console.log("Hai effettuato", user2.getNumeroChiamate(), "chiamate",)
console.log("Credito corrente: ", user2[404]())
user2.azzeraChiamate()
console.log("RESET", user2.numeroChiamate)

//User 3
console.log("***USER 3***")
let user3 = new User (100)
console.log("Credito: ", user3[404]())
user3.chiamata(2)
user3.chiamata(17)
user3.chiamata(9)
user3.chiamata(14)
console.log("Hai effettuato", user3.getNumeroChiamate(), "chiamate",)
console.log("Credito corrente: ", user3[404]())
user3.azzeraChiamate()
console.log("RESET", user3.numeroChiamate)