
var expoente;

function Potencia(base, expoente = 2) {
     
    var resultado = 1;

    if (expoente == undefined){
        resultado = base * base;
    }
    else {
        for (var contador = 1; contador <= expoente; contador++){
            resultado = resultado * base;
        }
    }
    return resultado;
}

console.log("4^2 = " + Potencia(4));


console.log("4^3 = " + Potencia(4,3));








