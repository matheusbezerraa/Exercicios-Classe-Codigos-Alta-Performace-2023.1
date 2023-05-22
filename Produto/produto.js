/*
Alunos/Matriculas:
Matheus Freire Bezerra - 01524929
Felipe Portela - 01553362
Lucas Beijamin Oliveira de Arruda - 01525249
João Cordeiro Freitas - 01510527


*/

class Produto {
    constructor(nome, descricao, preco) {
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
    }
  
    aumentarPreco(valor) {
      this.preco += valor;
    }
  }
  
  function aumentarPreco() {
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const aumento = parseFloat(document.getElementById('aumento').value);
  
    const produto1 = new Produto(nome, descricao, preco);
    produto1.aumentarPreco(aumento);
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Novo preço do produto: R$${produto1.preco.toFixed(2)}`;
  }