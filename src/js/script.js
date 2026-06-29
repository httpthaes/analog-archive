const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    const href = link.getAttribute("href")

    if (href === paginaAtual) {
        link.classList.add("active")
    }

});