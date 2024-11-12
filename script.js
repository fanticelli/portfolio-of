document.addEventListener('DOMContentLoaded', function() {
    // Selecionar os inputs de radio
    const radios = document.querySelectorAll('input[name="controle"], input[name="slide"]');
    let currentIndex = 0; 
    const totalSlides = radios.length; 
    const slideInterval = 3000;

    // Função para mudar o slide automaticamente
    function changeSlide() {
        // Desmarcar o radio atual
        radios[currentIndex].checked = false;

        currentIndex = (currentIndex + 1) % totalSlides; // Voltar ao início se ultrapassar o total de slides

        // Marcar o próximo radio
        radios[currentIndex].checked = true;
    }

    // Iniciar a mudança de slides
    let interval = setInterval(changeSlide, slideInterval);

    // Parar o carrossel se o mouse estiver sobre o carrossel
    const carrossel = document.querySelector('.carrossel');
    carrossel.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    // Reiniciar o carrossel se o mouse sair do carrossel
    carrossel.addEventListener('mouseleave', () => {
        interval = setInterval(changeSlide, slideInterval);
    });
});

/* redimensionamento do textarea do form */
const textarea = document.getElementById('mensagem');

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px'; 
});

/* visualização das seções */
function checkVisibility() {
    const sections = document.querySelectorAll('section'); // Seleciona todas as tags <section>
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      
      // Verifica se a seção está dentro da área visível da tela
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.classList.add('visible');
      }
    });
  }
  
  // Adiciona o evento de rolagem
  window.addEventListener('scroll', checkVisibility);
  
  // Verifica a visibilidade ao carregar a página
  document.addEventListener('DOMContentLoaded', checkVisibility);