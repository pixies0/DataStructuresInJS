//Podemos transformar arrays em parâmetros usando a função apply()

function soma(x, y, z) {
  return x + y + z
}

//Forma 1 - Espelhamendo (Spread)
let nums = [3, 4, 5]
console.log(soma(...nums))
/* 
O operador ... implica na redução da seguinte expressao
if (x === undefined) x = 3;
if (y === undefined) y = 4;
if (z === undefined) z = 5;
*/

//Forma 2 - Resto/Redução (Rest)
function restoParametro(x, y, ...a) {
  return (x + y) * a.length
}

console.log(restoParametro(1, 2, 'hello', true, 7))
/*
A saída esperada é 9, pois no caso do uso do operador ...
ele vai considerar o comprimento do resto dos parametros
exceto o x e y portanto 3 * 3 = 9
*/
