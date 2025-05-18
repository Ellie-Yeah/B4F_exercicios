//**PDF3 */


//exercise 1
/*Considere um array em JavaScript que representa o estado das velas em um bolo
de aniversário, onde 
*true* indica que a vela está acesa e 
*false* indica que a vela está apagada.

Escreva uma função em JavaScript chamada *contarVelasAcesas* 
que recebe um array de velas e retorna o número total de velas acesas.

Por exemplo: javascrip
const velas = [true, true, false, true, false, true]; // 4
velas = [false, true, false, true, false, true, true];// 4
velas = [false, false, true, false, false];// 1
console.log (contarVelasAcesas(velas)); // Deve exibir: 4

Implemente a função contarVelasAcesas e teste-a com diferentes conjuntos de
dados para garantir que ela funcione corretamente em todos os casos.*/
/*
let velas = [true, true, false, true, false, true, false, true, true, false, true];
//console.log("velas array:", velas);

function contarVelasAcessas(array) {
    let count = 0;

    for (i = 0; i < array.length; i++) {
        if (array[i] === true) {
            count++;
        }
    }

    return count
}
console.log(contarVelasAcessas(velas));*/


//exercise 2
/* Escreva uma função chamada calcularMediana que recebe um array de números
como parâmetro e retorna a mediana desses números.*/
let mArray = [4, 7, 8, 5, 2]
//primeiro ordenar o array
//contar quantos elementos há no array
//descobrir qual está no meio (impar será aquele número)(par tenho que fazer a média dos dois numeros do meio)
//atençao que tudo isto é uma função

function calcularMediana(array) {
    array.sort((a, b) => a - b);
    //console.log(array);             //[ 2, 4, 5, 7, 8 ]
    let midArray = ((array.length) / 2); //dá o meio do array
    for (let j = 0; j < array.length; j++) {


        if (midArray % 2 === 0) {
            let mediana = ((mArray[midArray] + (mArray[midArray + 1])) / 2);
            // console.log(mediana);
        } else if (midArray % 2 === 1) {
            //impar
            return array[j];
        }
        console.log(array[j/2]);
    }

    //console.log(midArray);
}
calcularMediana(mArray);



