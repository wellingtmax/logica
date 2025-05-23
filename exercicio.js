 /*
EXERCICIOS
WHILE 
01 - CRIE UM PROGRAMA QUE RECEBA 6 NUMEROS E NO FINAL
APRESENTE A MEDIA DESTES NUMEROS
*/

//  function somar() {
//             let soma = 0;
//             let contador = 0;

//             while (contador < 6) {
               
//                 let numeroString = prompt(`Digite o ${contador + 1}º valor!`);

//                 let numero = parseInt(numeroString);

//                 if (isNaN(numero)) {
//                     alert("Entrada inválida! Por favor, digite um número.");
//                     continue; 
//                 }

//                 soma += numero;
//                 contador++;
//             }

//             alert(`a Media dos 6 numeros é: ${soma / 6}`);
//         }
/*
minha função vai ser somar
soma vai ser minha variavel que vai receber a soma dos numeros
contador vai ser minha variavel que vai contar os numeros
o while vai fazer o laço de repetição
contador < 6 vai ser minha condição
numeroString vai ser minha variavel que vai receber o valor do prompt
numero vai ser minha variavel que vai receber o valor do prompt convertido para inteiro
o parseInt vai converter o valor do prompt para inteiro
o if vai verificar se o numero é um numero
soma += numero vai somar o numero a soma
contador++ vai ser meu incremento
o alert vai mostrar a media dos 6 numeros
*/




/*
02 - CRIE UM PROGRAMA QUE RECEBA 10 NUMEROS E NO FINAL
MOSTRE A QUANTIDADE DE NUMEROS PARES E IMPARES
 */
// function contarParesImpares() {
//     let contador = 0;
//     let pares = 0;
//     let impares = 0;

//     while (contador < 10) {
//         let numeroString = prompt(`Digite o ${contador + 1}º valor!`);

//         let numero = parseInt(numeroString);

//         if (isNaN(numero)) {
//             alert("Entrada inválida! Por favor, digite um número.");
//             continue; 
//         }

//         if (numero % 2 === 0) {
//             pares++;
//         } else {
//             impares++;
//         }

//         contador++;
//     }

//     alert(`Quantidade de números pares: ${pares}`);
//     alert(`Quantidade de números ímpares: ${impares}`);
// }



/*
nome da função vai ser contarParesImpares
contador vai ser minha variavel que vai contar os numeros
pares vai ser minha variavel que vai contar os numeros pares
impares vai ser minha variavel que vai contar os numeros impares
o while vai fazer o laço de repetição   
contador < 10 vai ser minha condição
numeroString vai ser minha variavel que vai receber o valor do prompt
numero vai ser minha variavel que vai receber o valor do prompt convertido para inteiro
                o parseInt vai converter o valor do prompt para inteiro

o if vai verificar se o numero é um numero
                o isNaN vai verificar se o numero é um numero
                o continue vai continuar o laço de repetição
o if vai verificar se o numero é par
                numero % 2 === 0 vai verificar se o numero é par
                pares++ vai somar 1 a variavel pares    
o else vai verificar se o numero é impar
                impares++ vai somar 1 a variavel impares
contador++ vai ser meu incremento
o alert vai mostrar a quantidade de numeros pares
o alert vai mostrar a quantidade de numeros impares                
*/ 




/*LAÇO FOR
O3 - USANDO O LAÇO FOR CRIE UM PROGRMA QUE RECEBA UM NUMERO DO USUARIO
E MOSTRE A TABUADA DESTE NUMERO
 */
function tabuada() {
    let numeroString = document.getElementById("numero").value;
    let numero = parseInt(numeroString);
    let resultado = "";

    if (isNaN(numero)) {
        alert("Entrada inválida! Por favor, digite um número.");
        return; 
    }
    
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

/*
numeroString vai ser minha variavel que vai receber o valor do input
numero vai ser minha variavel que vai receber o valor do input convertido para inteiro
resultado vai ser minha variavel que vai receber o resultado da tabuada
o if vai verificar se o numero é um numero
let i = 1 vai ser minha variavel
i <= 10 vai ser minha condição
1++ vai ser meu incremento
meu for vai fazer a tabuada
o resultado vai ser concatenado com o resultado da tabuada
+= significa que o resultado vai ser concatenado com o resultado da tabuada
${numero} vai ser o numero que o usuario digitou
${i} vai ser o numero que vai ser multiplicado
${numero * i} vai ser o resultado da multiplicação
\n vai ser o pular de linha
o alert vai mostrar o resultado da tabuada
 */