const readline = require("readline-sync");

function excluir_cadastro(llivros) {
  let titulo_excluir;
  let livro_excluido = false;
  do {
    titulo_excluir = readline.question(
      "Informe o título do livro a ser excluido: "
    );
    let verific_codigo_livro = readline.questionInt(
      "infome o codigo do livro a ser excluido: "
    );
    for (i = 0; i < llivros.length; i++) {
      if (
        llivros[i].nome == titulo_excluir &&
        llivros[i].codigo_livro == verific_codigo_livro
      ) {
        console.log(`\nLivro a ser excluido: 
          Nome: ${llivros[i].nome}
          genero: ${llivros[i].genero}
          preco: R$ ${llivros[i].preco.toFixed(2)}
          autor: ${llivros[i].autor}
          Ano de publicacao: ${llivros[i].anopubl}
          Editora: ${llivros[i].editora}
          codigo do livro: ${llivros[i].codigo_livro}
          estoque: ${llivros[i].estoque}
        `);

        let loop_confimar_exclusao = true;
        do {
          let confirmar_exclusao = readline.question(
            "\nTem certeza que deseja excluir o livro? \n 1 - sim \n 2 - nao \n: "
          );
          if (confirmar_exclusao === "1") {
            llivros.splice(i, 1);
            livro_excluido = true;
            console.log("\nExclusão concluida com sucesso");
            loop_confimar_exclusao = false
            break;
          } else if (confirmar_exclusao === "2") {
            console.log("\nExclusão cancelada com sucesso.");
            livro_excluido = true;
            loop_confimar_exclusao = false
            break;
          }else{2
            console.log("Dado invalido!");
            loop_confimar_exclusao = true
          }
        } while (loop_confimar_exclusao);
      }
    }
    if (livro_excluido == false) {
      console.log("Nome do livro ou codigo invalido");
    } else {
      let loop_excluir_novo_cadastro = false;
      do {
        let excluir_novo_cadastro = readline.question(
          "\nDeseja excluir mais algum livro? \n 1 - sim \n 2 - nao \n: "
        );
        if (excluir_novo_cadastro === "1") {
          loop_excluir_novo_cadastro = false;
          livro_excluido = false;
        } else if (excluir_novo_cadastro === "2") {
          loop_excluir_novo_cadastro = false;
          livro_excluido = true;
        } else {
          console.log("Erro! dado invalido. ");
          loop_excluir_novo_cadastro = true;
        }
      } while (loop_excluir_novo_cadastro);
    }
  } while (livro_excluido === false);
}

module.exports = excluir_cadastro;
