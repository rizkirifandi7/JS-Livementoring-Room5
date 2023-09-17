class Segitiga {
    constructor(sisi1, sisi2, sisi3, alas, tinggi) {
        this.a = sisi1;
        this.b = sisi2;
        this.c = sisi3;
        this.alas = alas;
        this.tinggi = tinggi;
    }
}

class Luas extends Segitiga {
    constructor(alas, tinggi) {
        super();
        this.set = 1 / 2;
        this.alas = alas;
        this.tinggi = tinggi;
    }

    hitungLuas() {
        let hitung = this.set * this.alas * this.tinggi;
        return hitung;
    }
}

class Keliling extends Segitiga {
    constructor(sisi1, sisi2, sisi3) {
        super()
        this.a = sisi1;
        this.b = sisi2;
        this.c = sisi3;
    }
    hitungKeliling() {
        return this.a + this.b + this.c
    }
}
const menghitungl = new Luas(20, 20);
const menghitungkel = new Keliling(20, 20, 20);
console.log(menghitungl.hitungLuas());
console.log(menghitungkel.hitungKeliling());