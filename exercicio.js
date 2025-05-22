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
    document.getElementById("resultado").value = resultado;
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
    return false;
}

