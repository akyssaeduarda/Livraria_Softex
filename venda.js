const readline = require("readline-sync");

function procurarLivro(nome, llivros) {
    let livro = null;
  for(i=0;i<llivros.length;i++){
    if (llivros[i].nome===nome){
        livro = llivros[i].nome
        break;
    }
  }
  return llivros[i]
}

function calcularValorTotal(carrinho) {
    let total = 0
    for(i=0; i<carrinho.length; i++){
        total += carrinho[i].quantidade*carrinho[i].preco
    }
  return total
}

function realizarVenda(llivros) {
  const carrinho = [];

  while (true) {
    let nomeLivro = readline.question("Qual livro será vendido? ");
    let livro = procurarLivro(nomeLivro, llivros);

    if (!livro) {
      console.log("Livro não encontrado no banco de dados.");
      continue;
    }

    console.log(`
    A quantidade em estoque do livro ${nomeLivro} é de ${livro.estoque} livros.
    Valor: R$ ${livro.preco}
    `);

    let quantidadeVendida;

    while (true) {
      quantidadeVendida = parseInt(readline.question("Quantos exemplares serão vendidos? "));

      if (isNaN(quantidadeVendida) || quantidadeVendida < 1 || quantidadeVendida > livro.estoque) {
        console.log(`Opção inválida. Informe um valor entre 1 e ${livro.estoque}.`);
      } else {
        break;
      }
    }

    livro.estoque -= quantidadeVendida;

    carrinho.push({
      nome: nomeLivro,
      quantidade: quantidadeVendida,
      preco: livro.preco
    });

    let continuar = readline.question("Deseja vender mais algum livro? Responda com 's' para sim e 'n' para nao: ");

    if (continuar !== 's') {
      console.log(`
      Encerrando venda.
      Resumo:`);

      for (let i = 0; i < carrinho.length; i++) {
        console.log(`
      ${i + 1}º livro: ${carrinho[i].nome}
      Quantidade: ${carrinho[i].quantidade}
      Valor: R$ ${carrinho[i].preco * carrinho[i].quantidade}`);
      }

      const valorTotal = calcularValorTotal(carrinho);
      console.log(`
      Valor Total da Compra: R$ ${valorTotal.toFixed(2)}
      Até a próxima venda!
      `);

      break;
    }
  }
}

module.exports = realizarVenda;
