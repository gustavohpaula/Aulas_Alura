$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria(){
    $("#spinner").show();
    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        $("#erroMensagem").toggle();
        setTimeout(function(){
            $("#erroMensagem").toggle();
        },2000);
      
        })
        .always(function(){
            $("#spinner").hide();
        })
}

function trocaFraseAleatoria (data){
    var frase = $(".frase");
    var numeroAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
};