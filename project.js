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

function mod_inf() {
  let nome = readline.question("Qual o nome do livro? ");
  for (const a of llivros) {
    if (nome === a.nome) {
      console.log(`
            1 - Nome: ${a.nome}
            2 - genero: ${a.genero} 
            3 - preco: ${a.preco}
            4 - autor: ${a.autor}
            5 - Ano de publicacao: ${a.anopubl}
            6 - Editora: ${a.editora}
            7 - isbn: ${a.isbn}
            8 - estoque: ${a.estoque}
            `);
    }
  }
  let mod = readline.question("Qual opção deseja modificar? ");
  switch (mod) {
    case "1":
      let nnome = readline.question("Informe o novo nome: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.nome = nnome;
        }
      }
      break;

    case "2":
      let genero = readline.question("Informe o novo genero: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.genero = genero;
        }
      }
      break;
    case "3":
      let preco = readline.question("Informe o novo preco: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.preco = preco;
        }
      }
      break;

    case "4":
      let autor = readline.question("Informe o novo autor: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.autor = autor;
        }
      }
      break;

    case "5":
      let anopubl = readline.question("Informe o novo ano de publicacao: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.anopubl = anopubl;
        }
      }
      break;

    case "6":
      let editora = readline.question("Informe o novo nome da editora: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.editora = editora;
        }
      }
      break;

    case "7":
      let isbn = readline.question("Informe o novo indice: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.isbn = isbn;
        }
      }
      break;
    case "8":
      let estoque = readline.question("Informe o novo estoque: ");
      for (const a of llivros) {
        if (nome === a.nome) {
          a.estoque = estoque;
        }
      }
      break;
    default:
      break;
  }
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
console.log(llivros[0]);
