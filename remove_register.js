const readline = require("readline-sync");

// função para excluir cadastro do livro
function excluir_cadastro(llivros) {
  let titulo_excluir;
  let livro_excluido = false;

  // inicio do loop principal
  do {
    // console.clear();
    loop_busca = true;
    do {
      try {
        let busca = readline.question(
          "\nInsira o nome do Autor ou Livro para fazer uma busca: "
        );

        if (!busca) {
          throw new Error("Erro! insira um valor");
        } else {
          const filterItems = (busca) => {
            return llivros.filter(
              (a) => a.nome.indexOf(busca) > -1 || a.autor.indexOf(busca) > -1
            );
          };

          let filtro = filterItems(busca);

          console.log("\n\t--RESULTADO DA BUSCA--");
          for (let a of filtro) {
            console.log(`\n-----------------------------------
              LIVRO: ${a.nome}
              GÊNERO: ${a.genero}
              PREÇO: R$ ${a.preco.toFixed(2)}
              AUTOR: ${a.autor}
              ANO DE PUBLICAÇÃO: ${a.anopubl}
              EDITORA: ${a.editora}
              ID: ${a.id}
              EDITORA: ${a.estoque}
              -----------------------------------
            `);
          }
          loop_busca = false;
        }
      } catch (error) {
        console.error(`\nErro: ${error.message}`);
      }
    } while (loop_busca);

    titulo_excluir = readline.question(
      "\nInforme o título do livro a ser excluido: "
    );
    // loop para percorrer a lista de objetos
    for (i = 0; i < llivros.length; i++) {// se o nome e o código inserido "baterem" com o nome e código cadastrado na lista de objetos
      
      if (llivros[i].nome == titulo_excluir) {// o objeto é retornado para que o usuário possa verificar se é esse mesmo que ele quer excluir  
        console.log(`\nLivro a ser excluido: 
          Nome: ${llivros[i].nome}
          genero: ${llivros[i].genero}
          preco: R$ ${llivros[i].preco.toFixed(2)}
          autor: ${llivros[i].autor}
          Ano de publicacao: ${llivros[i].anopubl}
          Editora: ${llivros[i].editora}
          Id: ${llivros[i].id}
          estoque: ${llivros[i].estoque}
        `);

        let loop_confimar_exclusao = false;
        do { // inicio do loop para verificar se o usuário realmente deseja excluir o cadastro do livro
          
          let confirmar_exclusao = readline.question(
            `\nTem certeza que deseja excluir o livro ${llivros[i].nome}? \n 1 - sim \n 2 - nao \n: `
          );
          
          if (confirmar_exclusao === "1") { // caso a resposta seja positiva ("1"), o livro é removido usando o método 'splice()'e sai do loop
            llivros.splice(i, 1);
            livro_excluido = true;
            loop_confimar_exclusao = true;
            console.log("\nExclusão concluida com sucesso");

          } else if (confirmar_exclusao === "2") { // caso seja negativa, sai do loop e segue para a pegunta se 'deseja excluir outro livro'
            livro_excluido = true;
            loop_confimar_exclusao = true;
            console.log("\nExclusão cancelada com sucesso.");
        
          } else { // caso o dado não for '1' ou '2', o usuário recebe uma resposta "dado invalido" e o loop volta para o começo da verificação
            console.log("Dado invalido!");
            loop_confimar_exclusao = false;
          }
        } while (!loop_confimar_exclusao);
      }
    }

    // condicional para verificar se o nome ou código inserido for inválido
    if (livro_excluido == false) {
      console.log("Nome do livro ou codigo invalido");
    } else {

      let loop_excluir_novo_cadastro = false;
      
      do {// loop para verificar se o usuário deseja excluir outro livro

        let excluir_novo_cadastro = readline.question(
          "\nDeseja excluir mais algum livro? \n 1 - sim \n 2 - nao \n: "
        );

        if (excluir_novo_cadastro === "1") { // caso a resposta seja positiva, encerra o loop de verificação(loop_excluir_novo_cadastro) e continua com o loop principal(livro_excluido)
          loop_excluir_novo_cadastro = false;
          livro_excluido = false;

        } else if (excluir_novo_cadastro === "2") { // caso a resposta seja negativa, encerra o loop de verificação e o loop principal.
          loop_excluir_novo_cadastro = false;
          livro_excluido = true;

        } else { // caso a resposta não for '1' ou '2' o usuário recebe uma resposta "Erro! dado invalido" e o loop volta para o começo da verificação
          console.log("Erro! dado invalido. ");
          loop_excluir_novo_cadastro = true;
        }
      } while (loop_excluir_novo_cadastro);
    }
  } while (livro_excluido === false);
}

module.exports = excluir_cadastro;
