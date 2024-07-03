let numero1;
let numero2;
let resultados = 0;

console.log("Digite 2 números que deseja fazer os calculos:");
process.stdin.on("data", function (data) {
  let input = +data.toString().trim();

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
   console.log (numero1+numero2)
   console.log( numero1-numero2)
   console.log (numero1*numero2)
   console.log(numero1/numero2)
   console.log ( (numero1/100 )*numero2)
    process.exit();
  }
  
});