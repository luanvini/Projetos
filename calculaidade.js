function calculando(){
    //métodos de leitura dos campos no HTML
    var resultado = document.getElementById('resultadoData');
    var nascimento = document.getElementById('nascimento').valueAsDate;
    var ano = nascimento.getFullYear();
    var idadeAtual = idade(1, 1, ano);

    //método de escrita no HTML
    resultado.value = "Sua idade é " + idadeAtual +  ' anos';
}

function idade(dia, mes, ano) {
    return new Date().getFullYear() - ano;
}