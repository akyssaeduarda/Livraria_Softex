const readline = require("readline-sync");
const generos = [[1,"romance"],[2,"suspense"],[3,"ficcao"],[4,"filosofia"]]
let ano = new Date().getFullYear()
//função de cadastro
function cadastro(llivros, red, reset, green) {
  let nome,perg1,verif_perg1,Verif2_perg1,teste,gen_encontrado,novo_genero
  let contagem
  let loop_cadastrar_livro = true
  do {
    templateCadastro()
          let cont1=0
          do {
          nome = readline.question(`\n- Informe o nome do livro: `);
          cont1++
          if(cont1>2){
            console.log(`
            Inserir um nome é obrigatorio`);
          }
          } while(nome.length<1)
          let Cont_generos =[]
          let genero1
    do {  
          
          console.log(`
          --- Lista de generos ---
          `);

          for(let a of generos){
              teste = false
                for (const i of Cont_generos) {
                  ;
                    if(a[1]==i){
                      teste = true;
                    }
                  
                }
                if(teste){
                  continue
                }
                console.log(`${a[0]} - ${a[1]}`);
              }
          console.log(`0 - Outro`);

          let cont2 =0
          let teste1
          do {
            if(cont2>2){
              console.log(`\n- escolha uma opção numerica referente ao genero do livro`);
              cont2=1
            }
            teste1=false
          genero1 = readline.question(reset + "\n- Informe o genero do livro: ")
          cont2++
          gen_encontrado = true
          for(let i of generos){
              if(i[0]==genero1){
              gen_encontrado = false
              Cont_generos.push(i[1])
              }
          }
          if(gen_encontrado){
              if(genero1==0){
                  novo_genero=""
                  genero1 = readline.question(`\n- Informe o nome do genero a ser adicionado: `)
                  novo_genero=[(generos[generos.length-1][0]+1), genero1]
                  generos.push(novo_genero)
                  Cont_generos.push(genero1)
              }else{
                  console.log(`\n ${green}- Opcao nao encontrada. Informe uma opcao numerica referente ao genero escolhido`);
                  teste1=true
              }
          }
          } while (genero1.length<1||teste1)
        
        do{
        perg1 = parseInt(readline.question(`\nDeseja inserir mais generos? 
        1 - sim
        2 - não
        `))
        switch (perg1) {
          case 1:
            verif_perg1=true
            Verif2_perg1 = false
            break;
          case 2:
            verif_perg1=false
            Verif2_perg1 = false
            break
          default:
            console.log(`
            - digite 1 para "sim" e 2 para "não".`);
            Verif2_perg1=true
            break;
        }
        }while(Verif2_perg1)
    } while (verif_perg1)

    let valor_correto = false;
    let preco;
    while (valor_correto == false) {
      try {
        preco = parseFloat(readline.question(reset + "\n- Informe o preco do livro: "));
        // Tenta converter a entrada do usuário em um número
        // Mensagem de erro caso não seja um numero
        if (isNaN(preco)) {
          throw new Error(
            "Preço inválido ou não informado. Certifique-se de inserir um numero válido."
          );
        } else if(preco.length<1){
          throw new Error(
            "Valor não informado. Insira o valor do livro"
          );
        }else {
          valor_correto = true;
        }
      } catch (error) {
        console.error(`\n${red} Erro: ${error.message}`);
      }
    }

    let autor
    let teste2 = true
    do{
    try {
      autor = readline.question(reset + "\n- Informe o autor do livro: ");
      if(autor.length<1){
        throw new Error(
           "Nome não inserido. Informe corretamente o nome do(a) autor(a)"
        )
      }else if(isNaN(autor)==false){
            throw new Error(
              "Nome inválido. Informe corretamente o nome do(a) autor(a)"
            )
      }else {
        teste2 = false
      }
    } catch (error) {
      console.error(`\n${red}Erro: ${error.message}`)
    }
    
    } while(teste2)
    
    let editora
    let teste3 = true
    do{
    try {
      editora = readline.question(reset + "\n- Informe o nome da editora do livro: ");
      if(editora.length<1){
        throw new Error(
           "Nome não inserido. Informe corretamente o nome da editora"
        )
      }else if(isNaN(editora)==false){
            throw new Error(
              "Nome inválido. Informe corretamente o nome da editora"
            )
      }else {
        teste3 = false
      }
    } catch (error) {
      console.error(`\n${red}Erro: ${error.message}`)
    }
    
    } while(teste3)
    
    let Anop
    let teste4 = true;
    do {
      try {
        Anop = parseInt(readline.question(reset + `\n- Informe o ano de publicacao do livro: `
        ));
        // Tenta converter a entrada do usuário em um número
        if (isNaN(Anop)) {
          throw new Error(
            "Ano inválido. Certifique-se de inserir um número válido."
          );
        } else if (Anop.length < 4) {
          throw new Error("Ano inválido. Valor permitido em até 4 digitos.");
        } else if(Anop>ano){
            throw new Error(`Informe um ano anterior a ${ano}`)
        }else {
          teste4 = false;
        }
      } catch (error) {
        console.error(`\n${red}Erro: ${error.message}`);
      }
    }while (teste4)

    let estoque
    let teste5 = true;
    do {
      try {
        estoque = parseInt(readline.question(`\n${reset}- Informe a quantidade em estoque: `));
        // Tenta converter a entrada do usuário em um número
        if (isNaN(estoque)) {
          throw new Error(
            "Valor para estoque inválido. Certifique-se de inserir um número válido."
          );
        } else if (estoque.length<1){
              throw new Error(
                "Valor não inserido. Insira a quantidade em estoque"
              )
        }else {
          teste5 = false;
        }
      } catch (error) {
        console.error(`\n${red}Erro: ${error.message}`);
      }
    } while (teste5) 

    let livroc = {
      nome: nome,
      genero: genero1,
      preco: preco,
      autor: autor,
      anopubl: Anop,
      editora: editora,
      // id: gerador_codigo(),
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
