let numero1;
let numero2;
let opcao = 0;
let adição = false;
let subtração= false;
let multiplicação= false;
let divisão = false;
let Porcentagem= false ;

console.log("Escolha uma das opções operações abaixo:");
console.log("1: adição:");
console.log("2: subtração");
console.log("3: multiplicação");
console.log("4: divisão");
console.log("5: Porcentagem");
console.log("6: sair do programa")

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  let input = +data.toString().trim();
  if (!opcao) {
    opcao = parseInt(entrada_usuario);
    switch (opcao) {
        case 1:
            console.log("Digite 2 números que deseja fazer os calculos:");
             adição = true;
                break

        case 2:
            console.log("Digite 2 números que deseja fazer os calculos:");
             subtração = true;
                break
        case 3:
            console.log("Digite 2 números que deseja fazer os calculos:");
             multiplicação = true;
                break
        case 4:
            console.log("Digite 2 números que deseja fazer os calculos:");
             divisão = true;
            break
        case 5:
            console.log("Digite 2 números que deseja fazer os calculos:");
             Porcentagem = true;
                break
        case 6:
            console.log("Encerrando o programa...");
            process.exit();
            break;
         default:
                console.log("Opção inválida. Tente novamente.");
                console.log("\nEscolha uma das opções abaixo:");
                console.log("1: adição:");
                console.log("2: subtração");
                console.log("3: multiplicação");
                console.log("4: divisão");
                console.log("5: Porcentagem");
                console.log("6: sair do programa");
                break;
    }
  } else {
  if (!numero1) {
    numero1 = input;
    let i;
    let maior;
  } else {
    numero2 = input;
    let i;

    if (numero1 > numero2) {
      i = numero1;
    } else {
      i = numero2;
      maior = numero2;
    }


        if(adição){
            let resultado = numero1 + numero2 
           console.log ("A adicão entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".")
           adição = false;
           opcao=0
           numero1=0
           numero2=0
           
        }
        else if ( subtração){
            let resultado = numero1 - numero2
            console.log ("A subtração entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".")
            subtração = false;
            console.log("\nEscolha uma das opções abaixo:");
            console.log("1: Digitar as informações da consulta:");
            console.log("2: Caso queira remover uma consulta");
            console.log("3: Atualizar consulta");
            console.log("4: Para ver as consultas que inseriu");
            console.log("5: Sair do programa")
        }
        else if (multiplicação){
            let resultado = numero1 * numero2 
        console.log ("A multiplicacão entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".")
        multiplicação = false;
        console.log("\nEscolha uma das opções abaixo:");
        console.log("1: Digitar as informações da consulta:");
        console.log("2: Caso queira remover uma consulta");
        console.log("3: Atualizar consulta");
        console.log("4: Para ver as consultas que inseriu");
        console.log("5: Sair do programa")
        }
        else if (divisão){
            let resultado = numero1 / numero2 
        console.log ("A divisão entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".")
        divisão = false;
        console.log("\nEscolha uma das opções abaixo:");
        console.log("1: Digitar as informações da consulta:");
        console.log("2: Caso queira remover uma consulta");
        console.log("3: Atualizar consulta");
        console.log("4: Para ver as consultas que inseriu");
        console.log("5: Sair do programa")
        }
        else if (Porcentagem){
            let resultado = (numero1/100)*numero2 
        console.log ("A Porcentagem entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".")
        Porcentagem = false;
        console.log("\nEscolha uma das opções abaixo:");
        console.log("1: Digitar as informações da consulta:");
        console.log("2: Caso queira remover uma consulta");
        console.log("3: Atualizar consulta");
        console.log("4: Para ver as consultas que inseriu");
        console.log("5: Sair do programa")
        }
  ;
  }
}

});