const listaNumeros = [20, 50, 100, 10, 30];
 const listaStrings = ["pera", "jaca", "manga", "cereja"];
 
 //ordenando uma lista:
 const frutasOrdenadas = listaStrings.sort();
 console.log(listaStrings)
 console.log(frutasOrdenadas)
 const numOrdenado = listaNumeros.sort((a,b) => {
     if (a < b){
        return -1;
     }
    if (a > b){
        return 1
    }
    return 0

 });
 console.log(numOrdenado)

 const celulares = [
    {nome: "iphone 11", preco: 2500,qualidade: "vitrine"},
    
 ]