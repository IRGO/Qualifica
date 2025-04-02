document.addEventListener("DOMContentLoaded", function () {
  console.log("Centro Qualifica de Arraiolos - Página carregada");

  // Mensagem de boas-vindas no formulário
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      alert("Obrigado por preencher o formulário! Iremos contactá-lo em breve.");
    });
  }

  // Marcar campo obrigatório que não foi preenchido
  const requiredFields = document.querySelectorAll("form [required]");
  requiredFields.forEach(field => {
    field.addEventListener("invalid", () => {
      field.classList.add("invalid");
    });
    field.addEventListener("input", () => {
      field.classList.remove("invalid");
    });
  });
});


