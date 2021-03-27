
/* 
    Encontra o valor da variável dependente para que fn seja 0, ou seja,
    determina a raiz de fn, que é menor ou igual ao módulo de um delta.

    Entrada:
        varDependente: a variável dependente que será alterada
        x0: variável dependente
        x1: variável dependente
        fn: uma função cuja variável dependente seja x (x0 ou x1)
        delta_x: módulo da diferença de x0 e x1, isto é |x0 - x1|
        delta_fn: módulo da diferença de fn0 e fn1, isto é |fn(x0) - fn(x1)|
       
        O método usado é o das secantes
        Fonte: 
            https://www.inf.ufpr.br/nicolui/grad/ci202/Docs/NotasAula/Cap-04.pdf
            https://www.cin.ufpe.br/~if215/slides/2014-1/Aula%206%20-%20Secantes%20e%20Criterios%20de%20Parada.pdf

*/
function raiz_fn(fn, x0, x1, delta_x = 0.000_1, delta_fn = 0.000_010, digits = 4) {

    /*
        x_(i+1) = ( x_(i-1)*fn(x_i) - x_i*fn(x_(i-1)) ) / ( fn(x_i) - fn(x_(i-1)) )

                ou

        x_(i+1) = x2
        x_(i) = x1
        x_(i-1) = x0
        
        x2 = ( x0*fn(x1) - x1*fn(x0) / ( fn(x1) - fn(x0) )
    */

    //Calculos iniciais
    let _x0 = x0;
    let _x1 = x1;

    let fn_x0 = fn(x0);
    let fn_x1 = fn(x1);
    let x2 = (x0*fn_x1 - x1*fn_x0)/(fn_x1 - fn_x0);

    let delta_x_calc = 0;
    let delta_fn_calc = 0;

    let passos = 0;

    do {
        passos += 1;

        _x0 = _x1;
        _x1 = x2;

        delta_x_calc = Math.abs(_x0 - _x1);
        delta_fn_calc = Math.abs(fn_x0 - fn_x1);

        fn_x0 = fn(_x0);
        fn_x1 = fn(_x1);
        x2 = (_x0*fn_x1 - _x1*fn_x0)/(fn_x1 - fn_x0);
    
    }while((delta_x_calc > delta_x) && (delta_fn_calc > delta_fn))

    console.log("Passos realizados: " + passos);

    return parseFloat(Number(x2).toFixed(digits));
}

/*
    Usa pesquisa binária para determinar a partir de qual valor de x, dentro de um erro |delta|, 
    fn1 será maior do que fn2.

    Exemplo: fn1(x) = 8*x**2, fn2(x) = 64*x*log_2(x), onde log_2 é um logarítmo na base 2.
    Determinar para valor de x teremos fn1 > fn2.

    Onde 8*x**2 é o número de passos gastos por um algoritmo de ordenação por inserção.
    Já 64*x*log_2(x) é o número de passos gastos por um algoritmo de ordenação por intercalação

*/
function fn1_ehMaiorDoQue_fn2_se_x_for(fn1, fn2, x_ini, x_fin, delta_fn = 0.001, digits = 4){
    
    function fn(fn1, fn2, x){
        return fn1(x) - fn2(x);
    }

    let x = 0;

    let _x_ini = x_ini;
    let _x_fin = x_fin;
    let diferenca = 0;
    let dif_x = 0;

    x = _x_ini;
    let passos = 0;

    do {

        passos += 1;
        diferenca = fn(fn1, fn2, x);

        if (Math.abs(diferenca) <= delta_fn) {
            
            break;

        }else if (diferenca > 0){

            dif_x = x - _x_fin;
            if (Math.abs(dif_x) <= delta_fn){
                break;
            }

            _x_fin = x;
        
        } else {
            _x_ini = x;
        }

        x = (_x_fin + _x_ini)/2;

    }while (true);

    console.log("Passos: " + passos);
    return parseFloat(Number(x).toFixed(digits));
}

function funcao1(x){
    return Math.sqrt(x) - 5*Math.exp(-x);
}

function funcao2(x){
    return Math.pow(x,2) + x - 6;
}

function funcao3(x){
    return 8*Math.pow(x,2) - 64*x*Math.log2(x);
}

let x_raiz = raiz_fn(funcao1, 1, 2);
console.log("f(x) = Math.sqrt(x) - 5*Math.exp(-x), raiz = " + x_raiz);

x_raiz = raiz_fn(funcao2, 0, 4);
console.log("f(x) = Math.pow(x,2) + x - 6, raiz = " + x_raiz);

let x_maior = fn1_ehMaiorDoQue_fn2_se_x_for(

    fn1 = function(x){ 
        return 8*x**2;
    },

    fn2 = function(x){ 
        return 64*x*Math.log2(x);
    },

    2,

    100
);

console.log("fn1(x) = 8*x**2, fn2(x) =  64*x*Math.log_2(x). fn1(x) > fn2(x),  x = " + x_maior);
