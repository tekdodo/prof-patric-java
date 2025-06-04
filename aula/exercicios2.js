// Exercícios de fixação

const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];

// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"

const indiceChelo = furiaCS.indexOf("chelo");
console.log("Índice de chelo:", indiceChelo);

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1

furiaCS.splice(indiceChelo, 2, "molodoy", "YEKINDAR");
console.log("Array atualizado de jogadores:", furiaCS);

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)

const nomesMaiusculos = furiaCS.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos

const nomesOrdenados = nomesMaiusculos.sort();
console.log("Nomes ordenados em maiúsculas:", nomesOrdenados);

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"

const nomesComY = furiaCS.filter(nome => nome.toLowerCase().startsWith("y"));
console.log("Nomes que começam com 'y':", nomesComY);

