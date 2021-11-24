function main() {
    let form = document.querySelector("formJobsContact");
    let verificando01 = verificandoNome();
    let verificando02 = verificandoEmail(); 
    let verificando03 = verificandoTextArea(); 


    form.addEventListener("submit", e => {
        if(verificando01 == true && verificando02 == true && verificando03 == true) {
    
        }else {
            e.preventDefault();
        }
    })

}

function verificandoNome() {

    let nomeCampo = document.getElementById('nomePessoa')
    let alertBorder = document.querySelectorAll('.bars-inputs')[0]
    let message = document.querySelectorAll('.message')[0]

    if (nomeCampo.value.length == 0) {
        alertBorder.classList.add(".erro-borders");
        message.style.display = 'block';
    } else {
        alertBorder.classList.remove(".erro-borders");
        message.style.display = 'none';
    }
}

function verificandoEmail() {
    let email = document.querySelector('#email')
    let alertBorder = document.querySelectorAll('.bars-inputs')[1];
    let message = document.querySelectorAll('.message')[1];

    if (email.value.length > 0) {
        alertBorder.classList.remove(".erro-borders");
        message.style.display = 'none';

        return true;
    } else {
        alertBorder.classList.add(".erro-borders");
        message.style.display = 'block';
        return false;
    }

}

function verificandoTextArea() {

    let textArea = document.querySelector("#mensagem");
    let message = document.querySelectorAll(".message")[2];
    
    if(textArea.value.length > 0){
        textArea.style.borderColor = "black";
        message.style.display = 'none';
        
        return true;
    } else {
        textArea.style.borderColor = "red";
        message.style.display = 'block';

        return false;
    }


}


