function validar(){
    var nomeColocado = document.getElementById("nome");
    var emailColocado = document.getElementById("e-mail");
    var telefoneColocado = document.getElementById("telefone");
    var mensagemEscrita = document.getElementById("mensagem");

    if(nomeColocado.value == ""){
        alert("Nome não informado");
        nomeColocado.focus();
    }

    if(emailColocado.value == ""){
        alert("E-mail não informado");
        nomeColocado.focus();
    }

    if(!emailColocado.value.includes('@')){
        alert("E-mail invalido");
        emailColocado.focus();
    }

    if(!emailColocado.value.includes('.')){
        alert("E-mail invalido");
        emailColocado.focus();
    }

    if(telefoneColocado.value == ""){
        alert("Telefone não informado");
        telefoneColocado.focus();
    }

    if(mensagemEscrita.value == ""){
        alert("Mensagem não informado");
        mensagemEscrita.focus();
}
    if(mensagemEscrita.value.includes("https")){
        alert("Esta mensagem contém um link e não é permitido");
}
}

function cron(){
    var minutoDisparado = document.getElementById("min");
    var segundoDisparado = document.getElementById("seg");

    segundoDisparado++;
    if (segundoDisparado >= 60){
        minutoDisparado++;

}
}