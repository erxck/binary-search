# Pesquisa Binária e Pesquisa Linear

> O objetivo desse projeto é comparar os algoritmos de pesquisa binária e pesquisa linear.

## Introdução

O código está comentado para que você possa entender melhor como funciona a **_pesquisa binária_**.

E também deixei uma [wordlist](https://github.com/douglasbuzatto/WordLists) com 53072 palavras para que você possa testar o algoritimo.

Para fins de desenvolvimento e teste, aconselho que instale em sua máquina o [Node.js](https://nodejs.org/en).

## Como instalar

- Para baixar o projeto, siga as instruções abaixo.

```
1. git clone https://github.com/erxck/pesquisa-binaria.git
2. cd pesquisa-binaria
```

- Para execultar o código com o [Node.js](https://nodejs.org/en) no terminal do VSCode.

`CTRL` + `ALT` + `N`

## Pesquisa Binária e Pesquisa Linear - O que são?

- A **_pesquisa binária_** é um algoritimo eficiente para encontrar um elemento em uma lista ordenada que contenha um grande número de dados (milhares ou milhões de elementos). O algoritimo funciona dividindo repetidamente a metade da lista de elementos em que o elemento pode estar até que o elemento seja encontrado.

- A **_pesquisa linear_** é um algoritimo de pesquisa que percorre uma lista sequencialmente, verificando cada elemento da lista até encontrar o elemento desejado ou até chegar ao final da lista.

## Como funciona?

A **_pesquisa binária_** usa logaritimo para determinar quantas etapas serão necessárias para encontrar o elemento desejado, e como dito acima a **_pesquisa linear_** percorre a lista sequencialmente, verificando cada elemento da lista até encontrar o elemento desejado ou até chegar ao final da lista.

| **Pesquisa linear** | **Pesquisa binária** |
| :-----------------: | :------------------: |
|      128 itens      |      128 itens       |
|          ↓          |          ↓           |
|    128 palpites     |      7 palpites      |
|  :--------------:   |  :----------------:  |
|      1.048.576      |      1.048.576       |
|        itens        |        itens         |
|          ↓          |          ↓           |
|      1.048.576      |     20 palpites      |
|      palpites       |                      |
|  :--------------:   |  :----------------:  |
|        O(n)         |      O(log2(n))      |
|  :---------------:  |  :----------------:  |

- **O(n)**: É o tempo de execução Linear.
- **O(log2(n))**: É o tempo de execução Logaritimo.

Como o logaritimo é usado na **_pesquisa binária_** para determinar quantas etapas serão necessárias para encontrar o elemento desejado?

- Se você tem uma lista de 128 elementos, então: **log2(128) = 7, pois 2^7 = 128 -> (no máximo 7 etapas)**

  `[128 itens] -> [64] -> [32] -> [16] -> [8] -> [4] -> [2] -> [1]` -> no máximo 7 etapas

- Lista de 1.024 elementos: **log2(1.024) = 10, pois 2^10 = 1.024 -> (no máximo 10 etapas)**

  `[1.024 itens] -> [512] -> [256] -> [128] -> [64] -> [32] -> [16] -> [8] -> [4] -> [2] -> [1]` -> no máximo 10 etapas

- Lista de 1.048.576 elementos: **log2(1.048.576) = 20, pois 2^20 = 1.048.576 -> (no máximo 20 etapas)**

  `[1.048.576 itens] -> [524.288] -> [262.144] -> [131.072] -> [65.536] -> [32.768] -> [16.384] -> [8.192] -> [4.096] -> [2.048] -> [1.024] -> [512] -> [256] -> [128] -> [64] -> [32] -> [16] -> [8] -> [4] -> [2] -> [1]` -> no máximo 20 etapas

**_log2(n) = x_**, onde **_n_** é o número de elementos da lista e **_x_** é o número de etapas necessárias para encontrar o elemento desejado.

## Exemplo

Se você tem uma lista de **_log2(n)_** elementos ordenados, e você quer encontrar um número que está dentro dessa lista, o algoritimo irá começar dividindo a lista em duas partes e verificar se o número é igual o número do meio da lista, se não for, ele irá verificar se o número é maior ou menor que o número do meio da lista, se for maior, ele irá descartar a primeira metade da lista e se for menor ele irá descartar a segunda metade da lista, e assim por diante até encontrar o número desejado.

Uma lista de 8 elementos ordenados, só precisará de no máximo 3 etapas para encontrar o número desejado.

- Uma lista com 8 elementos = [2, 5, 9, 22, 34, 56, 78, 99]
- Número a ser encontrado: 5

```
1. Dividir a lista em duas partes: [2, 5, 9, 22] e [34, 56, 78, 99]
2. Pega o número do meio da lista: 22
3. Verifica se 5 é igual ao meio da lista (22), se não for, verifica se o 5 é maior
 ou menor que o meio da lista, se for menor, descarta a segunda metade da lista e se
 for maior, descarta a primeira metade da lista.
4. Lista atual: [2, 5, 9] -> Sem o número 22, pois ele já foi verificado e não é igual ao 5.
5. Pega o número do meio da lista: 5
6. Verifica se 5 é igual ao meio da lista (5), se for, parabéns o número foi encontrado.
```

- Foi encontrado o número 5 na lista em apenas 2 etapas.

Você deve está perguntando do por quê pegamos o 22 e não o 34 para definir o meio da lista, e a reposta é simples: Uma lista de 8 elementos começa no índice 0 e vai até o indice 7 (0...7 = 8 elementos), então temos que dividir 7 / 2 que é igual a 3,5, mas como só podemos colocar no índice números inteiros, pegamos o menor número inteiro dentre o número "3,5" que é o 3, e o 3 é o índice do número 22 na lista.

## Manter contato

**Erick Nunes**

- [contatoerickrian@gmail.com](mailto:contatoerickrian@gmail.com)
- [github.com/erxck](https://github.com/erxck)
- [linkedin.com/in/erick-rian](https://linkedin.com/in/erick-rian)

E é isso! 😃💻
