
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
   

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteTabela(paciente);
   

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erros");
        mensagensErro.innerHTML = "";

});

function adicionaPacienteTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

  //extraindo informações do paciente
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
   return paciente;
}

 //cria tr e td
function montaTr(paciente){

    
     var pacienteTr = document.createElement("tr");
     pacienteTr.classList.add("paciente");

     var nomeTd = montaTd(paciente.nome, "info-nome");
     var pesoTd = montaTd(paciente.peso, "info-peso");
     var alturaTd = montaTd(paciente.altura, "info-altura");
     var gorduraTd = montaTd(paciente.gordura, "info-gordura");
     var imcTd = montaTd(paciente.imc, "info-imc");


     nomeTd.textContent = paciente.nome;
     pesoTd.textContent = paciente.peso;
     alturaTd.textContent = paciente.altura;
     gorduraTd.textContent = paciente.gordura;
     imcTd.textContent = paciente.imc;
 
     //adiciona informações a tabela
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

  

     return pacienteTr;
}

//monta td da tabela
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent=dado;
    td.classList.add(classe);

    return td;

}
function validaPaciente(paciente){

    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é Invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Invalida!");
    }
    if(paciente.nome.length == 0)
    {
        erros.push("Nome não pode ser vazio");
    }
    if(paciente.gordura.length == 0){
        erros.push("gordura não pode ser vazia");
    }
    if(paciente.peso.length == 0){
        erros.push("peso não pode ser vazio");
    }
    if(paciente.altura.length == 0){
        erros.push("Peso não pode ser vazio");
    }
        return erros;
}

 function  exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
    });
 }

