alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enqunto o chute não for igyal ao n.s
while (chute != numeroSecreto) {

   chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    }  
    else {
        if ( chute > numeroSecreto) {
            alert(`O numero secreto é menor que o ${chute}`);
        }
    else {
            alert (`O numero secreto é maior que o ${chute}`);
        }
    }
    tentativas++;
}

//shift + {} alinha o texto automaticamente


let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador--
}

let media = soma / qtdNumeros;

console.log(media);