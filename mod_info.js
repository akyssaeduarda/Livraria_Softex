const readline = require("readline-sync");

//função para modificar as informações dos livros
function mod_inf(llivros, red, reset, green, purple) {
  let modificando_info = true;
  templateEdit() 
  fazerUmaBusca()
  do {
    let livro_modificado;
    let livro_encontrado = false;
    let nome = readline.question(reset +"\n - Qual o nome do livro? ").toLowerCase();

    //procurar o livro informado
    for (const a of llivros) {
      if (nome === a.nome) {
        livro_encontrado = true;
        console.log(purple + "\n\t-- LIVRO ENCONTRADO --\n");
        console.log(`\t${reset}1 - LIVRO: ${a.nome}`);
        console.log(`\t2 - GÊNERO: ${a.genero}`);
        console.log(`\t3 - PREÇO: R$ ${a.preco}`);
        console.log(`\t4 - AUTOR: ${a.autor}`);
        console.log(`\t5 - ANO DE PUBLICAÇÃO: ${a.anopubl}`);
        console.log(`\t6 - EDITORA: ${a.editora}`);
        console.log(`\t  -  ID: ${a.id}`);
        console.log(`\t6 - ESTOQUE6: ${a.estoque}`);
        livro_modificado = a;
        let loop_opcao = false;

        // escolher informacao que ira modificar
        do {
          let mod = readline.question(reset + "\n- Qual opcao deseja modificar? ");
          switch (mod) {
            case "1":
              loop_opcao = true;
              let nnome = readline.question("\n- Informe o novo nome: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.nome = nnome;
                }
              }
              break;

            case "2":
              loop_opcao = true;
              let genero = readline.question("\n - Informe o novo genero: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.genero = genero;
                }
              }
              break;
            case "3":
              loop_opcao = true;
              let preco = readline.question("\n- Informe o novo preco: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.preco = preco;
                }
              }
              break;

            case "4":
              loop_opcao = true;
              let autor = readline.question("\n- Informe o novo autor: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.autor = autor;
                }
              }
              break;

            case "5":
              loop_opcao = true;
              let anopubl = readline.question(
                "\n- Informe o novo ano de publicacao: "
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
                "\n- Informe o novo nome da editora: "
              );
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.editora = editora;
                }
              }
              break;

            case "7":
              loop_opcao = true;
              let estoque = readline.question("\n- Informe o novo estoque: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.estoque = estoque;
                }
              }
              break;
            default:
              loop_opcao = false;
              console.log(
                red + "\nErro, dado inválido. Por favor, insira um valor de 1 a 7"
              );
              break;
          }
        } while (loop_opcao === false);

        // exibindo o livro modificado
        console.log(green + "\n\t-- LIVRO MODIFICADO --\n");
        console.log(`\t${reset}LIVRO: ${livro_modificado.nome}`);
        console.log(`\tGÊNERO: ${livro_modificado.genero}`);
        console.log(`\tPREÇO: R$ ${livro_modificado.preco}`);
        console.log(`\tAUTOR: ${livro_modificado.autor}`);
        console.log(`\tANO DE PUBLICAÇÃO: ${livro_modificado.anopubl}`);
        console.log(`\tEDITORA: ${livro_modificado.editora}`);
        console.log(`\tID: ${livro_modificado.id}`);
        console.log(`\tESTOQUE: ${livro_modificado.estoque}`);

        let loop_continuar_modificando = false;
        // loop para verificar se o usuário deseja modificar mais algum livro
        do {
          let continuar_modificando = readline.question(
           reset + "\n- Deseja modificar mais algum livro? \n 1 - sim \n 2 - nao \n : "
          );
          if (continuar_modificando === "1") {
            loop_continuar_modificando = true;
          } else if (continuar_modificando === "2") {
            sair = readline.keyIn("\nPRESSIONE QUALQUER TECLA PARA O MENU...")
            loop_continuar_modificando = true;
            modificando_info = false;
          } else {
            loop_continuar_modificando = false;
            console.log(red +"\nErro, dado inválido.");
          }
        } while (!loop_continuar_modificando);
      }
    }

    if (livro_encontrado === false) {
      console.log(red + "\nLivro nao encontrado no banco de dados");
    }
  } while (modificando_info);

  function fazerUmaBusca() {
    loop_busca = true;
    do {
      //loop para fazer uma busca
      try {
        let busca = readline
          .question(`\n${reset}- Digite o nome do autor ou livro para buscar: `)
          .toLowerCase();
        if (!busca) {
          throw new Error("O valor fornecido não pode ser nulo.");
        } else {
          const filterItems = (busca) => {
            return llivros.filter(
              (a) => a.nome.indexOf(busca) > -1 || a.autor.indexOf(busca) > -1
            );
          };
          let filtro = filterItems(busca);
          if (filtro.length === 0) {
            throw new Error(
              "autor e/ou livro não encontrado no banco de dados"
            );
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
  function templateEdit() {
    console.log(`\n
    ---------------------------------------
                EDITAR CADASTRO 
    ---------------------------------------
    `);
  }
}

module.exports = mod_inf;