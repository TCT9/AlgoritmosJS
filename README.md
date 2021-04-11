---
Inserir equações no 'md': https://md-math.netlify.app/
O tema deve ser `DEFAULT LIGHT`: Settings > Appearance > Theme Mode
Outras alternativas em: https://gist.github.com/a-rodin/fef3f543412d6e1ec5b6cf55bf197d7b
---

# AlgoritmosJS
Uso de algoritmos em Javascript - livro ALGORITMOS 3ª edição - tradução americana (Cormen e outros).

## Capítulo 1 - O papel dos algoritmos na computação

### 1.1 Algoritmos

1. Um algoritmo transforma uma entrada, por meio de uma sequência de passos (etapas) computacionais, em uma saída. 
2. Como exemplo, considere um algoritmo que classifica em ordem crescente (transforma) uma entrada (array) de n números <a1, a2, ..., an> em uma saída ordenada, do tipo <a1', a2', ... an'> de modo que a1' < a2' < ... < an'. 
3. "Instância de um problema" é uma entrada necessária para calcular uma solução para o problema
4. Um algoritmo é "correto" se para toda instância de entrada ele produz ou pára uma saída esperada.
5. Algoritmos "incorretos" podem ser úteis, se a taxa de erro puder ser controlada, como por exemplo no cálculo de números primos grandes.
6. Grandes problemas para Ciência, Comércio, Industria (não se limitado a estas áreas) são resolvidos por meio de algoritmos eficientes e complexos. 
7. Algoritmos eficientes fazem uso de estruturas de dados adequadas aos problemas que se propõem a resolver. Por adequado, dizemos que uma estrura de dados pode ser ineficiente para um certo tipo de problema.  
8. O livro aborda algoritmos eficientes, ou seja, eficiente em termos de velocidade, isto é, quanto tempo ele gasta para produzir o resultado "correto".
9. Os problemas NP-completos são uma classe de problemas onde não se conhece nenhuma solução eficiente.
10. Um dos motivos para estudar problemas NP-completos é que eles surgem com grande frequência em aplicações reais. E alguns deles, sob certas condições, podem ter uma solução aproximada, usando como paralelo um algoritmo eficiente conhecido.
11. O capítulo 27 do livro aborda algoritmos paralelos ("multithread"), que podem ser usados para aumentar a eficiência dos algoritmos. 

### 1.2 Algoritmos como tecnologia

1. Não adianta ter um sistema com boa engenharia de software, se os algoritmos que ele utiliza não são eficientes. Se o sistema necessitar escalar, aumentar o número de usuários ou a carga de procesamento, seria de esperar que houvesse um aumento no uso de memória e processamento. Se um concorrente tem um sistema similar, mas usa algoritmos eficientes, o seu custo será menor, pois ele usará menor quantidade de memória e/ou processamento, tornando-se um risco a sua empresa.
2.  No capítulo 2 será abordado dois tipos de algoritmos de ordenação. Para ilustrar o conceito de eficiênica, considere um algoritmo de *ordenação por inserção*, que gasta um tempo ![formula](https://render.githubusercontent.com/render/math?math=c_1*n^2), onde ![formula](https://render.githubusercontent.com/render/math?math=c_1) é uma constante que não depende de *n*, que representa a quantidade de itens ordenar. O outro algoritmo é o de *ordenação por intercalação*, que gasta um tempo ![formula](https://render.githubusercontent.com/render/math?math=c_2*n*lg(n)) para ser executado. Neste caso ![formula](https://render.githubusercontent.com/render/math?math=c_2) também não depende de *n* e ![formula](https://render.githubusercontent.com/render/math?math=lg(n)%20=%20log_2(n)). Quando *n* tende a valores muitos altos, na ordem de milhões ou bilhões de dados a ordenar, o algoritmo de *ordenação por inserção* gastará **um tempo muito maior** do que o algoritmo de *ordenação por intercalação*.
3. No livro cita a diferença entre um computador que executa 1000 vezes mais instruções por segundo do que o outro. Mas esse mais rápido está usando um algoritmo de *ordenação por inserção*, enquanto o mais lento, uma *ordenação por intercalação*. Resultado: o mais rápido gasta 5,5 horas para ordenar 10 milhões de números, enquanto o mais lento gasta menos de 20 minutos! Ou seja, poderíamos gastar menor no servidor se houvesse um algoritmo mais apropriado para a tarefa em questão!
4. Foi desenvolvido, para estudo neste capítulo, dois algoritmos. O primeiro é [root_function](https://github.com/TCT9/AlgoritmosJS/blob/main/algoritmosCap1.js) calcula uma a raíz de uma equação usando o *método das secantes*. O segundo é [fn1_isGreaterThan_fn2_if_x_is](https://github.com/TCT9/AlgoritmosJS/blob/main/algoritmosCap1.js) que calcula o valor de x, para o qual, fn1(x) é maior do que fn2(x), usando um algoritmo de *pesquisa binária*. Este último será útil no momento que quisermos saber para qual valor de x uma função de *tempo de execução* será maior do que outra. Como exemplo, neste capítulo há o exercício 1.2-2, que solicita saber para qual valor de n, <img alt="formula" src="https://render.githubusercontent.com/render/math?math=8*n^2%20>%2064*n*log_2(n)" /> será maior. Desta forma, o uso da função *fn1_isGreaterThan_fn2_if_x_is* resolve devolvendo um valor real de n. Basta aproximar para o próximo inteiro e a resposta do exercício será encontrada.

## Capítulo 2 - Dando partida

### Ordenação por inserção

1. Alguns novas terminologias serão abordadas neste capítulo, e elas serão úteis para determinar se um algoritmo funciona corretamente ou não.
2. A primeira análise será do algoritmo por *ordenação por inserção* recebe uma sequência de n números (como um array em Javascript) to tipo <a1, a2, ..., an>  e retorna uma saída <a1', a2', ..., an'>, de modo que a1' <= a2' <= ... <= an'.
3. A forma de executar o algoritmo é similar ao modo como ordenamos as cartas de baralho na mão. Inicialmente sua mão esquerda está vazia. Com a direita nos pegams uma carta do topo da pilha e a movemos para a mão esquerda. Se movemos apenas uma carta e paramos, essa carta está automaticamente ordenada! Mas vamos supor que não paramos na primeira carta da mão esquerda. Mais uma carta carta é retirada do topo da pilha. Comparamos a carta da mão esquerda com a que temos na mão direita. Se a carta da mão direita for menor, que a da mão esquerda, ela será posta à frente.
Exemplo:
```

Mão esquerda: 6
Mão direita: 4
ENQUANTO 4 < 6    // verdadeiro
  4 fica mais à esquerda
  pegar uma carta mais à equerda
  
```

Agora nossa mão esquerda está com 4 e 6. Vamos retirar outra carta do topo da pilha, logo a mão direita vai ficar com, por exemplo, a carta 5. Ela deverá ser comparada com a maior carta (a mais a direita) até a menor carta. Deve-se seguir comparando a carta 5 com as maiores cartas da mão esquerda. Caso se encontre uma carta que não seja menor do que 5, deve-se parar a comparação.

```

Mão esquerda: 4 e 6
Mão direita: 5
//No loop 1
ENQUANTO 5 < 6          // verdadeiro
  5 fica mais à esquerda
  pegar uma carta mais à equerda

Mão esquerda: 4, 5 e 6
//No loop 2
ENQUANTO 5 < 4        // falso
  5 fica mais à esquerda
  pegar uma carta mais à equerda

```
Como 5 não é menor do que 4, para-se a comparação. E a mão esquerda fica: 4,5 e 6. Vamos supor supor que a próxima carta no topo da pilha seja 10. Logo a mão direita vai estar com a carta 10. Vamos compará-la com as cartas da mão esquerda.

```

Mão esquerda: 4, 5 e 6
Mão direita: 10
//No loop 1
ENQUANTO 10 < 6          // falso
  10 fica mais à esquerda
  pegar uma carta mais à equerda

```

Como 10 não é menor do 6, 10 ficará a direita de 6. Com isso, na mão esquerda teremos: 4,5,6 e 10. A próxima no topo da pilha é outro 5.

```

Mão esquerda: 4, 5, 6 e 10
Mão direita: 5
//No loop 1
ENQUANTO 5 < 10          // verdadeiro
  5 fica mais à esquerda
  pegar uma carta mais à equerda

Mão esquerda: 4, 5, 6 e 10
Mão direita: 5
//No loop 2
ENQUANTO 5 < 6          // verdadeiro
  5 fica mais à esquerda
  pegar uma carta mais à equerda

Mão esquerda: 4, 5, 6 e 10
Mão direita: 5
//No loop 3
ENQUANTO 5 < 5          // falso
  5 fica mais à esquerda
  pegar uma carta mais à equerda

```

Como o novo 5 não é menor do 5 que já existia, o novo 5 ficará a direita do 5 que já existia. Com isso, na mão esquerda teremos: 4, 5, 5, 6 e 10. 

Vejamos o algoritmo em Javascript:

![insertion-sort](https://github.com/TCT9/AlgoritmosJS/blob/main/insertion-sort3.png)

Veja como o algoritmo acima funciona até ordenar um vetor.

![ilustracao-insertion-fig1](https://github.com/TCT9/AlgoritmosJS/blob/main/fig-insertion-loop-1.png)

O vetor ficará com: 4, 6, 5, 10, 5, 3 antes de começar o 2º loop.

![ilustracao-insertion-fig2](https://github.com/TCT9/AlgoritmosJS/blob/main/fig-insertion-loop-2.png)

No 2º loop, mas agora examinando agora o 2º loop while.

![ilustração-insertion-fig3-while](https://github.com/TCT9/AlgoritmosJS/blob/main/fig-insertion-loop-2-while-2.png)

Antes de começar o 3º loop o vetor tem: 4,5,6, 10, 5, 3

![ilustração-insertion-fig3-while](https://github.com/TCT9/AlgoritmosJS/blob/main/fig-insertion-loop-3-while-1.png)

NOte que o item 10 foi sobre-escrito.

![ilustração-insertion-fig4-while](https://github.com/TCT9/AlgoritmosJS/blob/main/fig-insertion-loop-3-while-1.png)


