// exigi o módulo file system do node
const fs = require("fs");

// Caminho do arquivo
const caminho = __dirname + "/wordList.txt";

// Lê o arquivo
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  // Pega o conteúdo do arquivo e faz um split para quebrar as linhas e retorna um array
  const linhas = conteudo.split("\r\n");

  // Variável que contará as etapas da pesquisa binária
  let cont = 0;

  // Retorna o tamanho da lista
  console.log("Tamanho da lista: " + linhas.length);

  /* 
    Função de pesquisa binária que recebe uma lista e um item para ser
    pesquisado na lista e retorna o índice do item pesquisado na lista
  */
  const pesquisa_binaria = (lista, item) => {
    // Ordena a lista em ordem alfabética
    const lista_ordenada = lista.sort();

    // Variáveis que armazenam o menor índice e o maior índice da lista
    let menor_indice = 0;
    let maior_indice = lista_ordenada.length - 1;

    // Enquanto o menor índice for menor ou igual ao maior índice, continua a pesquisa binária
    while (menor_indice <= maior_indice) {
      cont++;

      /*
        Pega o meio da lista e arredonda para baixo (Math.floor)
        para que o índice seja inteiro e não decimal (ex: 1.5 => 1)
      */
      let meio = Math.floor((menor_indice + maior_indice) / 2);

      // Pega o chute da lista no índice do meio da lista (meio) e atribui a variável chute
      let chute = lista_ordenada[meio];

      // Se o chute for igual ao item retorna o índice do item na lista e o item pesquisado na lista
      if (chute === item) return meio + " => " + chute;

      /*
        Se o chute for maior que o item, o maior índice recebe o meio - 1 
        para que a pesquisa continue no lado esquerdo da lista
      */
      if (chute > item) maior_indice = meio - 1;

      /*
        Se o chute for menor que o item, o menor índice recebe o meio + 1 
        para que a pesquisa continue no lado direito da lista
      */
      if (chute < item) menor_indice = meio + 1;
    }

    /*
        Se o item não for encontrado na lista retorna uma mensagem 
        de erro informando que o item não está na lista
    */
    return "Este nome não está na lista!";
  };

  console.log(pesquisa_binaria(linhas, "ruel"));
  console.log("Etapas: " + cont);
});
