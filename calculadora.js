let numero1;
let numero2;
let opcao = 0;
let adicao = false;
let subtracao = false;
let multiplicacao = false;
let divisao = false;
let porcentagem = false;

function mensagem() {
  console.log("Escolha uma das opções operações abaixo:");
  console.log("1: Adição");
  console.log("2: Subtração");
  console.log("3: Multiplicação");
  console.log("4: Divisão");
  console.log("5: Porcentagem");
  console.log("6: Sair do programa");
}

mensagem();

function digitar() {
  console.log("Digite 2 números que deseja fazer o cálculo:");
}

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  let input = parseFloat(entrada_usuario); 

  if (!opcao) {
    opcao = parseInt(entrada_usuario);
    switch (opcao) {
      case 1:
        digitar();
        adicao = true;
        break;
      case 2:
        digitar();
        subtracao = true;
        break;
      case 3:
        digitar();
        multiplicacao = true;
        break;
      case 4:
        digitar();
        divisao = true;
        break;
      case 5:
        digitar();
        porcentagem = true;
        break;
      case 6:
        console.log("Encerrando o programa...");
        process.exit();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        mensagem();
        opcao = 0;
        break;
    }
  } else {
    if (numero1 === undefined) {
      numero1 = input;
    } else {
      numero2 = input;

      if (adicao) {
        let resultado = numero1 + numero2;
        console.log("A adição entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".");
        adicao = false;
      } else if (subtracao) {
        let resultado = numero1 - numero2;
        console.log("A subtração entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".");
        subtracao = false;
      } else if (multiplicacao) {
        let resultado = numero1 * numero2;
        console.log("A multiplicação entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".");
        multiplicacao = false;
      } else if (divisao) {
        if (numero2 === 0) {
          console.log("Erro: Divisão por zero não é permitida.");
        } else {
          let resultado = numero1 / numero2;
          console.log("A divisão entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".");
        }
        divisao = false;
      } else if (porcentagem) {
        let resultado = ((numero1 / 100) * numero2);
        console.log("A porcentagem entre " + numero1 + " e " + numero2 + " resulta em " + resultado + ".");
        porcentagem = false;
      }

      opcao = 0;
      numero1 = undefined;
      numero2 = undefined;
      mensagem();
    }
  }
});
