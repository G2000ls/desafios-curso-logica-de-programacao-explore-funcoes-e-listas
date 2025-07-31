//Criar uma função que exibe "Olá, mundo!" no console.
function exibirTexto(){
    console.log('Olá, Mundo!')
}
exibirTexto();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirTexto2(nome){
    console.log(`Olá, ${nome}!`);
}
exibirTexto2('Gustavo');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero){
    return (numero * 2);
}
console.log(dobrarNumero(50));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}
console.log(calcularMedia(3, 6, 9));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function identificarMaior(numero1, numero2){
    return maior = numero1 > numero2 ? numero1 : numero2;
}
console.log(identificarMaior(38, 140));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function calcularQuadrado(numero3){
    return numero3 * numero3;
}
console.log(calcularQuadrado(7));