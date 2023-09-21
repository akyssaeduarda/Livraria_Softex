const readline = require("readline-sync");
const cadastro = require("./register_books");
const excluir_cadastro = require("./remove_register");
const mod_inf = require("./mod_info");
const exibir_infos = require("./display_infos");
const venda = require("./venda");

// armazena os objetos cadastrados
const llivros = [
  {
    nome: "harry potter",
    genero: "fantasia",
    preco: 40.0,
    autor: "j.k rowling",
    anopubl: 1997,
    editora: "rosso",
    id: 20231,
    estoque: 5,
  },
  {
    nome: "1994",
    genero: "ficcao",
    preco: 42.0,
    autor: "george Orewll",
    anopubl: 1997,
    editora: "rosso",
    id: 20232,
    estoque: 8,
  },
  {
    nome: "a revolução dos bichos",
    genero: "ficcao",
    preco: 15.0,
    autor: "george orewll",
    anopubl: 1998,
    editora: "rosso",
    id: 20233,
    estoque: 10,
  },
  {
    nome: "inferno",
    genero: "misterio",
    preco: 36.0,
    autor: "dan brow",
    anopubl: "2001",
    editora: "letras",
    id: 20234,
    estoque: 50,
  },
  {
    nome: "harry potter e a camara secreta",
    genero: "fantasia",
    preco: 38.0,
    autor: "j.k rowling",
    anopubl: 1998,
    editora: "rosso",
    id: 20235,
    estoque: 10,
  },
  {
    nome: "jogos vorazes",
    genero: "ficcao",
    preco: 36.0,
    autor: "hara",
    anopubl: 2010,
    editora: "rosso",
    id: 20236,
    estoque: 10,
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
      excluir_cadastro(llivros, red, reset, green);
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