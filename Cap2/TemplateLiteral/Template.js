//Recurso para criar strings sem a necessidade de concatenação

const livro = {
  nome: 'Estrutura de Dados e Algoritmos do Thomas Cormen'
}

//Forma 1 - Casual e Usando concatenação
console.log('Estou lendo ' + livro.nome)

//Forma 2 - Boa pratica e não faz uso de concatenação
console.log(`Estou lendo ${livro.nome}`)
//Repare na necessidade de usar `` (um par de crases) para utilizar o recurso
//Esse se chama Interpolação
//MUITO ÚTIL
