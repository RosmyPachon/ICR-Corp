const cerrarsesion = document.querySelector(".cerrarsesion");
const adivinanza = document.querySelector(".adivinanza");


cerrarsesion.addEventListener("click", function(e) {
    e.preventDefault();

    if (confirm("¿Estás seguro que deseas salir?")) {
        swal.fire({
            icon: 'success',
            title: 'Adiós, vuelva pronto',
        })
        setTimeout(() => {
            window.location.href = "../index.html";
        })
    }
})

adivinanza.addEventListener("click", function(e) {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "../html/adivinaza.html";
    })
})