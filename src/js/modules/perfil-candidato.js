// RESPONSIVIDADE
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

//FOTO
/*let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {
    
    if (file.files.length <= 0) {
        return;
    }
    
    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[1]);
}); */

const previewImage = document.getElementById('previewImage');
const customUpload = document.getElementById('customUpload');

uploadInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    previewImage.src = e.target.result;
    customUpload.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

customUpload.addEventListener('click', function() {
  uploadInput.click();
});


//
let usuarioString = sessionStorage.getItem('usuario');
let usuariojson = JSON.parse(usuarioString);

window.addEventListener('load', function(){
    document.getElementById("nome-candidato").innerHTML = usuariojson.nome;
    document.getElementById("email").innerHTML = usuariojson.email;
});