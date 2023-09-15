const readline = require("readline-sync");
const llivros = [
  {
    nome: "Harry Potter",
    genero: "Fantasia",
    preco: 40.0,
    autor: "J.K Rowling",
    anopubl: 1997,
    editora: "ROSSO",
    isbn: 1,
    estoque: 5,
  },
  {
    nome: "1994",
    genero: "Ficcao",
    preco: 40.0,
    autor: "J.K George Orewll",
    anopubl: 1997,
    editora: "ROSSO",
    isbn: 1,
    estoque: 5,
  },
];

//função de cadastro
function cadastro() {
  let nome = readline.question("Informe o nome do livro: ");
  let genero = readline.question("Informe o genero do livro: ");
  let preco = readline.question("Informe o preco do livro: ");
  let autor = readline.question("Informe o autor do livro: ");
  let Anop = readline.question("Informe o ano de publicação do livro: ");
  let editora = readline.question("Informe o nome da editora do livro: ");
  let isbn = readline.question("Informe o isbn do livro: ");
  let estoque = readline.question("Informe a quantidade em estoque: ");

  let livroc = {
    nome: nome,
    genero: genero,
    preco: preco,
    autor: autor,
    anopubl: Anop,
    editora: editora,
    isbn: isbn,
    estoque: estoque,
  };
  llivros.push(livroc);
}

function excluir_cadastro() {
  let titulo_excluir;
  let livro_excluido = false;
  do {
    titulo_excluir = readline.question(
      "Informe o título do livro a ser excluido: "
    );
    for (i = 0; i < llivros.length; i++) {
      if (llivros[i].nome == titulo_excluir) {
        llivros.splice(i, 1);
        livro_excluido = true;
        break;
      }
    }
    if (livro_excluido == false) {
      console.log("Livro nao encontrado no banco de dados");
    }
  } while (livro_excluido === false);
}

//função para modificar as informações dos livros
function mod_inf() {
  let modificando_info = true;

  do {
    let livro_modificado;
    let livro_encontrado = false;
    let nome = readline.question("Qual o nome do livro? ");

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
        7 - isbn: ${a.isbn}
        8 - estoque: ${a.estoque}
        `);
        livro_modificado = a;
        let loop_opcao = false;
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
              let isbn = readline.question("Informe o novo indice: ");
              for (const a of llivros) {
                if (nome === a.nome) {
                  a.isbn = isbn;
                }
              }
              break;
            case "8":
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
                "Erro, dado inválido. Por favor, insira um valor de 1 a 8"
              );
              break;
          }
        } while (loop_opcao === false);

        console.log(`Livro modificado:
            Nome: ${livro_modificado.nome}
            genero: ${livro_modificado.genero}
            preco: ${livro_modificado.preco}
            autor: ${livro_modificado.autor}
            Ano de publicacao: ${livro_modificado.anopubl}
            Editora: ${livro_modificado.editora}
            isbn: ${livro_modificado.isbn}
            estoque: ${livro_modificado.estoque}
        `);
        let loop_continuar_modificando = false;
        do {
          let continuar_modificando = readline.question(`
            Deseja modificar mais algum livro?
            1 - Sim
            2 - Nao
            : `);
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

// console.log("=====MENU=====");
// console.log("--------------");
// console.log("1 - novo cadastro");
// console.log("2 - excluir cadastro");
// console.log("3 - Modificar informacoes");

let opc = readline.question("Informe uma opcao: ");

switch (opc) {
  case "1":
    cadastro();
    break;
  case "2":
    excluir_cadastro();
    break;
  case "3":
    mod_inf();
    break;
  default:
    break;
}
// console.log(llivros);
