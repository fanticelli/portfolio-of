document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os inputs de radio
    const radios = document.querySelectorAll('input[name="controle"], input[name="slide"]');
    let currentIndex = 0; // Índice atual dos slides
    const totalSlides = radios.length; // Total de slides
    const slideInterval = 3000; // Intervalo de tempo em milissegundos

    // Função para mudar o slide automaticamente
    function changeSlide() {
        // Desmarcar o radio atual
        radios[currentIndex].checked = false;

        // Atualizar o índice atual
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
