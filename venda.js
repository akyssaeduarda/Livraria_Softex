const readline = require("readline-sync");

function procurarLivro(nome, llivros) { //função para procurar o nome inserido pelo usuário na lista de objetos 
  let livro = null;
  for(i=0;i<llivros.length;i++){ //loop para percorrer a lista 
    if (llivros[i].nome===nome){ //consicional para verificar se o nome inserido é igual o da lista de objetos
        livro = llivros[i].nome  // caso seja verdadeiro, a variavel 'livro' recebe o nome da lista de objeos acessada  
        break;
    }
  }
  return llivros[i] 
}

function calcularValorTotal(carrinho) { //recebe a lista'carrinho'
    let total = 0
    for(i=0; i<carrinho.length; i++){
        total += carrinho[i].quantidade*carrinho[i].preco //calculando o total da venda 
    }
  return total
}
function templateVendas() {
  console.log("\n----------------------------------");
    console.log("\tREALIZAR UMA VENDA");
    console.log("----------------------------------");
}
// função principal 
function realizarVenda(llivros, red, reset, green, purple) {
  templateVendas() 
  const carrinho = [];
  while (true) {
    let nomeLivro = readline.question(reset+"\n- Qual livro sera vendido? ").toLowerCase();
    let livro = procurarLivro(nomeLivro, llivros); 
    //realizando a chamada da função 'procurar livros' e passando como o parametro o nome inserido pelo usuário e a lista de objetos

    if (!livro) { //caso o valor da variavel 'livro' for um array vazio('falsy'), será exibido uma mensagem de erro para o usuário
      console.log(red + "\nErro! Livro não encontrado no banco de dados.");
      continue;
    }else if(llivros[i].estoque==0){
      console.log(red +"\nEste livro não há exemplares disponíveis.")
      continue;
    }

    console.log(` 
    A quantidade em estoque do livro ${nomeLivro} é de ${livro.estoque} livros.
    Valor: R$ ${livro.preco}`); // exibe no console o nome do livro, a quantidade no estoque e o valor.

    let quantidadeVendida;

    while (true) { //loop para verificar a quantidade de exemplares a serem vendidos
      quantidadeVendida = parseInt(readline.question(reset+"\n- Quantos exemplares serao vendidos? "));

      if (isNaN(quantidadeVendida) || quantidadeVendida < 1 || quantidadeVendida > livro.estoque) { //verifica se o dado inserido não é um número ou menor que 1 ou maior que a quatidade do estoque
        console.log(`\n${red}Opção inválida. Informe um valor entre 1 e ${livro.estoque}.`); 
      } else {
        break;
      }
    }

    livro.estoque -= quantidadeVendida; //diminui a quantidade do estoque 

    carrinho.push({ // inserido um objeto(livro vendido) na lista 'carrinho'
      nome: nomeLivro,
      quantidade: quantidadeVendida,
      preco: livro.preco
    });

    let continuar = readline.question("\n- Deseja vender mais algum livro? Responda com 's' para sim e 'n' para nao: ");

    if (continuar !== 's') { 
      console.log(`
      Encerrando venda.
      Resumo:`);

      for (let i = 0; i < carrinho.length; i++) { //loop para listar todos os objetos dentro da lista 'carrinho'
        console.log(`
      ${i + 1}º livro: ${carrinho[i].nome}
      Quantidade: ${carrinho[i].quantidade}
      Valor: R$ ${carrinho[i].preco * carrinho[i].quantidade}`);
      }

      const valorTotal = calcularValorTotal(carrinho); //chamando a função para calcular o total da venda
      console.log(`
      Valor Total da Compra: R$ ${valorTotal}
      ${green}Até a próxima venda!${reset}
      `);

      sair = readline.keyIn("\nPRESSIONE QUALQUER TECLA PARA O MENU...")

      break;
    }
  }
}

module.exports = realizarVenda;
