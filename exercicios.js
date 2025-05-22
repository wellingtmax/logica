   
let n1 = 7;
let n2 = 8;
let n3 = 6;
let n4 = 9;

let media = (n1 + n2 + n3 + n4) / 4;

function calcular(media) {
    if(media > 0 && media <= 4) {
        console.log(`Sua nota é: ${media} - Reprovado direto!`);
    } else if(media == 5) {
        console.log(`Sua nota é: ${media} - Recuperação!`);
    } else {
        console.log(`Sua nota é: ${media} - Aprovado!`);
    }
}

calcular(media);
