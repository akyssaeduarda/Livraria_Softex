const readline = require("readline-sync");

// função para excluir cadastro do livro
function excluir_cadastro(llivros, red, reset, green, purple ) {
  // inicio do loop principal
  let loop_excluir_cadastro = true,
  achou_livro = false;
  do {
    templateRemove() //tamplate string 
    fazerUmaBusca(); //função para chamar a busca
    do {
      //loop de exclusão
      try {
        let titulo_excluir = readline.question(
          `\n${reset}- Informe o titulo do livro a ser excluido: `
        ).toLowerCase();
        // loop para percorrer a lista de objetos
        for (i = 0; i < llivros.length; i++) {
          // se o nome e o código inserido "baterem" com o nome e código cadastrado na lista de objetos
         
          if (llivros[i].nome == titulo_excluir) {
            // o objeto é retornado para que o usuário possa verificar se é esse mesmo que ele quer excluir
            console.log(purple + " \n\t-- LIVRO A SER EXCLUIDO --\n"); 
            console.log(`\t${reset}LIVRO: ${llivros[i].nome}`);
            console.log(`\tGÊNERO: ${llivros[i].genero}`);
            console.log(`\tPREÇO: R$ ${llivros[i].preco.toFixed(2)}`);
            console.log(`\tAUTOR: ${llivros[i].autor}`);
            console.log(`\tANO DE PUBLICAÇÃO: ${llivros[i].anopubl}`);
            console.log(`\tEDITORA: ${llivros[i].editora}`);
            console.log(`\tID: ${llivros[i].id}`);
            console.log(`\tESTOQUE: ${llivros[i].estoque}`);

            do {
              // inicio do loop para verificar se o usuário realmente deseja excluir o cadastro do livro
              let confirmar_exclusao = readline.question(
                `\n- Tem certeza que deseja excluir o livro ${llivros[i].nome}? \n 1 - sim \n 2 - nao \n: `
              );

              if (confirmar_exclusao === "1") {
                // caso a resposta seja positiva ("1"), o livro é removido usando o método 'splice()'e sai do loop
                llivros.splice(i, 1);
                console.log(`\n${green}Exclusão CONCLUIDA com sucesso`);
                achou_livro = true;
                break;
              } else if (confirmar_exclusao === "2") {
                // caso seja negativa, sai do loop e segue para a pegunta se 'deseja excluir outro livro'
                console.log(`\n${green}Exclusão CANCELADA com sucesso.`);
                achou_livro = true;
                break;
              } else {
                // caso o dado não for '1' ou '2', o usuário recebe uma resposta "dado invalido" e o loop volta para o começo da verificação
                console.log(`${red}Dado invalido!`);
                achou_livro = true
              }
            } while (true);
          }
        }
        if(achou_livro === false){
          throw new Error("Nome do livro invalido");
        }
        break;
      } catch (error) {
        console.error(`\n${red} Erro: ${error.message}`);
      }
    } while (true);

    do {
      // loop para verificar se o usuário deseja excluir outro livro
      let excluir_novo_cadastro = readline.question(
        `\n${reset}- Deseja excluir mais algum livro? \n 1 - sim \n 2 - nao \n: `
      );

      if (excluir_novo_cadastro === "1") {
        // caso a resposta seja positiva, encerra o loop de verificação(loop_excluir_cadastro) e continua com o loop principal(livro_excluido)
        loop_excluir_cadastro = true;
        achou_livro = false
        console.clear()
        break
      } else if (excluir_novo_cadastro === "2") {
        // caso a resposta seja negativa, encerra o loop de verificação e o loop principal.
        sair = readline.keyIn("PRESSIONE QUALQUER TECLA PARA O MENU...")
        loop_excluir_cadastro = false;
        console.clear()
        break
      } else {
        // caso a resposta não for '1' ou '2' o usuário recebe uma resposta "Erro! dado invalido" e o loop volta para o começo da verificação
        console.log(`${red}Erro! dado invalido. `);
      }
    } while (true);
    
  } while (loop_excluir_cadastro);

  function fazerUmaBusca() {
    loop_busca = true;
    do {
      //loop para fazer uma busca
      try {
        let busca = readline.question(
          `\n${reset}- Digite o nome do autor ou livro para buscar: `
        ).toLowerCase();
        if (!busca) {
          throw new Error("O valor fornecido não pode ser nulo.");
        }else {
          const filterItems = (busca) => {
            return llivros.filter(
              (a) => a.nome.indexOf(busca) > -1 || a.autor.indexOf(busca) > -1
            );
          };
          let filtro = filterItems(busca);
          if(filtro.length === 0){
            throw new Error("autor e/ou livro não encontrado no banco de dados");
          }
          console.log("\n\t-- RESULTADO DA BUSCA --\n");
          for (let a of filtro) {
            console.log(`\tLIVRO: ${a.nome}`);
            console.log(`\tGÊNERO: ${a.genero}`);
            console.log(`\tPREÇO: R$ ${a.preco.toFixed(2)}`);
            console.log(`\tAUTOR: ${a.autor}`);
            console.log(`\tANO DE PUBLICAÇÃO: ${a.anopubl}`);
            console.log(`\tEDITORA: ${a.editora}`);
            console.log(`\tID: ${a.id}`);
            console.log(`\tESTOQUE: ${a.estoque}`);
            console.log(`-----------------------------------`);
          }
          loop_busca = false;
        }
      } catch (error) {
        console.error(`\n${red} Erro: ${error.message}`);
      }
    } while (loop_busca);
  }
  function templateRemove() {
    console.log(`\n
    ---------------------------------------
                EXCLUIR CADASTRO 
    ---------------------------------------
    `);
  }
}

module.exports = excluir_cadastro;
