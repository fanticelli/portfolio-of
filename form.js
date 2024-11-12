  emailjs.init("k3MmFkdjoV_ftuW7U");

  // Função para enviar o formulário
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Envie o formulário para o EmailJS
    emailjs.sendForm("form_portfolio", "template_form", this)
      .then(function(response) {
        var toast = document.getElementById("toast");
      toast.classList.add("show");

      setTimeout(function() {
        toast.classList.remove("show");
      }, 3000);
      
      }, function(error) {
        alert("Erro ao enviar mensagem: " + JSON.stringify(error));
      });
  });