// DADOS PERFIL
const container = document.getElementById('container');
const cargo = document.getElementById('cargo');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const residencia = document.getElementById('residencia');
const emprego = document.getElementById('emprego');


container.addEventListener('submit', function () {
    let usuarioString = sessionStorage.getItem('usuario');
    let usuariojson = JSON.parse(usuarioString);

    console.log(usuariojson);

    const infosJson = {
        "cargo": cargo.value,
        "email": email.value,
        "phone": phone.value,
        "residencia": residencia.value,
        "emprego": emprego.value,
    }
    usuariojson.infos.push(infosJson) 
    console.log(usuariojson)
    sessionStorage.setItem('usuario', JSON.stringify(usuariojson))

    let usuariosJson = JSON.parse(localStorage.getItem('db_usuarios'))
    usuariosJson.usuarios.forEach(usuario => {
        if (usuario.email == usuariojson.email && usuario.senha == usuariojson.senha) {
            usuario.curriculos.push(curriculoJson)
        }
    })

    localStorage.setItem('db_usuarios', JSON.stringify(usuariosJson));
    console.log(usuariojson)
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