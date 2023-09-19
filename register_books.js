const readline = require("readline-sync");
var codigo_livro = 2;
//função de cadastro
function cadastro(llivros) {
  let loop_cadastrar_livro = true;
  do {
    let nome = readline.question("\nInforme o nome do livro: ");
    let genero = readline.question("Informe o genero do livro: ");
    let valor_correto = false;
    let preco;
    while (valor_correto == false) {
      try {
        preco = readline.question("Informe o preco do livro: ");
        // Tenta converter a entrada do usuário em um número
        preco = parseFloat(preco);
        // Mensagem de erro caso não seja um numero
        if (isNaN(preco)) {
          throw new Error(
            "Preço inválido. Certifique-se de inserir um numero válido."
          );
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`Erro: ${error.message}`);
      }
    }

    let autor = readline.question("Informe o autor do livro: ");
    let editora = readline.question("Informe o nome da editora do livro: ");
    let Anop;
    valor_correto = false;
    while (valor_correto == false) {
      try {
        Anop = readline.question("Informe o ano de publicacao do livro: ");
        // Tenta converter a entrada do usuário em um número
        Anop = parseInt(Anop);

        if (isNaN(Anop)) {
          throw new Error(
            "Ano inválido. Certifique-se de inserir um número válido."
          );
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`Erro: ${error.message}`);
      }
    }
    codigo_livro++;
    let estoque;
    valor_correto = false;
    while (valor_correto == false) {
      try {
        estoque = readline.question("Informe a quantidade em estoque: ");
        // Tenta converter a entrada do usuário em um número
        estoque = parseInt(estoque);

        if (isNaN(estoque)) {
          throw new Error(
            "Valor para estoque inválido. Certifique-se de inserir um número válido."
          );
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`Erro: ${error.message}`);
      }
    }
    let livroc = {
      nome: nome,
      genero: genero,
      preco: preco,
      autor: autor,
      anopubl: Anop,
      editora: editora,
      codigo_livro: codigo_livro,
      estoque: estoque,
    };
    llivros.push(livroc);

    console.log(`\nLivro cadastrado:
          Nome: ${livroc.nome}
          genero: ${livroc.genero}
          preco: R$ ${livroc.preco.toFixed(2)}
          autor: ${livroc.autor}
          Ano de publicacao: ${livroc.anopubl}
          Editora: ${livroc.editora}
          codigo do livro: ${livroc.codigo_livro}
          estoque: ${livroc.estoque}
          
          `);

    let validar_dado = true;
    do {
      let cadastrar_novo_livro = readline.question(
        "Deseja cadastrar novo livro? \n 1 - sim \n 2 - nao \n: "
      );
      if (cadastrar_novo_livro === "1") {
        loop_cadastrar_livro = true;
        validar_dado = false;
      } else if (cadastrar_novo_livro === "2") {
        loop_cadastrar_livro = false;
        validar_dado = false;
      } else {
        console.log("Erro! dado invalido. ");
        validar_dado = true;
      }
    } while (validar_dado);
  } while (loop_cadastrar_livro);
}

module.exports = cadastro;
