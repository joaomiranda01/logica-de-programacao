var day = window.prompt ('Qual o dia da semana?');


if (day == 'Sábado' ) {

    window.alert ('Bom fim de semana!');
}

else if  (day == 'Domingo'){

    window.alert ('Bom fim de semana!');
}

else {
    window.alert ('Boa semana!');
}

var n1 = window.prompt ('Digite um número');

if (n1 < 0) {
    window.alert('Seu numero é negativo');
}

else if (n1 > 0) {
        window.alert ('Seu número é Positivo');
    
}

var n1 = Number(prompt ('Adicione um valor. '));
var n2 = Number(prompt('Adicione mais um valor e tente descobrir a lógica por tras do jogo.'));
var s = n1 + n2

if (s >= 100) { 
    
    alert('Parabéns, você venceu');

    
    console.log ('Parabéns, você venceu');

}
   
else {
       alert ('Tente novamente para ganhar.');

    console.log ('Tente novamente para ganhar.');
}

var saldodaconta = 1000

window.alert (`O saldo da sua conta é R$ ${saldodaconta}`)

var nom = prompt('Qual o seu nome?')

alert ( `Bem-vindo ${nom}`)

//Exercicio das medias ultilizando o looop que abriu a minha cabeça

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