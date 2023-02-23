class Livro {
  constructor(titulo, paginas, autor) {
    this.titulo = titulo
    this.paginas = paginas
    this.autor = autor
  }
  mostraTitulo() {
    console.log(this.titulo)
  }
}

let book = new Livro('O codigo da Vinci', 1000, 'Um cara ai')
console.log(book.titulo) //Mostra o titulo do Livro
book.paginas = 9999 //Atualiza os dados ja existentes
console.log(book.paginas) //Mostra o N° de páginas
