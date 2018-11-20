$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

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

function buscaFrase(){
    $("#spinner").toggle();

    var fraseID = $("#frase-id").val();
    var dados = {id: fraseID};

    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        $("#erroMensagem").toggle();
        setTimeout(function(){
            $("#erroMensagem").toggle();
        },2000);
    }).always(function(){
        $("#spinner").toggle();
    })
};

function trocaFrase(data){
   var frase = $(".frase");
    frase.text(data.texto);
    console.log(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);

}