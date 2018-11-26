var criaJogo = function(sprite){

    var palavraSecreta ='';
    var lacunas = [];
    var etapa = 1;

    var ganhou = function () {
        return lacunas.length
        ? !lacunas.some(function(lacuna){
            return lacuna == '';
        })
        :false;
    };

    var perdeu = function () {
       return sprite.isFinished();
    };

    var ganhouOuPerdeu = function () {
        return ganhou() || perdeu();
    };

    var reinicia = function () {
        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    var processaChute = function(chute){
        if(!chute.trim()) throw Error('chute Invalido');
        var exp = new RegExp(chute, 'gi'),
        resultado,
        acertou = false;

        while(resultado = exp.exec(palavraSecreta)){
            acertou = lacunas[resultado.index] = chute;
        };

        if(!acertou){
            sprite.nexteFrame();
        };
    };

    var criaLacunas = function(){
        lacunas = Array(palavraSecreta.length).fill('');
    };
    var proximaEtapa = function(){
        etapa = 2;
    };
    var setPalavraSecreta = function(palavra){
        if(!palavra.trim()) throw Error('Palavra Invalida');
        palavraSecreta = palavra;
        criaLacunas();
        proximaEtapa();

    };
    var getLacunas = function(){
        return lacunas;
    };
    var getEtapa = function(){
        return etapa;
    };
    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu, 
        reinicia: reinicia
    };
}