const fs = require("fs");
const caminho = __dirname + "/wordList.txt";

fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const linhas = conteudo.split("\r\n");
  let cont = 0;

  console.log("Tamanho da lista: " + linhas.length);

  linhas.filter((item, index) => {
    cont++;

    if (item === "blessed") console.log(index + " => " + "blessed");
    if (item === "ruel") console.log(index + " => " + "ruel");
  });

  console.log("Etapas: " + cont);
});
