let formulario = document.querySelector('#formulario2');
let boton = document.querySelector('.volverajuegar');
let volver = document.querySelector('.volver');
let n = document.getElementById('numero');

var num = parseInt(Math.random() * 10);
console.log(num);
var intentos = 0;
console.log(intentos)

console.log(boton)
boton.addEventListener('click', function(e) {
    e.preventDefault();
    num = parseInt(Math.random() * 10);
    console.log(num);
    intentos = 0;
    console.log(intentos);
    n = (0);
})
volver.addEventListener("click", function(e) {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "../html/bienvenida.html";
    })
})

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let numero = document.querySelector('#numero').value;

    if (Number(numero) > 10 || Number(numero) < 0) {
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("Estás fuera del intervalo "),
        })
    } else if (Number(numero) === num) {
        intentos = intentos + 1
        swal.fire({
            icon: "success",
            title: ("Felicidades, adivinaste en " + (intentos) + " intentos"),
        })
    } else if (Number(numero) < num) {
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("Estás por debajo"),
        })
        console.log(intentos)
    } else {
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("Te pasaste"),
        })
        console.log(intentos)
    }

})