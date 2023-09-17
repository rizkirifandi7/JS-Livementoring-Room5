class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    Luas() {
    return this.sisi * this.sisi;
    }
  
    Keliling() {
        return 4 * this.sisi;
    }
  }
  

  const persegi = new Persegi(8); 
  console.log("Luas Persegi:", persegi.Luas()); 
  console.log("Keliling Persegi:", persegi.Keliling()); 
  