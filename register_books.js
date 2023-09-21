const readline = require("readline-sync");
const generos = [[1,"romance"],[2,"suspense"],[3,"ficcao"],[4,"filosofia"]]
let ano = new Date().getFullYear()

//função de cadastro
function cadastro(llivros, red, reset, green) {
  let nome,perg1,verif_perg1,Verif2_perg1,teste,gen_nao_encontrado,novo_genero, ver_nome,t
  let loop_cadastrar_livro = true
  let contador = 7
  do {
    templateCadastro()
          let cont1=0
          do {
          if(cont1>2){
              console.log(`
              Inserir um nome é obrigatorio`);
            }
          nome = readline.question(`\n${reset}- Informe o nome do livro: `).toLowerCase();
          cont1++
          ver_nome=false
          for (const a of llivros) {
            if(a.nome==nome){
              console.log(`\n${red}- Esse nome já existe no banco de dados`);
              ver_nome = true
              break;
            }else{
              ver_nome = false
            }
          }
          } while(nome.length<1||ver_nome)

          
          let ContagemGen =[]
          let genero1
          let contagemOP = [] 
    do {  
          
             
          console.log(`
          --- Lista de generos ---
          `);

          for(let a of generos){
              teste = false
                for (const i of ContagemGen) {
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
          let op_invalida = false
          let cont2 =0
          let teste1
      do {
            if(cont2>2){
              console.log(`\n${red}- escolha uma opção numerica referente ao genero do livro`);
              cont2=0
            }
          teste1=false
          genero1 = ""
          genero1 = readline.question(reset + "\n- Informe o genero do livro: ").toLowerCase();
          cont2++
          if(genero1.length<1){
          gen_nao_encontrado = false
          }else{
            gen_nao_encontrado=true
          }
          op_invalida=false;

          for (let i=0;i<contagemOP.length;i++){
            if(contagemOP[i] == genero1){
                console.log(`\n${red} - Escolha uma opcao valida`);
                gen_nao_encontrado=false
                op_invalida = true
                teste1=true
            }
          }
          for(let i of generos){
              if(op_invalida){
                break
              }
              if(i[0]==genero1){
              gen_nao_encontrado = false;
              ContagemGen.push(i[1]);
              contagemOP.push(i[0])
              }
          }
          if(gen_nao_encontrado){
              if(genero1==0){
                  novo_genero=""
                  genero1 = readline.question(`\n- Informe o nome do genero a ser adicionado: `).toLowerCase()
                  novo_genero=[(generos[generos.length-1][0]+1), genero1]
                  generos.push(novo_genero)
                  contagemOP=novo_genero[0]
                  ContagemGen.push(genero1)
              }else{
                  console.log(`\n ${red}- Opcao nao encontrada. Informe uma opcao numerica referente ao genero escolhido`);
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
      autor = readline.question(reset + "\n- Informe o autor do livro: ").toLowerCase();
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
      editora = readline.question(reset + "\n- Informe o nome da editora do livro: ").toLowerCase();
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

    function gerador_id(){
      let id_ger;
      id_ger = parseInt(`${ano}${contador}`)
      return id_ger
    }
    
    let livroc = {
      nome: nome,
      genero: genero1,
      preco: preco,
      autor: autor,
      anopubl: Anop,
      editora: editora,
      id: gerador_id(),
      estoque: estoque,
    };
    llivros.unshift(livroc);
    contador++

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
