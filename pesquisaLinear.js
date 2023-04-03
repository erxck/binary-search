const fs = require("fs");
const caminho = __dirname + "/wordList.txt";

fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const linhas = conteudo.split("\r\n");
  let cont = 0;

  console.log("Tamanho da lista: " + linhas.length);

  const pesquisa_linear = (lista, pesquisa) => {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === pesquisa) return i + " => " + lista[i];
      cont++;
    }

    return "Item não encontrado";
  };

  console.log(pesquisa_linear(linhas, "ruel"));
  console.log("Etapas: " + cont);
});
