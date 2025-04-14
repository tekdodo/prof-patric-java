let livros = require("./livros.json")
function mostraLivros(){
    livros.forEach((Livro) => {
        console.log(Livro.titulo + "_" +
                    Livro.autor + "ano:" +
                    Livro.ano + "páginas:" +
                    Livro.páginas + "preço: R$ " +
                    Livro.preco)
                    
    })


}
function adicionalivro(titulo, autor, editora, ano, sinopse, paginas, genero, preco){
      livros.push({
        titulo: titulo,
        autor: autor,
        editora: editora,
        ano: ano,
        sinopse: sinopse,
        pagina: paginas,
        genero: genero,
        preco: preco,
        
      });
      console.log("Livro adicionado copm sucesso!");

}

adicionalivro("O Pequeno Principe", "Leonardo Davinci", "Tilibra", 2025, "Um príncipe que era pequeno", 1, ["terror", "webtoon", "comédia"], 500.99);
// JSON = JavaScript Object Notation
// GERA UM ARQUIVO JSON DOS LIVROS
function criarArquivo() {
    let livrosTexto = JSON.stringify(livros);
    const fs = require ('fs');
    fs.writeFileSync("livros.json", livrosTexto);
}

//criarArquivo()
mostraLivros();
