alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let chute;
let tentativas = 1;

//enqunto o chute não for igyal ao n.s
while (chute != numeroSecreto) {

   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
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

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){ alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);}
   

 //else { alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);}
   



