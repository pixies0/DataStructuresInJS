//Forma 1 - Casual
var areaCirculo = function (raio) {
  var pi = 3.14
  var area = pi * raio * raio
  return area
}

console.log(areaCirculo(8))

//Forma 2 - Abreviada e boa prática
const areaCirculo1 = raio => {
  const pi = 3.14
  const area = pi * raio * raio
  return area
}

console.log(areaCirculo1(8))

//Forma 3 - No caso de a função ter apenas uma instruçaõ abreviamos
const areaCirculo2 = raio => 3.14 * raio * raio
console.log(areaCirculo2(8))

//No caso de uma função do tipo void (vazia) usa-se...
const hello = () => console.log('Trabson')
hello()

/* Saída esperada
200.96
200.96
200.96
Trabson
*/
