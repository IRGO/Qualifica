document.addEventListener("DOMContentLoaded", function () {
  console.log("Centro Qualifica de Arraiolos - Página carregada");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      alert("Obrigado por preencher o formulário! Iremos contactá-lo em breve.");
    });
  }

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


