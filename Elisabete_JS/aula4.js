//ARRAYS

//declaração de array, vazio porque  não tem dados lá dentro, o array tem parenteses rectos
let coisas = [];

//cada elemento é separado por virgulas; os elementos de um array são os dados dentro do array
let pets = ["Spike", "Dobby", "Nala"];

//para aceder aos elementos do array usa-se indices, começando no 0(zero)
let firstPet = pets[0];
let secondPet = pets[1];
let thirdPet = pets[2];

//é possivel somar os valores dentro do array, temos que acede-los, usando indices
let numbers = [6, 2, 8];

const resultado = numbers[1] + numbers[2];
console.log(resultado);

//pode-se ter qualquer tipo de dados dentro de um array
let arr = [196, "Lisbon", true, 5n, null, undefined];
console.log(arr.length); //isto conta quantos elementos há dentro do array -»»6 elementos

arr[4] = "Ferrari"; //reatribuir valor a um elemento

console.log("Before", arr);
console.log("how many elements?", arr.length);
//push() //acrescenta um elemento ao fim do array
arr.push(673);
console.log("pushin'", arr);
console.log("how many elements?", arr.length);
//pop() //elimina o ultimo elemento do array(não é necessário dizer qual)
arr.pop();
console.log("What's Popin'", arr);
console.log("how many elements?", arr.length);
//remove a specific element inside the array »»removed the index 1 "Lisbon", and we just deleted that
arr.splice(1, 1);
console.log("Get Spliced", arr);
console.log("how many elements?", arr.length);

//unshift( ) »» adiciona elementos no inicio do array
//shift () »» remove o primeiro elemento dentro do array


//*********************************************************
//exercicio 1

let frutas = ["morango", "banana", "laranja"];
console.log(frutas);
frutas.push("pera");
console.log("after push", frutas);
//*************************************************** 
//exercicio 2
let numeros = [1, 2, 3, 4, 5];
console.log("antes", numeros);
numeros.pop();
numeros.push(6);
numeros.shift();
numeros.unshift(0);
numeros[2] = 10;
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
//************************************************ 
//exercicio 3
let cores = ["vermelho", "verde", "azul", "amarelo"];
console.log("antes", cores);
cores.pop();
cores.push("roxo");
cores.shift();
cores.unshift("laranja");
cores[1] = "preto";
console.log("depois", cores);
console.log(cores[0]);
console.log(cores[1]);
console.log(cores[2]);
console.log(cores[3]);

//**************************************
//titulo:
//maneira para percorrer o array
//como iterar um array ---- usa-se um for loop



let frutas1 = ["morango", "banana", "laranja"];
//indexes         0          1         2
console.log(frutas1); //["morango", "banana", "laranja"];

console.log(frutas1.length); //3 elementos

// lastIndex = »»» 2 (=) 3-1 = frutas.length
let lastIndex = frutas1.length - 1;
for (let i = 0; i < lastIndex; i++) {
    console.log(frutas1[i])
}//morango
for (let i = 1; i < lastIndex; i++) {
    console.log(frutas1[i])
}//banana
for (let i = 2; i < lastIndex; i++) {
    console.log(frutas1[i])
}//banana (BUG)


for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}//morango
//banana
//laranja
for (let i = 1; i < frutas.length; i++) {
    console.log(frutas[i])
}//banana
//laranja
for (let i = 2; i < frutas.length; i++) {
    console.log(frutas[i])
}
//laranja
// 
//---------------------

let nums1 = [40, 3, 61, 38, 17, 9];
let total = 0;

for (let i = 0; i < nums1.length; i++) {
    total += nums1[i];
    //total = total + nums[i]
}
console.log("total da soma", total);

//---------------
//array como argumento de uma função:

//print all elements
//definir a função (é a formula, digamos)
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);;
    }
}
printArray(nums1);
//40
//3
//61
//38
//17
//9


//TODO:
//create a function to run through an Array, then check if each element of the array, print "Odds: number(values)" or "Evens: number(values)" accordingly.
let nums = [40, 3, 61, 38, 17, 9];

//to print the array
function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);;
    }
}
printArray(nums);

//percorrer o array
function checkArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            console.log("Evens:", nums[i]);
        } else {
            console.log("Odds:", nums[i]);
        }
    }
}

checkArray(nums);


//***********************
//  correção
function checkEvenOdd(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(`evens:${array[i]}`);
        } else {
        } console.log(`odds: ${array[i]}`);
    }
}


checkEvenOdd(nums);

//OBJETOS
//os valores podem ser do tipo que quisermos

const persona = {
    firstName: "João",
    age: 30,
    pets: ["Bobi", "Pulgas"],
    location: "Lisbon",
    parents: {
        father: "Manel",
        //tambem dá: {firstName: "Manel", age: 59} »» objeto dentro de objeto
        mother: "Maria"
    }
}
console.log(persona); //(tudo o que está dentro da const person)
console.log(persona.age);//30
console.log(persona.pets[1]);//Pulgas
console.log(persona.parents.father);//Manel
//empty object
const car1 = {};
//let ou const dá, com chavetas é um objeto; as prorpiedades dentro do objeto podem mudar dentro do objeto

const car2 = {
    brand: "Ferrari",
    model: "F40"
};
console.log(car2); //{ brand: 'Ferrari', model: 'F40' }
car2.topSpeed = 280;
console.log(car2); //{ brand: 'Ferrari', model: 'F40', topSpeed: 280 }
car2.topSpeed = 310;
console.log(car2); //{ brand: 'Ferrari', model: 'F40', topSpeed: 310 }
delete car2.brand; //{ model: 'F40', topSpeed: 310 }
console.log(car2);
//delete apaga a *propriedade* de um objeto
//se dentro do objeto há uma array, temos que usar "os códigos" específicos para os arrays 
// x.y.length »» 2
// x.y.pop()

//**************************************************
// Exercicio objetos 1 

const person = {
    name: "João",
    age: 25
}
console.log(person); //{ name: 'João', age: 25 }
//*********************

const car = {
    brand: "Mercedes-Benz",
    model: "250D (W124)",
    year: 1990,
    color: "Barolo Red"
}
console.log(car);
/*{
    brand: 'Mercedes-Benz',
    model: '250D (W124)',
    year: 1990,
    color: 'Barolo Red'
  }*/
car.color = "Blue"
console.log(car);

/*{
 brand: 'Mercedes-Benz',
 model: '250D (W124)',
 year: 1990,
 color: 'Blue'
}*/
car.kmsTotal = 357020;
console.log(car);
/*{
  brand: 'Mercedes-Benz',
  model: '250D (W124)',
  year: 1990,
  color: 'Blue',
  kmsTotal: 357020
}*/

//*****************
// another example:

const bike = {
    brand: "Yamaha",
    model: ["DT", "DT2"],
    topSpeed: 200,
};

console.log("Before deleting", bike);
//Before deleting { brand: 'Yamaha', model: [ 'DT', 'DT2' ], topSpeed: 200 }
deleteObjProp(bike, "topSpeed"); //attention, use these ""; use the function below to define deleteObjProp; or the code will give error
console.log("After deleting", bike);
//After deleting { brand: 'Yamaha', model: [ 'DT', 'DT2' ] }

function deleteObjProp(obj, prop) {
    delete obj[prop];
}


//************************************** 
//and another example:

const player = {
    name: "Deadly_Dead69",
    hp: 100,
    level: 1,
    score: 0,
    inventory: [
        { itemType: "Sword", damage: 10, description: "Sword from a old hero" },
        { itemType: "Bow", damage: 5, description: "Bow from a retired bandit" },
    ]
}
console.log("Before\n", player);
/*
Before
 {
  name: 'Deadly_Dead69',
  hp: 100,
  level: 1,
  score: 0,
  inventory: [
    {
      itemType: 'Sword',
      damage: 10,
      description: 'Sword from a old hero'
    },
    {
      itemType: 'Bow',
      damage: 5,
      description: 'Bow from a retired bandit'
    }
  ]
}*/

levelUp();
addScore(50);

function levelUp() {
    if (player.hp < 100) {
        player.hp = 100;
    }
    player.level++;
}

function addScore(points) {
    player.score += points;
}
console.log("After\n", player)
/*
After
 {
  name: 'Deadly_Dead69',
  hp: 100,
  level: 2,
  score: 50,
  inventory: [
    {
      itemType: 'Sword',
      damage: 10,
      description: 'Sword from a old hero'
    },
    {
      itemType: 'Bow',
      damage: 5,
      description: 'Bow from a retired bandit'
    }
  ]
}
*/