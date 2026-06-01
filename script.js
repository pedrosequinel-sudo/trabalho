document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Rolagem Suave Dinâmica ao clicar no botão "Descubra a Tecnologia"
    const btnSaibaMais = document.getElementById("btn-saiba-mais");
    const secaoTecnologia = document.getElementById("tecnologia");

    if (btnSaibaMais && secaoTecnologia) {
        btnSaibaMais.addEventListener("click", function() {
            secaoTecnologia.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Efeito de Opacidade Dinâmica no Menu Superior ao Rolar a Página
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#070f18"; // Escurece levemente o menu
            header.style.padding = "15px 0"; // Reduz a altura para ficar mais compacto
        } else {
            header.style.backgroundColor = "#0d1b2a"; // Volta ao tom padrão original
            header.style.padding = "20px 0";
        }
    });

    // 3. Animação Simples de Entrada nos Cards (Efeito de Revelação)
    const cards = document.querySelectorAll(".card");
    
    const animarCards = () => {
        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // Se o card estiver visível na janela do navegador
            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    // Configuração inicial para a animação dos cards
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Executa ao carregar e ao rolar a página
    window.addEventListener("scroll", animarCards);
    animarCards(); // Dispara uma vez caso elementos já estejam na tela
});
