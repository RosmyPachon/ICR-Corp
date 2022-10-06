const cerrarsesion = document.querySelector(".cerrarsesion");
const adivinanza = document.querySelector(".adivinanza");


cerrarsesion.addEventListener("click", function(e) {
    e.preventDefault();

    if (confirm("¿Estas seguro que deseas salir?")) {
        swal.fire({
            icon: 'success',
            title: 'Adios welva pronto',
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