
function ImprimirMensagem(valor) {

    var retorno = true;

    switch(typeof valor){
        case "string": console.log(valor);
        break;

        case "number": switch(valor) {
            case 1: console.log("Natureza de operação inválida!");
            break;

            case 2: console.log("Natureza de operação inválida!2");
            break;
            case 3: console.log("Natureza de operação inválida!3");
            break;
            case 4: console.log("Natureza de operação inválida!4");
            break;
             case 5: console.log("Natureza de operação inválida5!");
            break;
            case 6: console.log("Natureza de operação inválida!6");
            break;
            default: console.log("Parâmetro inválido!");
                retorno = false;
            }
            
                break;
                default: console.log("Parâmetro inválido");
            retorno = false;
        }
    return retorno;
}
            
ImprimirMensagem(4);
ImprimirMensagem("Usuário não autorizado!");















