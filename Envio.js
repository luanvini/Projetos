const form = document.getElementById("envio");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Formulário enviado com sucesso!");

    window.location.href = "agradecimento.html";

});