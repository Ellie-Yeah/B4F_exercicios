/*
javascript - 4 - Exercício #2

A fórmula resolvente serve para resolver equações de segundo grau.
Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos: a, b e c.
Se a equação tiver solução, deves retornar um array com as soluções possíveis.
    No indíce 0 deve estar a solução que resulta da utilização do -(menos)
    e no índice 1 deve estar a solução que resulta da utilização do + (mais).
    Se a equação não tiver solução, deves retornar o texto "Sem Solução".

Notas:
    A fórmula resolvente é utilizada para resolver equações de segundo grau, ou seja, equações com a forma 
ax^2 + bx + c = 0;
As equações de 2º grau têm duas soluções ou não têm solução. Não têm solução se o interior da raíz quadrada for menor que 0.

A fórmula resolvente é: 
x= (-b +- raiz quadrada((b^2)-(4ac))
//----------------------------------
//              (2a)
*/

let a1 = 15;
let b1 = 70;
let c1 = 10;

function formulaResolvente(a, b, c) {
    let x1 = ((-b - Math.sqrt((b ** 2) - ((4 * a) * (4 * c)))) / (2 * a));
    //console.log(x1);
    let x2 = ((-b + Math.sqrt((b ** 2) - ((4 * a) * (4 * c)))) / (2 * a));
    //console.log(x2);

    if ((((b ** 2) - ((4 * a) * (4 * c))) < 0) || (a = 0)) {
        console.log("Sem Solução");
    };
    console.log([x1, x2]);

}

formulaResolvente(a1, b1, c1);

//////////////////////////////////////////////
/*javascript - 4 - Exercício #3

O Teorema de Pitágoras permite-nos calcular a dimensão da hipotenusa de um triângulo rectângulo.

Implementa a função teoremaDePitagoras que recebe como argumento os comprimentos dos dois catetos e retorna o valor da hipotenusa.

c^2 = a^2 + b^2 ou c= raizquadrada (a^2 +b^2);
c - hipotenusa
a e b - catetos

«O teorema de Pitágoras: a soma das áreas dos quadrados construídos sobre os catetos (a e b) equivale à área do quadrado construído sobre a hipotenusa (c)»
*/

function teoremaDePitagoras(c1, c2) {
    let hipotenusa = Math.sqrt((c1 ** 2) + (c2 ** 2));
    console.log(hipotenusa);
}

teoremaDePitagoras(40, 80);
///////////////////////////////////////////////
/*javascript - 4 - Exercício #4

Implementa a função somatorio que retorna a soma de todos os valores presentes no array de números arr.*/

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function somatorio(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    console.log(soma);
}
somatorio(array4);

/////////////////////////////////////////////

