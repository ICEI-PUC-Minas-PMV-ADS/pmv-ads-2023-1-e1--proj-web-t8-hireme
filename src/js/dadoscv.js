let usuarioString = sessionStorage.getItem('usuario');
let usuariojson = JSON.parse(usuarioString);

window.addEventListener('load', function(){
    usuariojson.curriculos.forEach(curriculo => {
        console.log(curriculo)
    document.getElementById("idioma" ).innerHTML  = curriculo.idioma ;
    document.getElementById("proficiencia").innerHTML = curriculo.proficiencia;
    document.getElementById("curso").innerHTML = curriculo.curso;
    document.getElementById("grau").innerHTML = curriculo.grau;
    document.getElementById("instituicao").innerHTML = curriculo.instituicao;
    document.getElementById("inicio").innerHTML = curriculo.inicio;
    document.getElementById("termino").innerHTML = curriculo.termino;
    document.getElementById("cargo").innerHTML = curriculo.cargo;
    document.getElementById("empresa").innerHTML = curriculo.empresa;
    document.getElementById("descricao").innerHTML = curriculo.descricao;
    document.getElementById("comeco").innerHTML = curriculo.comeco;
    document.getElementById("saida").innerHTML = curriculo.saida;
    document.getElementById("competencia1").innerHTML =  curriculo.competencia1;
    document.getElementById("competencia2").innerHTML = curriculo.competencia2;
    document.getElementById("competencia3").innerHTML = curriculo.competencia3;
    document.getElementById("competencia4").innerHTML = curriculo.competencia4;
    document.getElementById("competencia5").innerHTML = curriculo.competencia5;
    document.getElementById("linkedin").innerHTML = curriculo.linkedin;
    document.getElementById("links").innerHTML = curriculo.links;
    document.getElementById("atual").innerHTML = curriculo.atual;
    document.getElementById("cursando").innerHTML = curriculo.cursando;
    document.getElementById("cursos").innerHTML = curriculo.cursos;
    document.getElementById("resumo").innerHTML = curriculo.resumo;
    document.getElementById("nome").innerHTML = curriculo.nome;
    document.getElementById("cargo").innerHTML = curriculo.cargo;
    document.getElementById("phone").innerHTML = curriculo.phone;
    document.getElementById("email").innerHTML = curriculo.email;
})
});

// RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}