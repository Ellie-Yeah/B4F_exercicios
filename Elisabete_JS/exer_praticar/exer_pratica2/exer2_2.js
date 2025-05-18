//exercise 1

let a = "Olá"
let b = "Mundo"
let c = a + " " + b;
console.log(c); //Olá Mundo

//exercise 2

let num = 100
let str = '100'
let soma = num + Number(str);
console.log(soma); //200

//exercise 3
/*Cria uma função que recebe como argumentos dois valores e
conta o número de pares que existem entre esses dois valores,
incluindo os próprios se forem pares.

Caso sejam introduzidos dois valores iguais deve retornar a
mensagem de erro: "Por favor introduza dois valores diferentes."*/
let ex1 = 2;
let ex2 = 20;
function contaPares(ex1, ex2) {
    for (let i = 0; i < ((ex2 - ex1) + 2); i++) {

        if (i % 2 === 0) {
            console.log("Pares:", i);
        } else if (i % 2 === 1) {
            console.log("Impares:", i);
        } else if (ex1 === ex2) {
            console.log("Por favor introduza dois valores diferentes.")
        }
    }

}

contaPares(ex1, ex2);
/*Resultado na consola:
Pares: 0
Impares: 1
Pares: 2
Impares: 3
Pares: 4
Impares: 5
Pares: 6
Impares: 7
Pares: 8
Impares: 9
Pares: 10
Impares: 11
Pares: 12
Impares: 13
Pares: 14
Impares: 15
Pares: 16
Impares: 17
Pares: 18
Impares: 19*/

//não consegui totalmente

//exercise 4

let t = 0;

function giveQuarter(t) {
    switch (t) {
        case 1:
            return ("Janeiro, Fevereiro, Março"); //return já não faz aparecer undefined depois de cada resultado que pedimos; console.log, fazia isso.
            break;
        case 2:
            return ("Abril, Maio, Junho");
            break;
        case 3:
            return ("Julho, Agosto, Setembro");
            break;
        case 4:
            return ("Outubro, Novembro, Dezembro");
            break;
        default:
            return ("Número inválido. Por favor insira um número entre 1 e 4.");
            break;
    }
}
console.log(giveQuarter(4));
console.log(giveQuarter(3));
console.log(giveQuarter(2));
console.log(giveQuarter(1));

//exercise 5
/*
Cria uma função que recebe um número como argumento e retorna
um array com os números de 0 a n.
Caso o número seja inválido deve retornar a seguinte mensagem:
"Por favor insira um número superior a 0."*/

let g = 0;// declarar esta variavel apenas para criar a função, o valor aqui não afeta o resultado

function giveArray(g) {

    for (let n = 0; n < ((g - 0) + 1); n++) {//percorrer o array; ((g-0)+1) é o numero de elementos que o array terá, equivale a "array.length"
        let array1 = [n];//aqui, estou a criar um array, e os seus elementos serão ditados pelo n (entre 0 e n, irá haver uma incrementação (n++) )
        console.log(array1); //aqui imprime o array
    };
    if (g <= 0) {
        console.log("Por favor insira um número superior a 0.");
    };
};

console.log(giveArray(10)); //execução da função
/*
[ 0 ]
[ 1 ]
[ 2 ]
[ 3 ]
[ 4 ]
[ 5 ]
[ 6 ]
[ 7 ]
[ 8 ]
[ 9 ]
[ 10 ]
*/
//como coloco todos os elementos dentro de um só array?
//ter array1=[]; e logo depois array1.push(n) - dá igual;
//se tiver array1=[n] duplica os resultados, [0,0],[1,1], etc;




//Exercise 6 - FizzBuzz

/*Cria a função FizzBuzz, que tem o argumento n, que é um
número inteiro, 
e que retorna um array com n elementos em que os
índices múltiplos de 3 possuem o valor de "Fizz",
os múltiplos de 5 possuem o valor de "Buzz" 
e os múltiplos de 15 possuem o valor de "FizzBuzz", 
todos os outros elementos do array devem possuir o valor de " ", 
os índices devem começar em 1.*/

let nVar = 50;

function fizzBuzz(n) {
    let fizzArray = [];//não posso ter isto dentro do For, por assin vai reiniciar o loop
    for (let w = 1; w < n; w++) {
        //navegar o array, o w=1 é para começar do 1 e não do zero.
        if (w % 15 === 0) { //multiplo de 15; w/15=0 significa que o numero é multiplo de 15
            fizzArray.push("FizzBuzz");
        } else if (w % 5 === 0) {//multiplo de 5; w/5=0 significa que o numero é multiplo de 5
            fizzArray.push("Buzz");
        } else if (w % 3 === 0) {//multiplo de 3; w/3=0 significa que o numero é multiplo de 3
            fizzArray.push("Fizz");
        } else {
            fizzArray.push(" ");
        }

    }
    console.log(fizzArray);
}
fizzBuzz(nVar);

/*
[
  ' ',        ' ',        'Fizz',     ' ',
  'Buzz',     'Fizz',     ' ',        ' ',
  'Fizz',     'Buzz',     ' ',        'Fizz',
  ' ',        ' ',        'FizzBuzz', ' ',
  ' ',        'Fizz',     ' ',        'Buzz',
  'Fizz',     ' ',        ' ',        'Fizz',
  'Buzz',     ' ',        'Fizz',     ' ',
  ' ',        'FizzBuzz', ' ',        ' ',
  'Fizz',     ' ',        'Buzz',     'Fizz',
  ' ',        ' ',        'Fizz',     'Buzz',
  ' ',        'Fizz',     ' ',        ' ',
  'FizzBuzz', ' ',        ' ',        'Fizz',
  ' '
]
*/


//Exercise 8
/*8 – Cria uma variável do tipo number com o nome max.
Guarda nessa variável o maior valor presente no array.
array = [4, 1, 4, 5] // max = 5
*/
arrayEx8 = [4, 1, 4, 5];

for (let q = 0; q <= arrayEx8.length; q++); {
}

let max = Math.max((arrayEx8.length) + 1);
console.log(max);
//5

//Exercise 9
/*9 - Cria uma variável do tipo number com o nome min.
Guarda nessa variável o menor valor positivo presente no array.
array = [4, 1, 4, 5] // min = 1
*/
let min = Math.min((arrayEx8.length) + 1);
console.log(min);
//5

//Exercise 10
/*10- Cria uma variável do tipo number com o nome maxIndex.
Guarda nessa variável o índice da primeira ocorrência do maior
valor presente no array.
array = [4, 6, 4, 5, 3, 6] // maxIndex = 1*/
console.log("*****exercicio 10******");

let arrayEx10 = [4, 6, 4, 5, 3, 6];

let maxNumber = Math.max(arrayEx10.length);
console.log("max number:", maxNumber);//6

console.log("array length:", arrayEx10.length)//6 (seis indexes (0 a 5))

for (yt = 0; yt < arrayEx10.length; yt++) {
    let maxIndex = arrayEx10[yt];
    console.log("maxIndex:", maxIndex);//imprime todos os elementos do array
}

console.log("yt:", yt);

//dá para "imprimir" os indices de todo o array?


