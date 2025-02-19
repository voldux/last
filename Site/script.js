// Interatividade com o botão "Saiba Mais"
const botaoSaibaMais = document.querySelector("#banner button");

botaoSaibaMais.addEventListener("click", function() {
    window.location.href = "pagina-sobre-nos.html";
});

// Efeito de rolagem (parallax) no banner
let scrollY = window.scrollY;
let banner = document.getElementById("banner");

function atualizarParallax() {
    banner.style.backgroundPositionY = scrollY * 0.5 + "px";
}

window.addEventListener("scroll", function() {
    scrollY = window.scrollY;
    requestAnimationFrame(atualizarParallax);
});

// Animação de entrada suave nos elementos
const elementos = document.querySelectorAll("section, #banner, footer");

elementos.forEach(elemento => {
    elemento.style.opacity = 0;
    elemento.style.transition = "opacity 1s ease";

    window.addEventListener("scroll", function() {
        let elementoTop = elemento.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (elementoTop < windowHeight * 0.8 && !elemento.classList.contains("animado")) {
            elemento.style.opacity = 1;
            elemento.classList.add("animado");
        }
    });
});
