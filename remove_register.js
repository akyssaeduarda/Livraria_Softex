const readline = require("readline-sync");

function excluir_cadastro(llivros) {
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
      }else{
        let loop_excluir_novo_cadastro = false
        do{
          let excluir_novo_cadastro = readline.question(`
            Deseja excluir mais algum livro? 
            1 - sim
            2 - nao
            : `)
          if(excluir_novo_cadastro === '1'){
            loop_excluir_novo_cadastro = false
            livro_excluido = false
          }else if(excluir_novo_cadastro === '2'){
            loop_excluir_novo_cadastro = false
            livro_excluido = true
          }else{
            console.log("Erro! dado invalido. ");
            loop_excluir_novo_cadastro = true
          }
  
        }while(loop_excluir_novo_cadastro)
      }
  
      
    } while (livro_excluido === false);
  }

  module.exports = excluir_cadastro;