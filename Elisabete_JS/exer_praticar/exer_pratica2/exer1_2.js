//Variáveis e Tipos de Dados:

//Declarar uma variável e atribuir-lhe um valor de String.
let var1 = "Ellie";

//Declarar uma variável e atribuir-lhe um valor numérico.
let var2 = 13;

//Declarar uma variável sem atribuir nenhum valor;
let var3 = "";

//Declarar e inicializar uma variável com o tipo de dados boolean.
let var4 = (5 > 8);
console.log("resposta var4:", var4) //resposta var4: false

//Declarar duas variáveis e concatená-las numa String.
let vari1 = "Hello";
let vari2 = "World";
let variFrase = vari1 + " " + vari2;
console.log("Concatenar:", variFrase); //Concatenar: Hello World

//Declarar duas variáveis e somá-las.
let variNum1 = 10;
let variNum2 = 20;
let variSoma = variNum1 + variNum2;
console.log(variSoma); //30

//Declarar uma variável e verificar o seu tipo de dados usando typeof.
let declVar = "ein?";
console.log(typeof (declVar)); //string
//Declarar uma variável com as palavras-chave let e const

let finalVar1 = "let";
const finalVar2 = "const";

///////////////////////////////////////////////////////////////////
//If ... Else / Switch Case:


//Escrever uma instrução if para verificar se um número é positivo ou negativo.
let numbi1 = -5;
if (numbi1 < 0) {
    console.log("Negative");
} else if (numbi1 > 0) {
    console.log("Positive");
} else if (numbi1 === 0) {
    console.log("Zero");
}//Negative

//Escrever uma instrução if-else para verificar se um número é par ou ímpar.
let numbi2 = 6;

if (numbi2 % 2 === 0) {
    console.log("Par");
} else if (numbi2 % 2 === 1) {
    console.log("Impar");
}//Par

//Desenvolve um programa que recebe um número, e depois indica se é um dia útil ou um dia de fim de semana.
let dayNum = 5;

switch (dayNum) {
    case 1:
        console.log("Domingo", "Fim de Semana")
        break;
    case 2:
        console.log("Segunda-Feira", "Dia Útil")
        break;
    case 3:
        console.log("Terça-Feira", "Dia Útil")
        break;
    case 4:
        console.log("Quarta-Feira", "Dia Útil")
        break;
    case 5:
        console.log("Quinta-Feira", "Dia Útil")
        break;
    case 6:
        console.log("Sexta-Feira", "Dia Útil")
        break;
    case 7:
        console.log("Sábado", "Fim de Semana")
        break;

    default:
        console.log("Sábado", "Fim de Semana")
        break;
}//Quinta-Feira Dia Útil

//Cria um programa que compara três números e indica o maior dos três, considerando todas as possibilidades (números iguais, números negativos).

let number1 = 8;
let number2 = -3;
let number3 = 4;

console.log(Math.max(number1, number2, number3)); //8

if (number1 > number2 && number1 > number3) {
    console.log("O maior é:", number1);
} else if (number2 > number1 && number2 > number3) {
    console.log("O maior é:", number2);
} else if (number3 > number1 && number3 > number2) {
    console.log("O maior é:", number3);
} //O maior é: 8

/////////////////////////////////////////////////////////////////////////////

//While e For Loop:


//Escrever um ciclo while para imprimir números de 1 a 10.
let i = 0;
while (i < 10) {
    console.log(i++);
}
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9

//Escrever um ciclo for para imprimir números pares de 2 a 20.
let p = 0;
while (p < 20) {
    console.log((p += 2));
}
//2
//4
//6
//8
//10
//12
//14
//16
//18
//20

//Escrever um ciclo for para iterar através de um Array e imprimir cada elemento.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let a = 0; a < array.length; a++) {
    const element1 = array[a];
    console.log(element1);
}
//1
//2
//3
//4
//5
//6
//7
//8
//9

//Escrever um ciclo for para iterar através de um Array e imprimir apenas os números ímpares.
for (let a = 0; a < array.length; a++) {
    let elePar = array[a];
    if (array[a] % 2 === 0) {
        console.log(elePar);
    }
}
//2
//4
//6
//8

//Escrever um ciclo for para iterar através de um Array e imprimir a soma de todos os elementos.
let arraySum = 0;
for (let a = 0; a < array.length; a++) {
    arraySum += array[a];
}
console.log(arraySum); //45

////////////////////////////////////////////////////////////////////////


//Arrays:


//Declarar um array vazio e adicionar elementos nele.
let emptyArray = [];
emptyArray.push(1, 2, 3, 4, 5);
console.log(emptyArray); //[ 1, 2, 3, 4, 5 ]

//Aceder e imprimir um elemento de um array.
console.log(emptyArray[2]); //3

//Atualizar o valor de um elemento num array.
emptyArray[3] = "Cat";
console.log(emptyArray); //[ 1, 2, 3, 'Cat', 5 ]
//Remover um elemento de um array.
emptyArray.pop(4);
console.log(emptyArray); //[ 1, 2, 3, 'Cat' ]
//Iterar através de um array e imprimir cada elemento.
for (let u = 0; u < emptyArray.length; u++) {
    let emptyArrayElement = emptyArray[u];
    console.log(emptyArrayElement);
}
//1
//2
//3
//Cat

//Encontrar o valor máximo e mínimo num array
let minMaxArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]


for (let u = 0; u < minMaxArr.length; u++) {
    
    
}
//não consegui
