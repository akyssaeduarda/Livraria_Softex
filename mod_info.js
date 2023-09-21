const readline = require("readline-sync");

//função para modificar as informações dos livros
function mod_inf(llivros) {
    let modificando_info = true;
  
    do {
      let livro_modificado;
      let livro_encontrado = false;
      let nome = readline.question("Qual o nome do livro? ");
        
      //procurar o livro informado
      for (const a of llivros) {
        if (nome === a.nome) {
          livro_encontrado = true;
          console.log(`Livro encontrado!
          1 - Nome: ${a.nome}
          2 - genero: ${a.genero}
          3 - preco: ${a.preco}
          4 - autor: ${a.autor}
          5 - Ano de publicacao: ${a.anopubl}
          6 - Editora: ${a.editora}
            - ID: ${a.id}
          7 - estoque: ${a.estoque}
          `);
          livro_modificado = a;
          let loop_opcao = false;
          
          // escolher informacao que ira modificar
          do {
            let mod = readline.question("Qual opcao deseja modificar? ");
            switch (mod) {
              case "1":
                loop_opcao = true;
                let nnome = readline.question("Informe o novo nome: ");
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.nome = nnome;
                  }
                }
                break;
  
              case "2":
                loop_opcao = true;
                let genero = readline.question("Informe o novo genero: ");
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.genero = genero;
                  }
                }
                break;
              case "3":
                loop_opcao = true;
                let preco = readline.question("Informe o novo preco: ");
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.preco = preco;
                  }
                }
                break;
  
              case "4":
                loop_opcao = true;
                let autor = readline.question("Informe o novo autor: ");
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.autor = autor;
                  }
                }
                break;
  
              case "5":
                loop_opcao = true;
                let anopubl = readline.question(
                  "Informe o novo ano de publicacao: "
                );
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.anopubl = anopubl;
                  }
                }
                break;
  
              case "6":
                loop_opcao = true;
                let editora = readline.question(
                  "Informe o novo nome da editora: "
                );
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.editora = editora;
                  }
                }
                break;

              case "7":
                loop_opcao = true;
                let estoque = readline.question("Informe o novo estoque: ");
                for (const a of llivros) {
                  if (nome === a.nome) {
                    a.estoque = estoque;
                  }
                }
                break;
              default:
                loop_opcao = false;
                console.log(
                  "Erro, dado inválido. Por favor, insira um valor de 1 a 7"
                );
                break;
            }
          } while (loop_opcao === false);

          // exibindo o livro modificado
          console.log(`Livro modificado:
              Nome: ${livro_modificado.nome}
              genero: ${livro_modificado.genero}
              preco: R$ ${livro_modificado.preco}
              autor: ${livro_modificado.autor}
              Ano de publicacao: ${livro_modificado.anopubl}
              Editora: ${livro_modificado.editora}
              Id: ${livro_modificado.id}
              estoque: ${livro_modificado.estoque}
          `);
          
          let loop_continuar_modificando = false;
          // loop para verificar se o usuário deseja modificar mais algum livro
          do {
            let continuar_modificando = readline.question("\nDeseja modificar mais algum livro? \n 1 - sim \n 2 - nao \n: ");
            if (continuar_modificando === "1") {
              loop_continuar_modificando = true;
            } else if (continuar_modificando === "2") {
              loop_continuar_modificando = true; 
              modificando_info = false;
            } else {
              loop_continuar_modificando = false;
              console.log("Erro, dado inválido.");
            }
          } while (!loop_continuar_modificando);
        }
      }
  
      if (livro_encontrado === false) {
        console.log("Livro nao encontrado no banco de dados");
      }
    } while (modificando_info);
  }

  module.exports = mod_inf;  