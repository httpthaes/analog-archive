const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    const href = link.getAttribute("href")

    if (href === paginaAtual) {
        link.classList.add("active")
    }

});

const time = document.querySelector(".time")

function formatarHora(hora) {
    return hora.toString().padStart(2, '0')
}

function atualizarHora() {
    const horaAtual = new Date()

    const hours = horaAtual.getHours()
    const minutes = horaAtual.getMinutes()
    const seconds = horaAtual.getSeconds()

    time.innerHTML = `${formatarHora(hours)}:${formatarHora(minutes)}:${formatarHora(seconds)}`
}

setInterval(atualizarHora, 1)