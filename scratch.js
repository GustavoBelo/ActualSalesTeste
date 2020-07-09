let regiao = document.getElementsByName("regiao").onchange = function() {
    mudaValor();
};

function mudaValor() {

    var x = document.getElementById("unidade");
    var y = document.getElementById("regiao");
    var opcao = y.value;

    switch (opcao) {
        case 'Sul':
            document.getElementById("u0").style.display = "inline";
            document.getElementById("u1").style.display = "inline";
            document.getElementById("u2").style.display = "inline";
            document.getElementById("u3").style.display = "none";
            document.getElementById("u4").style.display = "none";
            document.getElementById("u5").style.display = "none";
            document.getElementById("u6").style.display = "none";
            document.getElementById("u7").style.display = "none";
            document.getElementById("u8").style.display = "none";
            document.getElementById("u9").style.display = "none";
            x.value = "porto", "curitiba";
            break;
        case 'Sudeste':
            document.getElementById("u0").style.display = "inline";
            document.getElementById("u1").style.display = "none";
            document.getElementById("u2").style.display = "none";
            document.getElementById("u3").style.display = "inline";
            document.getElementById("u4").style.display = "inline";
            document.getElementById("u5").style.display = "inline";
            document.getElementById("u6").style.display = "none";
            document.getElementById("u7").style.display = "none";
            document.getElementById("u8").style.display = "none";
            document.getElementById("u9").style.display = "none";

            x.value = "saoPaulo", "rioJaneiro", "beloHorizonte";
            break;
        case 'Centro-Oeste':
            document.getElementById("u0").style.display = "inline";
            document.getElementById("u1").style.display = "none";
            document.getElementById("u2").style.display = "none";
            document.getElementById("u3").style.display = "none";
            document.getElementById("u4").style.display = "none";
            document.getElementById("u5").style.display = "none";
            document.getElementById("u6").style.display = "inline";
            document.getElementById("u7").style.display = "none";
            document.getElementById("u8").style.display = "none";
            document.getElementById("u9").style.display = "none";
            x.value = "brasilia";
            break;
        case 'Nordeste':
            document.getElementById("u1").style.display = "none";
            document.getElementById("u2").style.display = "none";
            document.getElementById("u3").style.display = "none";
            document.getElementById("u4").style.display = "none";
            document.getElementById("u5").style.display = "none";
            document.getElementById("u6").style.display = "none";
            document.getElementById("u7").style.display = "inline";
            document.getElementById("u8").style.display = "inline";
            document.getElementById("u9").style.display = "none";
            document.getElementById("u0").style.display = "inline";
            x.value = "salvador", "recife";
            break;
        case 'Norte':
            document.getElementById("u0").style.display = "none";
            document.getElementById("u1").style.display = "none";
            document.getElementById("u2").style.display = "none";
            document.getElementById("u3").style.display = "none";
            document.getElementById("u4").style.display = "none";
            document.getElementById("u5").style.display = "none";
            document.getElementById("u6").style.display = "none";
            document.getElementById("u7").style.display = "none";
            document.getElementById("u8").style.display = "none";
            document.getElementById("u9").style.display = "inline";
            x.value = "naoPossui";
        default:
            x.value = "naoPossui";
    }
}