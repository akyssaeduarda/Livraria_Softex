const readline = require("readline-sync");
const cadastro = require("./register_books");
const excluir_cadastro = require("./remove_register");
const mod_inf = require("./mod_info");
const exibir_infos = require("./display_infos");
const venda = require("./venda");


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
    autor: "J.K George Orewll",
    anopubl: 1997,
    editora: "ROSSO",
    codigo_livro: 1,
    estoque: 5,
  },
];

// console.log("=====MENU=====");
// console.log("1 - novo cadastro");
// console.log("2 - excluir cadastro");
// console.log("3 - Modificar informacoes");
// console.log("4 - Exibir informações")
// console.log("5 - Venda")
// console.log("6 - Sair")

function info_menu(){
  console.log(`
  |=====================|
  |   LIVRARIA SOFTEX   |
  |=====================|

  =========MENU=========
  1 - NOVO CADASTRO
  2 - EXCLUIR CADASTRO
  3 - MODIFICAR INFORMACOES
  4 - EXIBIR INFORMACOES
  5 - VENDA
  6 - SAIR
  
  `)
}

acabou = false
while(acabou===false){
  info_menu()
  let opc = readline.question("Informe uma opcao: ");

  if(opc=="6"){
    acabou = true
  }
  switch (opc) {
    case "1":
      cadastro(llivros);
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
      console.log("SAINDO DO PROGRAMA");
      break;
    default:
      break;
  }
}


