const LOGIN_URL = "/src/html/login.html";

const btnCadastro = document.getElementById('btn-cadastrar');

const email = document.getElementById('nome');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirm-senha');
const usuarioOpts = document.getElementById('form-options');

btnCadastro.addEventListener('click', function() {
    let novoId = generateUUID();
    let novoUsuario = {};

    if (senha.value != confirmaSenha.value) return;
    
    if (usuarioOpts.value == "candidato") {
        novoUsuario = {
            "id" : novoId,
            "email": email.value,
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "senha": senha.value,
            "tipoUsuario": usuarioOpts.value, 
            "curriculos": []
        }
    } else {
        novoUsuario = {
            "id" : novoId,
            "email": email.value,
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "senha": senha.value,
            "tipoUsuario": usuarioOpts.value
        }
    }

    db_usuarios.usuarios.push(novoUsuario);
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

    window.location.replace(LOGIN_URL);
});