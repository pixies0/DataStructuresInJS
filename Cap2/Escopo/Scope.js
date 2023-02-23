//ENTENDENDO ESCOPOS

//Escopo Global
let filme = 'Senhor dos Aneis'

function harryPotterFan() {
  //Escopo Local
  const filme = 'Harry Potter'
  return filme
}

function marvelFan() {
  //Sobreescrevendo variavel de escopo global ja existente
  filme = 'Homem Aranha'
  return filme
}

console.log(filme)
console.log(harryPotterFan())
console.log(marvelFan())
console.log(filme)

/* Saída
Senhor dos Aneis
Harry Potter
Homem Aranha
Homem Aranha
*/
