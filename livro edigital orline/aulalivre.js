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

// JSON = JavaScript Object Notation
// GERA UM ARQUIVO JSON DOS LIVROS
function criarArquivo() {
    let livrosTexto = JSON.stringify(livros);
    const fs = require('fs');
    fs.writeFileSync("livros.json", livrosTexto);
}

//criarArquivo()
mostraLivros();

