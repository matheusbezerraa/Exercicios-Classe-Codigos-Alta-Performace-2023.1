class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      const resultado = document.getElementById('resultado');
      resultado.textContent = `${this.nome} está latindo: Au au!`;
    }
  }
  
  const cachorro1 = new Cachorro("O cachorro");