
//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log ('Boas vindas a área dos desenvolvedores');

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
var nome = 'João Victor Praxedes de Miranda';

console.log(`Olá ${nome}`);

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
var nome = 'João Victor Praxedes de Miranda';

alert (`Olá ${nome}`);

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
var pessoal = prompt ('Qual a linguagem de programação você mais gosta');

console.log (pessoal);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
var valor1 = 4 + 8;
var valor2 = 11 + 5;
var resultado = valor1 + valor2;

console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}.` );


//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
var valor1 = 20;
var valor2 = 15;
var resultado = valor1 - valor2;

console.log (`A diferença entre o ${valor1} e o ${valor2} é ${resultado}`);


//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
var idade = prompt ('Por favor insira sua idade.');

if (idade >= 18) {
    console.log(`Já tem ${idade}! O tempo voa mesmo. Já pode tirar a habilitação`);
}
else {
    console.log('Ainda é adolescente, aproveite essa fase.');

}

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
var numero = prompt('Digite um número por favor.');

if (numero >= 0){
    console.log('Este é um número que faz  faz parte do conjunto dos inteiros');
}

else {
    console.log ('Este número é negativo');
}                  

//9. Use um loop while para imprimir os números de 1 a 10 no console.

var numero = 1

while (numero <= 10) {
    console.log(numero)
    numero++
}


//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
var nota = 11

var numero = nota < 7? 'reprovado': 'aprovado'

console.log (numero)

//11. se o Math.random para gerar qualquer número aleatório e exiba esse número no console.
var number = parseInt(Math.random() *100 +1 )

console.log (number)


//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
var number = parseInt(Math.random() *10 +1 )

console.log (number)


//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
var number = parseInt(Math.random() *1000 +1 )

console.log (number)