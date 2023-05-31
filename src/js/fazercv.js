// FORMAÇÃO
document.addEventListener("DOMContentLoaded", function() {
    var adicionarFormacaoButton = document.querySelector(".adicionar-formacao");
    var formacaoContainer = document.querySelector(".formacao-container");
    var contadorFormacao = 1;
    adicionarFormacaoButton.addEventListener("click", function() {
        var novaFormacao = document.createElement("div");
        novaFormacao.innerHTML = `
        <div class="formacao-container">
        Curso: <input class="texto" type="text" id="curso" name="curso"><br>
        Instituição: <input class="texto" type="text" id="instituição" name="instituição"><br>
        Grau: <select name="grau" id="grau">
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="EnsinoMédio">Ensino Médio</option>
                <option value="Técnico">Técnico</option>
                <option value="Graduação">Graduação</option>
                <option value="Especialização">Especialização</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutorado">Doutorado</option>
                </select><br>
        Data de Início: <input type="date" id="início" name="início">
        Data de Término: <input type="date" id="término" name="término">
        <input type="radio" id="cursando" name="cursando" value="Cursando">Cursando<br>
    </div>
        `;
        formacaoContainer.appendChild(novaFormacao);
        contadorFormacao++;
    });
});

//EXPERIÊNCIA
document.addEventListener("DOMContentLoaded", function() {
    var adicionarExperienciaButton = document.querySelector(".adicionar-experiencia");
    var experienciaContainer = document.querySelector(".experiencia-container");
    var contadorExperiencias = 1;
    adicionarExperienciaButton.addEventListener("click", function() {
        var novaExperiencia = document.createElement("div");
        novaExperiencia.innerHTML = `
            <div class="experiencia-container">
                Cargo: <input class="texto" type="text" name="Cargo"><br>
                Empresa: <input class="texto" type="text" name="Empresa"><br>
                Data de Início: <input type="date" name="Início">
                Data de Saída: <input type="date" name="Saída">
                <input type="radio" name="atual" value="Atual">Atual<br>
                Descrição das atividades: <br><textarea name="texto" rows="10" cols="80"></textarea>
            </div>
        `;
        experienciaContainer.appendChild(novaExperiencia);
        contadorExperiencias++;
    });
});

// LINKS
document.addEventListener("DOMContentLoaded", function() {
    var adicionarLinkButton = document.querySelector(".adicionar-link");
    var linkContainer = document.querySelector(".link-container");
    var contadorLinks = 1;
    adicionarLinkButton.addEventListener("click", function() {
        var novoLink = document.createElement("div");
        novoLink.innerHTML = `
            <div class="link-container">
                Outro: <input class="texto" type="url" id="links" name="links"><br>   
            </div>
        `;
        linkContainer.appendChild(novoLink);
        contadorLinks++;
    });
});

//COMPETÊNCIAS
document.addEventListener("DOMContentLoaded", function() {
    var adicionarCompetenciaButton = document.querySelector(".adicionar-competencia");
    var competenciaContainer = document.querySelector(".competencia-container");
    var contadorCompetencias = 1;
    adicionarCompetenciaButton.addEventListener("click", function() {
        var novaCompetencia = document.createElement("div");
        novaCompetencia.innerHTML = `
        <div class="competencia-container">
            <input type="text" id="competência1" name="competência1">
            <input type="text" id="competência2" name="competência2">
            <input type="text" id="competência3" name="competência3">
            <input type="text" id="competência4" name="competência4">
            <input type="text" id="competência5" name="competência5"><br>
        </div>
        `;
        competenciaContainer.appendChild(novaCompetencia);
        contadorComeptencias++;
    });
});

//CURSOS E CERTIFICAÇÕES
document.addEventListener("DOMContentLoaded", function() {
    var adicionarCursoButton = document.querySelector(".adicionar-curso");
    var cursoContainer = document.querySelector(".curso-container");
    var contadorCursos = 1;
    adicionarCursoButton.addEventListener("click", function() {
        var novoCurso = document.createElement("div");
        novoCurso.innerHTML = `
            <div clas="curso-container">
                <input class="texto" type="text" id="cursos" name="cursos"><br>
            </div>
        `;
        cursoContainer.appendChild(novoCurso);
        contadorCursos++;
    });
});

// IDIOMA
document.addEventListener("DOMContentLoaded", function() {
    var adicionarIdiomaButton = document.querySelector(".adicionar-idioma");
    var idiomaContainer = document.querySelector(".idioma-container");
    var contadorIdioma = 1;
    adicionarIdiomaButton.addEventListener("click", function() {
        var novoIdioma = document.createElement("div");
        novoIdioma.innerHTML = `
            <div class="idioma-container">
                Idioma: <input type="text" id="idioma" name="idioma">
                Proficiência:
                <select name="proficiência" id="proficiência">
                    <option value="" disabled selected>Selecione uma opção</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    <option value="Fluente">Fluente</option>
                </select>
            </div>
        `;
        idiomaContainer.appendChild(novoIdioma);
        contadorIdiomas++;
    });
});