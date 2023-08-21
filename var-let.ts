//teste de visibilidade var e let dentro e fora do bloco



var precoVenda: number;

function calculadoraPrecoVenda(precoCusto: number) : number {
    //var precoVenda: number;

    if (precoVenda <= 100) {
        let margemLucro10: number = 10;
        precoVenda = precoCusto * (1 + (margemLucro10/100));
    }
    else if ((precoVenda > 100) && (precoVenda <= 500)) {
        let margemLucro5: number = 5;
        precoVenda = precoCusto * (1 + (margemLucro5/100));
    }
    else {
        let margemLucro2: number = 2;
        precoVenda = precoCusto * (1 + (margemLucro2/100));
    }

    return precoVenda;
}







