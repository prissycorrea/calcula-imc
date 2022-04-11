var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;


//VERIFICA SE PESO E ALTURA SÃO VÁLIDOS, RETORNA MSG DE ERRO
    if(peso < 0 || peso >= 1000) {
        console.log("Peso inválido")
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        paciente.style.backgroundColor = "lightcoral";
    }

    if(altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida.");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido")
    }

    if(alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


function validaPeso() {
    if(peso >= 0 && peso < 1000) {
        console.log("Peso inválido")
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        paciente.style.backgroundColor = "lightcoral";
    }
}