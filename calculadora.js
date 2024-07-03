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
           console.log ("A adicão entre " + numero1 + " e " + numero2 + "resulta em " + resultado + ".")
        }
        else if ( subtração){
            let resultado1 = numero1 - numero2
            console.log ("A subtração entre " + numero1 + " e " + numero2 + "resulta em " + resultado + ".")
        }
        else if (multiplicação){
            let resultado = numero1 * numero2 
        console.log ("A multiplicacão entre " + numero1 + " e " + numero2 + "resulta em " + resultado + ".")
        }
        else if (divisão){
            let resultado = numero1 / numero2 
        console.log ("A divisão entre " + numero1 + " e " + numero2 + "resulta em " + resultado + ".")
        }
        else if (Porcentagem){
            let resultado = (numero1/100)*numero2 
        console.log ("A Porcentagem entre " + numero1 + " e " + numero2 + "resulta em " + resultado + ".")
        }



        


  /* console.log (numero1+numero2)
   console.log( numero1-numero2)
   console.log (numero1*numero2)
   console.log(numero1/numero2)
   console.log ( (numero1/100 )*numero2)*/
  ;
  }
}

});