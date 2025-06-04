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

  // Ajuste automático do iframe ao conteúdo
  const iframe = document.getElementById("formulario-iframe");
  if (iframe) {
    window.addEventListener("message", (event) => {
      if (event.origin.includes("google.com") && event.data && typeof event.data === "string") {
        const match = event.data.match(/^\d+$/);
        if (match) {
          iframe.style.height = `${event.data}px`;
        }
      }
    });
  }
});
