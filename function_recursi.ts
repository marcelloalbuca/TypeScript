
function Fatorial(numero) {
    
    var resultado;

    if(numero == 1){
    return 1; 
    }
    else {
        resultado = Fatorial(numero - 1) * numero;
        return resultado;
    }
}

console.log("Fatorial de 5 é:" + Fatorial(5));
