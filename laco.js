// console.log("------------------------------------------------------")

// let i = 0;

// while (i <= 2) {
//     console.log(`Valor de i agora é: ${i}`)
//     i += 1
//     // i++
//     // i = i +1
// }

// console.log("------------------------------------------------------")

// let j = 0

// do {
//     console.log(j);
//     j++
// } while (j < 3)

// console.log("------------------------------------------------------")

// for (let k = 0; k < 2; k++) {
//     console.log(k);
// }

console.log("------------------------------------------------------")
function somar() {
            let soma = 0;
            let contador = 0;

            while (contador < 5) {
               
                let numeroString = prompt(`Digite o ${contador + 1}º valor!`);
                
               
                let numero = parseInt(numeroString);

                
                if (isNaN(numero)) {
                    alert("Entrada inválida! Por favor, digite um número.");
                    continue;
                }

                soma += numero;
                contador++;
            }

            alert(`A soma dos cinco números é ${soma}`);
        }