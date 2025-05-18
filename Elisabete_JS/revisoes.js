//let arr = [-10, 4, 1, 4, 5, -3, 21];
/*
let maior;
let menor;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) { //percorre o array e dá o primeiro valor positivo
        console.log(`found it: ${arr[i]}`);
        //break; //para ter a certeza que encontra o primeiro n~positivo, se nao poderia continuar e dar outros valores;
        maior = arr[i];
        menor = arr[i];
    }
}
*/
/*
function encontraMenorPositivo(array) {

    let positivo = []; //criar um array para arrumar apenas os numeros positivos do array original

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { //percorre o array e dá o primeiro valor positivo
            positivo.push(arr[i]);
        }
    }

    let menor = positivo[0];
    for (let j = 1; j < positivo.length;) {
        if (positivo[j] < menor) {
            menor = positivo[j];
        }
    }

    return menor;
}
encontraMenorPositivo(arr);
*/



//exercicio 5 do pdf 2

/*
function arrayToN(n) {
    if (n < 0) {
        return "Por favor insira um número superior a 0."
    }

    let arrayToN = [];
    for (let i = 1; i <= n; i++) {
        arrayToN.push[i];
        return arrayToN;
    }
    
}

console.log(arrayToN(10));

*/
//velas do bolo
/*
//minha forma, inacabada
let arrayCandles = [true, true, false, false, true, false, true];//7 velas no total //4 true
let cdl = true;
let c = 0
function countCandles(cdl) {
    for (let c = 0; c < arrayCandles.length; c++) {
        let candles = arrayCandles[c];


        if (candles = false) {
            arrayCandles.shift();
        }

    }
    console.log("length:", arrayCandles.length);
    console.log("array:", arrayCandles[c]=true);
}

countCandles(true);*/
/*
const bolo = [true, true, false, true, false, false, true];
function contarVelasAcessas(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {

    }
}




////////////////////
//objetos
const person = {
    firstName: "Pedro",
    lastName: "Henrique",
    age: 28,
    pets: ["spike", "dude"],
    parents: {
        father: "carlos",
        mother: "carlota"
    }
};*/

//funçao associada a um objeto chama-se *método*


/*Escreva uma função chamada calcularMediana que recebe um array de números,
como parâmetro e retorna a mediana desses números.
array = [4, 7, 8, 5, 2]*/


//primeiro, ordenar o array
//segundo descobrir o comprimento do array (quantos elementos tem)
//terceiro: se length for impar dividir o nr de elementos por 2 (para saber qual está no meio);
//dividr a length e arredondar para baixo (floor...)= index >>>> floor(array.length/2)]
//array [ floor(array.length/2)]
// se for par a length...
//tenho que fazer a média dos 2 do meio.
//index = ([length/2]+[(length/2)-1])/2 ====dará a mediana

/*
let array = [4, 7, 8, 5, 2];
//sort array (memorizar isto)
array.sort((a, b) => a - b);
console.log(array);
//[ 2, 4, 5, 7, 8 ]

*/


//exercicio 6