//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura, peso){ //imc = kg/m²
    let imc = peso/(Math.pow(altura, 2)); //Math.pow(x, n) calcula o exponencial de um numero, onde "x" é o numero e "n" é o expoente.
    return imc;
}
console.log(calcularIMC(1.77, 105).toFixed(1)); //toFixed(n) serve para definir o numero de casas decimais, onde "n" é o numero de casas.

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero){
    if(numero == 0 || numero == 1){
        return 1;
    } else{
        let fatorial = 1;
        for (let i = numero ; i > 0 ; i--){
            fatorial *= i; 
        }
        return fatorial;
    }
}
console.log(calcularFatorial(5));

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversorDolarReal(dolar){
    let real = dolar * 4.80;
    return real.toFixed(2);
}
console.log(conversorDolarReal(10));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = (altura + largura)*2;
    return console.log(`Valor da área: ${area} | Valor do perímetro: ${perimetro}`);
}
calcularAreaPerimetro(4, 5);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroCircular(raio){
    let area = Math.pow(raio, 2) * 3.14;
    let perimetro = raio * 2 * 3.14;
    return console.log(`A área é de ${area}m² e o perímetro é de ${perimetro}m`);
}
calcularAreaPerimetroCircular(4);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function calcularTabuada(valor){
    for (let i = 1 ; i <= 10 ; i++){
        let tabuada = valor * i;
        console.log(`${valor} x ${i} = ${tabuada}`);
    }
}
calcularTabuada(23);