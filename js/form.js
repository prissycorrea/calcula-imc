//EVENTO DE ADICIONAR O PACIENTE
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    //EXTRAI VALORES/INFORMAÇÕES DO PACIENTE DO FORM
    var paciente = obtemPacienteDoFormulario(form);

    //CRIA A TR E A TD DO PACIENTE
    var pacienteTr = montaTr (paciente);

    //ADICIONANDO O PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

//FUNÇÕES

//EXTRAI VALORES/INFORMAÇÕES DO PACIENTE DO FORM
function obtemPacienteDoFormulario (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

//CRIA A TR E TD DO PACIENTE
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//CRIA A TD DO PACIENTE
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

//VALIDAÇÃO DO PACIENTE
function validaPaciente(paciente) {
    if(paciente.altura < 2.0 && paciente.altura >= 0);
}