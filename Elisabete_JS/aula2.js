/*-------------------------------------------------------------
----------------------------IF ELSE--------------------------*/

/*verifica a idade, se é maior ou menor de idade*/
/*
let idade = (25);

if (idade >= 18) {
    console.log("Maior de Idade.");
} else {
console.log("Menor de Idade.")
}*/

/*ou*/

/*
if (idade >= 18) {
    console.log("Maior de Idade.");
} else if (idade <18) {
console.log("Menor de Idade.")
}*/

/*ou*/

/*
if (idade > 17) {
    console.log("Maior de Idade.");
} else {
console.log("Menor de Idade.")
}
*//*-----------------------------------------------*/

/*verifica se um nr é par ou impar*/
/*
let nr = (9);

if (nr % 2 === 0){
    console.log("Par");
} else if (nr % 2 === 1){ 
    console.log("Impar")
}
*/
/*----------------------------------------------*/
/*
Dolphins 96 108 89
Koalas 89 91 110
3 competiçoes entre si
média mais alta ganha*/
/*
let pontD1 = 96;
let pontD2 = 108;
let pontD3 = 89;

let pontK1 = 89;
let pontK2 = 91;
let pontK3 = 110;


let mediaDolphins = ((pontD1+pontD2+pontD3)/3);
let mediaKoalas = ((pontK1+pontK2+pontK3)/3);

if (mediaDolphins > mediaKoalas){
    console.log("Dolphins ganham o trofeus.")
} else if (mediaDolphins < mediaKoalas){
    console.log("Koalas ganham o trofeus.")
} else if (mediaDolphins === mediaKoalas){
    console.log("Ambos ganham o trofeus.")
}*/
/*deveria começar pelo mais especifico, "ambos ganham"*/
/*-----------------------------------------------*/
/*
90-100 - A
70-89 - B
60-69 - C
50-59 - D
0-49 - F
codigo para atribuir notas*/
/*
let aval = 74;

if (aval >= 90 || aval <=100) {
    console.log("A");
} else if (aval < 90 && aval >= 70) {
    console.log("B");
} else if (aval < 70 && aval >= 60) {
    console.log("C");
} else if (aval < 60 && aval >= 50) {
    console.log("D");
} else if (aval < 50) {
    console.log("F");
}*/





/*
--------------------------------------------------------------------
---------------------------SWITCH CASE------------------------------
*/
/*codigo que representa um mes do ano e retorna o mes correspondente
1-Janeiro, 2-Fevereiro, etc*/
/*
let nr = 1;

switch (nr) {
    case 1:
        console.log("janeiro");
        break;
    case 2:
        console.log("fevereiro");
        break;
    case 3:
        console.log("março");
        break;
    case 4:
        console.log("abril");
        break;
    default:
        console.log("invalid");
        break;
}*/

/*OPTION (ALT WIN) SHIFT SETAPARABAIXO*/
/*OPTION (ALT WIN) SHIFT SETAPARABAIXO*/
/*-------------------------------------------------
-----------------LOOPS-----------------------------*/

/*-------while loop---------*/
/*let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
console.log("go")*/


/*------loop infinito-----*/
/*
while (i <= 10) {
    console.log(i);
    i--;
}*/

/*
for (let i = 0; i < 10; i++) { //sintax numa linha só vs várias linhas do while loop
    console.log(i);
}*/

/*experiencia n\ao interessa para a aula*/
/*for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            console.log(i);
        }
    }
}*/

//exemplo dos slides
/*let total =0;
const num =10;

while (total <100){
    total += num;
    console.log("current total:", total);
}
console.log("total reached 100 or more");
*/

