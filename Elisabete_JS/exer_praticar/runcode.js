let array = [4, 1, 4, 5];
let equacao = 0;
let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);

    if (i < array.length - 1) {
        newArray.push("+");
    } else if (i === array.length - 1) {
        newArray.push("=");
    }
}
console.log(String(newArray));


/*

const element1 = array[i];
    console.log(String(element1));
    if (i < array.length) {
    console.log(String(element1 + "+"));
} else if (i > array.length) {
    console.log((element1) + "=");
}*/
//equacao += array[i]; //soma de todos os numeros do array =14

// console.log((element1) + "=" + equacao);

//até aqui consigo ver cada numero do array, cada um numa linha da console.
