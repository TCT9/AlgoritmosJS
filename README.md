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
3.  Por exemplo, um servidor _X_ usa algoritmo de _ordenação por inserção_ e ele é 1000 vezes mais rápido que um servidor _Y_


