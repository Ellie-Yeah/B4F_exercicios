//**************** Variáveis e Tipos de Dados ****************
//Declarar uma variável e atribuir-lhe um valor de String.
let varTeste = ("Olá");

//Declarar uma variável e atribuir-lhe um valor numérico.
let numVar = 13;

//Declarar uma variável sem atribuir nenhum valor;
let nullVar = ("");

//Declarar e inicializar uma variável com o tipo de dados boolean.
let boolVar = (12 > 6);

//Declarar duas variáveis e concatená-las numa String.
let var1 = ("Coca-Cola");
let var2 = ("Pepsi");
console.log(`E para beber, vai ser ${var1} ou ${var2}?`);

//Declarar duas variáveis e somá-las.
let numVar1 = 100;
let numVar2 = 200;
console.log(numVar1 + numVar2);

//Declarar uma variável e verificar o seu tipo de dados usando typeof.
let typeVar = 10n;
console.log(typeof (typeVar));

//Declarar uma variável com as palavras-chave let e const.
let letVar = ("Let variable");
const consVar = ("Const variable");


//**************** If ... Else / Switch Case ****************
//Escrever uma instrução if para verificar se um número é positivo ou negativo.
let input = 8;
if (input > 0) {
    console.log("Positivo");
} else if (input < 0) {
    console.log("Negativo");
}

//Escrever uma instrução if-else para verificar se um número é par ou ímpar.
let input1 = 8;
if (input1 % 2 == 0) {
    console.log("Par");
} else if (input1 % 2 == 1) {
    console.log("Ímpar");
}

//Desenvolve um programa que recebe um número, e depois indica se é um dia útil ou um dia de fim de semana.
//my way of thinking: i need an input so that i have a number; i will consider a week with 5-work days and 2-weekend days, and I will have to give numbers to the week days.i've kept it simple.
let inputDay = 6;

switch (inputDay) {
    case 1:
        console.log("Sunday");
        console.log("Weekend Day");
        break;
    case 2:
        console.log("Monday");
        console.log("Work Day");
        break;
    case 3:
        console.log("Tuesday");
        console.log("Work Day");
        break;
    case 4:
        console.log("Wednesday");
        console.log("Work Day");
        break;
    case 5:
        console.log("Thursday");
        console.log("Work Day");
        break;
    case 6:
        console.log("Friday");
        console.log("Work Day");
        break;
    case 7:
        console.log("Saturday");
        console.log("Weekend Day");
        break;
    default:
        console.log("wrong number");
}


//Cria um programa que compara três números e indica o maior dos três, considerando todas as possibilidades (números iguais, números negativos).
//my way of thinking: i need to create 3 variables to place the 3 numbers; 
let number1 = -2;
let number2 = 5;
let number3 = 9;
//then i need to compare the 3 numbers, to see which one is bigger;
/*number1 > number2
number1 < number2
number1 == number2

number1 > number3
number1 < number3
number1 == number3

number2 > number3
number2 < number3
number2 == number3

//like this it actually compares the 3 numbers, in all the possibilities, but it's huge and doesn't give me the bigger number...
console.log(number1 > number2 > number3);
console.log(number1 < number2 > number3);
console.log(number1 == number2 > number3);

console.log(number1 > number2 < number3); true
console.log(number1 < number2 < number3); true
console.log(number1 == number2 < number3);

console.log(number1 > number2 == number3);
console.log(number1 < number2 == number3);
console.log(number1 == number2 == number3);*/

//now i need a way to display the bigger number;
//i've tried something with switch...case, but it didnt work;
//google it is: https://docs.vultr.com/javascript/examples/find-the-largest-among-three-numbers
if (number1 >= number2 && number1 >= number3) {
    console.log(number1 + ' is the largest number.');
} else if (number2 >= number1 && number2 >= number3) {
    console.log(number2 + ' is the largest number.');
} else {
    console.log(number3 + ' is the largest number.');
}
//ou
console.log(`The largest number is ${Math.max(number1, number2, number3)}.`);


//**************** While e For Loop ****************
//Escrever um ciclo while para imprimir números de 1 a 10.
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
};
//Escrever um ciclo for para imprimir números pares de 2 a 20.
for (let j = 2; j <= 20; j += 2) {
    console.log(j)
};

//Escrever um ciclo for para iterar através de um Array e imprimir cada elemento.

let frutas = ["pera", "uva", "tangerina", "ananas"];
//              0       1         2          3

for (let k = 0; k < frutas.length; k++) {
    console.log(frutas[k]);
};

//Escrever um ciclo for para iterar através de um Array e imprimir apenas os números ímpares.

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let y = 0; y < numberArray.length; y++) {
    if (numberArray[y] % 2 === 1) {
        console.log(`Odds: ${numberArray[y]}`);
    } else {
        console.log(`Evens: ${numberArray[y]}`);
    }
}

//Escrever um ciclo for para iterar através de um Array e imprimir a soma de todos os elementos.
let total = 0;
for (let y = 0; y < numberArray.length; y++) {
    total += numberArray[y];
}
console.log(`sums' total: ${total}`)


//**************** Arrays ****************
//Declarar um array vazio e adicionar elementos nele.

let vegetables = [];
console.log("empty", vegetables);

vegetables.push("cabbage");
vegetables.push("onion", "lettuce");
vegetables.push("potato", "carrot", "zucchini");

console.log(vegetables);

//Aceder e imprimir um elemento de um array.
let firstVegetable = vegetables[0];
console.log(firstVegetable);

//Atualizar o valor de um elemento num array.
vegetables[5] = "pumpkin";
console.log(vegetables);

//Remover um elemento de um array.
vegetables.shift();
console.log(vegetables);
//Iterar através de um array e imprimir cada elemento.
let lastIndex = vegetables.length - 1;
for (let v = 0; v < lastIndex; v++) {
    console.log(vegetables[v]);
}
for (let v = 1; v < lastIndex; v++) {
    console.log(vegetables[v]);
}
for (let v = 2; v < lastIndex; v++) {
    console.log(vegetables[v]);
}
for (let v = 3; v < lastIndex; v++) {
    console.log(vegetables[v]);
}
for (let v = 4; v < lastIndex; v++) {
    console.log(vegetables[v]);
}
for (let v = 5; v < lastIndex; v++) {
    console.log(vegetables[v]);
}


//Encontrar o valor máximo e mínimo num array.
let minMaxArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function minArray(minMaxArr) {

    return Math.min.apply(null, minMaxArr);

}
let resultMin = minArray(minMaxArr)
console.log("Min number:", resultMin);

function maxArray(minMaxArr) {

    return Math.max.apply(null, minMaxArr);

}
let resultMax = maxArray(minMaxArr)
console.log("Max number:", resultMax);
