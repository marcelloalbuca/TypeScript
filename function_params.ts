


function MediaNotas(nota1, nota2, nota3, nota4){
    return (nota1 + nota2 + nota3 + nota4 )/ 4;

}



console.log("Nota 1. Trimestre: 8 ");
console.log("Nota 2. Trimestre: 7 ");
console.log("Nota 3. Trimestre: 9.5 ");
console.log("Nota 4. Trimestre: 8.5 ");

console.log("Média: " + MediaNotas(8,7,9.5,8.5));



function MediaNotas2(...notas){
    var soma = 0

    for(var contador = 0; contador < notas.length; contador++){
        soma += notas[contador];
    }
    return (soma / notas.length);
}

console.log("Nota 1. Trimestre: 8 ");
console.log("Nota 2. Trimestre: 7 ");

console.log("Média: " + MediaNotas2(8,7,));





