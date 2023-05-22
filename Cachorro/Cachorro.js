/*
Alunos/Matriculas:
Matheus Freire Bezerra - 01524929
Felipe Portela - 01553362
Lucas Beijamin Oliveira de Arruda - 01525249
João Cordeiro Freitas - 01510527
Daniel Aragão - 01555320
Luiz Cristiano Apolinário - 01536154
*/

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