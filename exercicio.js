 /*
EXERCICIOS
WHILE 
01 - CRIE UM PROGRAMA QUE RECEBA 6 NUMEROS E NO FINAL
APRESENTE A MEDIA DESTES NUMEROS
*/

 function somar() {
            let soma = 0;
            let contador = 0;

            while (contador < 6) {
               
                let numeroString = prompt(`Digite o ${contador + 1}º valor!`);

                let numero = parseInt(numeroString);

                if (isNaN(numero)) {
                    alert("Entrada inválida! Por favor, digite um número.");
                    continue; 
                }

                soma += numero;
                contador++;
            }

            alert(`a Media dos 6 numeros é: ${soma / 6}`);
        }




/*
02 - CRIE UM PROGRAMA QUE RECEBA 10 NUMEROS E NO FINAL
MOSTRE A QUANTIDADE DE NUMEROS PARES E IMPARES
 */

/*LAÇO FOR
O3 - USANDO O LAÇO FOR CRIE UM PROGRMA QUE RECEBA UM NUMERO DO USUARIO
E MOSTRE A TABUADA DESTE NUMERO
 */


// copnsole.log(isNaN("abc"))
// copnsole.log(isNaN("10"))
// copnsole.log(isNaN("Isso não é um numero!!"))
