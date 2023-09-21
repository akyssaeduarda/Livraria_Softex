const readline = require("readline-sync");
// função para exibir todos os dados da lista de objetos (os dados dos livros)
function exibir_infos(llivros, reset, purple) {
  templateExibir()
  for (i = 0; i < llivros.length; i++) {
    const livro = llivros[i];
    console.log(purple+"===========================\n");
    console.log(reset+"Titulo: " + livro.nome);
    console.log("Genero: " + livro.genero);
    console.log("Preco: R$ " + livro.preco);
    console.log("Autor: " + livro.autor);
    console.log("Ano de Publicacao: " + livro.anopubl);
    console.log("Editora: " + livro.editora);
    console.log("ID: " + livro.id);
    console.log("Estoque: " + livro.estoque);
    console.log();
  }
  sair = readline.keyIn("\nPRESSIONE QUALQUER TECLA PARA O MENU...")
  console.clear()
  function templateExibir() {
    console.log("\n-------------------------------");
    console.log("\tEXIBIR CADASTRO");
    console.log("-------------------------------\n");
    
  }
}

module.exports = exibir_infos;
