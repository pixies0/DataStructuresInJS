let [x, y] = ['2', '6']
let [primeiraLetra, segundaLetra] = ['a', 'b']
let [nome, sobrenome] = ['João Pedro', 'Silva Cunha']

console.log(x, y)
console.log(primeiraLetra, segundaLetra)
console.log(nome, sobrenome)
/*
Recurso tambem usado para fazer troca de valores (swap),
sem fazer o uso de variáveis temporarias
*/
;[x, y] = [y, x]
console.log(x, y)
