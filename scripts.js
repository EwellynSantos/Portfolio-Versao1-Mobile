// scroll.js

// Função para rolagem suave
function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth' // Isso cria a rolagem suave
        });
    }
}

// Adicione um evento de clique aos links do menu
const menuLinks = document.querySelectorAll('.cabecalho__menu__links');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão de clicar em um link
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});
