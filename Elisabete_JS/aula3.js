//blocos de funçao
function saudacao(nome) { //nome é um parametro
    console.log(`Olá, ${nome}!`);
}

function countdown() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}

//chamar or executar a funçao
saudacao(`Ellie`); //Ellie é um argumento
saudacao(`pessoa1`);
saudacao(`pessoa2`)
countdown();

//Math.random() - random é uma funçao da classe Math

//Return - dá acesso ao resultado do calculo no codigo JS; o console.log dá o resultado na consola

function getProduct(a, b) {
    return a * b;
}

function getProduct(a, b) {
    let produto = a * b; //esta variavel é so daqui de dentro da function, scope local
    return produto;
}

console.log(
    product(3, 2)
);//6

let resultado = product(3, 5);
console.log(resultado); //15

//uma variavel fora da funçao, é scope global e pode ser usada dentro e fora das funçoes

//havendo uma local e uma global, a local tem prioridade
//os nomes das funçoes devem começar por um verbo, tmb usa camelCase


//******Exercicios************

function getStringLength(string) {
    return string.length
}
console.log(
    getStringLength("Bytes4Future") //12 carateres
);

function getStringLength(value) {
    if (typeof (value) === "number") {
        return;//neste caso o return sai desta funcao
    }
    return value.length

}

console.log(
    getStringLength("Bytes 4 Future") //14 carateres
);//isto tambem contabiliza os espaços dentro da string
console.log(
    getStringLength("4")// 1 carater
);
console.log(
    getStringLength(4) //undefined
);

//******** exercicio2 *********
//calculaAreaRetangulo //base*altura
/*let base = 5;
let altura = 6;

function calculaAreaRetangulo (base, altura){
    return (base * altura);
}

console.log (
    `a area é: ${calculaAreaRetangulo (base, altura)}`);*/

//apesar de constar base, altura (que corresponde a 5 e 6 respetivamente), ao fazer console.log obtemos o resultado do calculo, que é feito dentro do return


//********exercicio 3************

let nome = "Bytes";
let idade = "7";

function concatenarStrings(nome, idade) {
    return (`olá, o meu nome é ${nome} e tenho ${idade} anos.`);
}
console.log(concatenarStrings(nome, idade));

function concatenarStrings1(nome, idade) {
    return (nome + " " + idade);
}

console.log(concatenarStrings1(nome, idade));

//uma funcao só tem um resultado, nao posso colocar dois returns dentro de uma funçao, nao posso ter duas funcoes iguais (com returns diferentes) o console.log vai considerar o ultimo

//******exercicio 4********** 

let a = 5;
let b = 10;
function somar(a, b) {
    return a + b;
}

let somaVar = somar(a, b);
console.log(somaVar);
//nao é assim

function somar(a, b) {
    let soma = a + b
    return soma;
}

const result = somar(5, 10);

//****************exercico 6 **********
function calcularRaizQuadrada(numberX) {
    return Math.sqrt(numberX);
}

console.log(calcularRaizQuadrada(25));

//****************exercicio 8 **************

function getMonth(month) {
    switch (month) {
        case (1):
            console.log(Janeiro);
            break;
        case (2):
            console.log(Fevereiro);
            break;
        case (3):
            console.log(Março);
            break;
        case (4):
            console.log(Abril);
            break;
        case (5):
            console.log(Maio);
            break;
        case (6):
            console.log(Junho);
            break;
        case (7):
            console.log(Julho);
            break;
        case (8):
            console.log(Agosto);
            break;
        case (9):
            console.log(Setembro);
            break;
        case (10):
            console.log(Outubro);
            break;
        case (11):
            console.log(Novembro);
            break;
        case (12):
            console.log(Dezembro);
            break;
        default:
            console.log("Input Inválido");
            break;
    }
    return; //sai da funçao
}
//outra forma de fazer era, em vez de console.log dentroe do switch colocavamos return, e assim nao era necessario return no fim do switch

//***********exercicio*************** 

function getDiaDaSemana(day) {
    switch (day) {
        case (1):
            console.log("Domingo");
            break;
        case (2):
            console.log("Segunda");
            break;
        case (3):
            console.log("Terça");
            break;
        case (4):
            console.log("Quarta");
            break;
        case (5):
            console.log("Quinta");
            break;
        case (6):
            console.log("Sexta");
            break;
        case (7):
            console.log("Sábado");
            break;
        default:
            console.log("Input Inválido");
            break;
    }
    return;
}
console.log(getDiaDaSemana(2));