function main() {

    let form = document.getElementById("formJobs"); 

    
    form.addEventListener("submit", (e) => {

        let verifica01 = verificandoTituloVaga();
        let verifica02 = verificandoSelectTipo();
        let verifica03 = verificandoSelectCategoriaVaga();
        let verifica04 = verificandoSelectSalario();
        
        if(verifica01 == true && verifica02 == true && verifica03 == true && verifica04 == true) {

        }else {
            e.preventDefault()
        }
    });

}

function verificandoTituloVaga(){
    let tituloVaga = document.getElementById("nomeVaga")
    let tituloVagaBorda = document.querySelectorAll(".bars-inputs")[2]
    let erroMessage = document.querySelectorAll(".erro-message")[0]
    
    if(tituloVaga.value.length > 0 ){
        tituloVagaBorda.classList.remove("erro-borders");
        return true;
    }else {
        tituloVagaBorda.classList.add("erro-borders");
        erroMessage.style.display = "block";
        return false;
    }

}

function verificandoSelectTipo(){
    let tituloVaga = document.getElementById("tipoVaga")
    let erroMessage = document.querySelectorAll(".erro-message")[1]
    
    if(tituloVaga.options[tituloVaga.selectedIndex].text != "Selecione um tipo"){
        alert("Tudo certo com o campo Titulo da vaga")
        return true;
    }else {
        tituloVaga.classList.add("erro-select");
        erroMessage.style.display = "block";
        return false;
    }

}

function verificandoSelectCategoriaVaga(){
    let tituloVaga = document.getElementById("categoriaVaga")
    let erroMessage = document.querySelectorAll(".erro-message")[2]
    
    if(tituloVaga.options[tituloVaga.selectedIndex].text != "Selecione um tipo"){
        alert("Tudo certo com o campo Titulo da vaga")
        return true;
    }else {
        tituloVaga.classList.add("erro-select");
        erroMessage.style.display = "block";
        return false;
    }
}

function verificandoSelectSalario(){
    let verifying = false;
    let tituloVaga = document.getElementById("salario")
    let erroMessage = document.querySelectorAll(".erro-message")[3]
    let inputHidden = document.querySelector("#pretensaoSalarial")

    let tituloVagaBorda = document.querySelectorAll(".bars-inputs")[3]
    
    if(tituloVaga.options[tituloVaga.selectedIndex].text != "Selecione um tipo"){
        alert("Tudo certo com o campo Titulo da vaga")
        verifying = true;
    }else if(tituloVaga.options[tituloVaga.selectedIndex].text == "Enviar Pretensão salarial"){

        if(inputHidden.value.length == 0){
            verifying = false;
        }else if(inputHidden.value.length > 0){
            verifying = true;
        }

    }else {
        tituloVaga.classList.add("erro-select");
        erroMessage.style.display = "block";
        verifying = false;
    }  
    
    return verifying;
    
}

function changeColorFieldHidden() {
    let inputHidden = document.querySelector("#pretensaoSalarial")
    let tituloVagaBorda = document.querySelectorAll(".bars-inputs")[3]

    if(inputHidden.value.length == 0){
        tituloVagaBorda.classList.add("erro-borders");
        
    }else if(inputHidden.value.length > 0){
        tituloVagaBorda.classList.remove("erro-message");
    }
}

function showTheHiddenField(){
    let tituloVaga = document.getElementById("salario")
    let hiddenField = document.querySelector("#hidden")
    
    if(tituloVaga.options[tituloVaga.selectedIndex].text == "Enviar Pretensão salarial"){
        hiddenField.style.display = "block";
    } else {
        hiddenField.style.display = 'none';
    }

}