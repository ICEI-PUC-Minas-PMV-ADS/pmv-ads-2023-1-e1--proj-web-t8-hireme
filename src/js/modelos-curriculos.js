// BOTÃO DE DICA

function showConteudo(){
    let conteudo = document.querySelector(".conteudo");
    conteudo.style.display = "inline-grid";
}

function hideConteudo(){
    let conteudo = document.querySelector(".conteudo");
    conteudo.style.display = "none";
}

//RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}
