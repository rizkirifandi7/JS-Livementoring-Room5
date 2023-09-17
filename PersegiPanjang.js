class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  // Menghitung luas
  hitungLuas() {
    return this.panjang * this.lebar;
  }
  
  // Menghitung keliling
  hitungKeliling() {
    return 2 * (this.panjang + this.lebar)
  }
}

const persegiPanjang = new PersegiPanjang(2,3)

console.log(`Keliling persegi panjang adalah: ${ persegiPanjang.hitungKeliling()}`)
console.log(`Luas persegi panjang adalah: ${ persegiPanjang.hitungLuas()}`)
