//exercise 1
let a = "Hello";
let b = "World";

let c = (a + " " + b);
console.log(c);
//Hello World

//----------------------------
//exercise 2
let num = 100
let str = '100'

let soma = (num + str);
console.log(soma);
//100100
let soma2 = (num + (Number(str)));
console.log(soma2);
//200

//----------------------------
//exercise 3
let x = 2;
let y = 20;

function countOddsEvens(x, y) {

    for (let z = 0; z < ((y - x) + 2); z++) {
        //got to make a variable(let z =0) in this "formula" used to navigate a interval of values
        if (z % 2 === 0) {
            console.log("Evens:", z);
        } else if (z % 2 === 1) {
            console.log("Odds:", z);
        } else if (x === y) {
            console.log("Error");
        }
    }
}

console.log(countOddsEvens(x, y));

//----------------------------
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

//----------------------------
//exercise 5

let n = 20;

function giveArray(N) { //função com um numero de argumento;
    let array = []; //para criar um array, forma de listar vários valores

    for (let el = 0; el <= N; el++) {
        array.push(el); //aqui é para incrementar, a lista de numeros do 0 até N, os numeros são colocados dentro do array
    }
    return array; //devolve um array de 0 a n

}

let array = giveArray(n); //variavel para poder usar a função que criamos

if (n < 0) {
    console.log("Por favor insira um número superior a 0."); //mensagem de erro se o argumento for <0;
}

console.log(array);

//----------------------------
//exercise 6

