class segitiga {
    constructor(sisi1, sisi2, sisi3, alas, tinggi) {
        this.a = sisi1;
        this.b = sisi2;
        this.c = sisi3;
        this.alas = alas;
        this.tinggi = tinggi;
    }
}

class luas extends segitiga {
    constructor(alas, tinggi) {
        super(); 
        this.set = 1/2;
        this.alas = alas; 
        this.tinggi = tinggi; 
    }

    hitungluas() {
        let hitung = this.set * this.alas * this.tinggi;
        return hitung;
    }
}
 class keliling extends segitiga {
    constructor(sisi1, sisi2, sisi3) {
        super()
        this.a = sisi1;
        this.b = sisi2;
        this.c = sisi3;
    }
    hitungkeliling() {
        return this.a + this.b + this.c
    }
 }
const menghitungl = new luas(20, 20);
const menghitungkel = new keliling(20, 20, 20);
console.log(menghitungl.hitungluas());
console.log(menghitungkel.hitungkeliling());
