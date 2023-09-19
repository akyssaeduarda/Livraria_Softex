const readline = require("readline-sync");
const cadastro = require("./register_books");
const excluir_cadastro = require("./remove_register");
const mod_inf = require("./mod_info");
const exibir_infos = require("./display_infos");
const venda = require("./venda");

// armazena os objetos cadastrados
const llivros = [
  {
    nome: "Harry Potter",
    genero: "Fantasia",
    preco: 40.0,
    autor: "J.K Rowling",
    anopubl: 1997,
    editora: "ROSSO",
    codigo_livro: 1,
    estoque: 5,
  },
  {
    nome: "1994",
    genero: "Ficcao",
    preco: 40.0,
    autor: "George Orewll",
    anopubl: 1997,
    editora: "ROSSO",
    codigo_livro: 2,
    estoque: 5,
  },
];

function info_menu() {
  console.log(`
  |========================|
  |    LIVRARIA SOFTEX     |
  |========================|
  ===========MENU===========
  1 - NOVO CADASTRO
  2 - EXCLUIR CADASTRO
  3 - MODIFICAR INFORMACOES
  4 - EXIBIR INFORMACOES
  5 - VENDA
  6 - SAIR
  =========================
  `);
}

// loop principal onde todas as funções são são chamadas
let red = '\u001b[31m', 
    reset = '\u001b[0m',
    green = '\u001b[32m';
let acabou = false;
while (acabou === false) {
  info_menu();
  let opc = readline.question("  Informe uma opcao: ");

  if (opc == "6") {
    acabou = true;
  }
  switch (opc) {
    case "1":
      cadastro(llivros, red, reset, green);
      break;
    case "2":
      excluir_cadastro(llivros);
      break;
    case "3":
      mod_inf(llivros);
      break;
    case "4":
      exibir_infos(llivros);
      break;
    case "5":
      venda(llivros);
      break;
    case "6":
      console.log("SAINDO DO PROGRAMA...");
      break;
    default:
      break;
  }
}