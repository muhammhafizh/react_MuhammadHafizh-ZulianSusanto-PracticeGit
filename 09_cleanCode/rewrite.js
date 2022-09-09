class kendaraan {
    constructor(){
        this.jumlahRoda = 0
        this.kecepatanPerJam = 0
    }
}

class mobil extends kendaraan {
    constructor() {
        super(...arguments)
    }

    tambahKecepatan(num){
        this.kecepatanPerJam += num
    }

    berjalan() {
        this.tambahKecepatan(10)
    }

}

let mobilCepat = new mobil()
mobilCepat.berjalan()
mobilCepat.berjalan()
mobilCepat.berjalan()
console.log("Kecepatan mobil cepat " +mobilCepat.kecepatanPerJam+ " KM/JAM")

let mobilLambat = new mobil()
mobilLambat.berjalan()
console.log("Kecepatan mobil lambat " +mobilLambat.kecepatanPerJam+ " KM/JAM")