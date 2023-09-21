const readline = require("readline-sync");
const generos = [
  { 1: "romance" },
  { 2: "Suspense" },
  { 3: "ficcao" },
  { 4: "filosofia" },
];
function gerador_codigo() {
  // funcao para gerar um codigo para o livro (em construção)
}
//função de cadastro
function cadastro(llivros, red, reset, green) {
  let loop_cadastrar_livro = true;
  do {
    templateCadastro();
    let nome = readline.question("\n- Informe o nome do livro: ");
    console.log(`
    --- Lista de generos ---
    
    `);
    for (let i = 0; i < generos.length; i++) {
      console.log(`
          ${i + 1} - ${generos[i]}`);
    }
    let genero = readline.question("\n- Informe o genero do livro: ");
    let valor_correto = false;
    let preco;
    while (valor_correto == false) {
      try {
        preco = readline.question(reset + "\n- Informe o preco do livro: ");
        // Tenta converter a entrada do usuário em um número
        preco = parseFloat(preco);
        // Mensagem de erro caso não seja um numero
        if (isNaN(preco)) {
          throw new Error(
            "Preço inválido. Certifique-se de inserir um numero válido."
          );
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`\n${red} Erro: ${error.message}`);
      }
    }

    let autor = readline.question("\n- Informe o autor do livro: ");
    let editora = readline.question("\n- Informe o nome da editora do livro: ");
    let Anop;
    valor_correto = false;
    while (valor_correto == false) {
      try {
        Anop = readline.question(
          `\n${reset}- Informe o ano de publicacao do livro: `
        );
        // Tenta converter a entrada do usuário em um número
        Anop = parseInt(Anop);

        if (isNaN(Anop)) {
          throw new Error(
            "Ano inválido. Certifique-se de inserir um número válido."
          );
        } else if (Anop > 9999) {
          throw new Error("Ano inválido. Valor permitido em até 4 digitos.");
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`\n${red}Erro: ${error.message}`);
      }
    }
    id++;
    let estoque;
    valor_correto = false;
    while (valor_correto == false) {
      try {
        estoque = readline.question(
          `\n${reset}- Informe a quantidade em estoque: `
        );
        // Tenta converter a entrada do usuário em um número
        estoque = parseInt(estoque);

        if (isNaN(estoque)) {
          throw new Error(
            "Valor para estoque inválido. Certifique-se de inserir um número válido."
          );
        } else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`\n${red}Erro: ${error.message}`);
      }
    }
    let livroc = {
      nome: nome,
      genero: genero,
      preco: preco,
      autor: autor,
      anopubl: Anop,
      editora: editora,
      id: id,
      estoque: estoque,
    };
    llivros.push(livroc);

    console.log(`\n
    ---------------------------------------
        ${green}LIVRO CADASTRADO COM SUCESSO!
              ${reset}
              NOME: ${livroc.nome}
              GENERO: ${livroc.genero}
              PREÇO: R$ ${livroc.preco.toFixed(2)}
              AUTOR: ${livroc.autor}
              ANO DE PUBLICAÇÃO: ${livroc.anopubl}
              EDITORA: ${livroc.editora}
              ID: ${livroc.id}
              ESTOQUE: ${livroc.estoque}
    ---------------------------------------`);

    let validar_dado = true;
    do {
      let cadastrar_novo_livro = readline.question(
        `\n${reset}Deseja cadastrar novo livro? \n 1 - sim \n 2 - nao \n : `
      );
      if (cadastrar_novo_livro === "1") {
        loop_cadastrar_livro = true;
        validar_dado = false;
        console.clear();
      } else if (cadastrar_novo_livro === "2") {
        loop_cadastrar_livro = false;
        validar_dado = false;
        console.clear();
      } else {
        console.log(`\n${red}Erro! dado invalido. `);
        validar_dado = true;
      }
    } while (validar_dado);
  } while (loop_cadastrar_livro);
}

function templateCadastro() {
  console.log(`\n
  ---------------------------------------
              CADASTRO LIVRO
  ---------------------------------------
  `);
}
module.exports = cadastro;
