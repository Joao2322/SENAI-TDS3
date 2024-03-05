document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    menuButton.addEventListener('click', () => {
        navbar.classList.toggle("show-menu");
    });

    // Função para rolar para o topo da página
    document.querySelector('.footer-link[href="#home"]').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Função para rolar para a seção de produtos
    document.querySelector('.footer-link[href="#produtos"]').addEventListener('click', function(event) {
        event.preventDefault();
        const produtosSection = document.getElementById('produtos');
        produtosSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});