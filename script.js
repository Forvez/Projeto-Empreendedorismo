// AOS (animates on scroll) - Criando landing page completa do ZERO - part 02 (HTML, CSS, SASS)
AOS.init({
    duration: 1000, // Duração das animações
    easing: 'ease-in-out', // Efeito de transição
    once: true, // As animações ocorrem apenas uma vez
    disable: 'mobile', // Desativa animações em dispositivos móveis
    offset: 150, // Faz com que o conteúdo comece a animar um pouco antes
});

// Função para alterar a direção da seta
window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollPosition = window.scrollY;  // Posição atual da rolagem
    const documentHeight = document.documentElement.scrollHeight;  // Altura total da página
    const windowHeight = window.innerHeight;  // Altura da janela visível

    if (scrollPosition + windowHeight >= documentHeight) {
        // Quando o usuário estiver no final da página
        scrollIndicator.innerHTML = '&#8593;'; // Muda para seta para cima
        scrollIndicator.style.animation = 'none'; // Para a animação de bounce
        scrollIndicator.style.transform = 'translateY(0)'; // Remove o movimento de bounce
    } else {
        // Quando o usuário não estiver no final da página
        scrollIndicator.innerHTML = '&#8595;'; // Muda para seta para baixo
        scrollIndicator.style.animation = 'bounce 1.5s infinite'; // Restaura a animação
    }
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Reativa o AOS (caso as animações precisem ser recalculadas)
        setTimeout(() => {
          AOS.refresh(); 
        }, 800); // mesmo tempo da animação para garantir que a seção esteja visível
      }
    });
  });