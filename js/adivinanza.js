let formulario = document.querySelector('#formulario2');
let boton = document.querySelector('.volverajuegar');
let volver = document.querySelector('.volver');

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
})

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let numero = document.querySelector('#numero').value;
    if (Number(numero) === num) {
        intentos = intentos + 1
        swal.fire({
            icon: "success",
            title: ("Felicidades, adivinaste en " + (intentos) + " intentos"),
        })
    } else if (Number(numero) < num) {
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("estas por debajo"),
        })
        console.log(intentos)
    } else {
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("te pasaste"),
        })
        console.log(intentos)
    }
})

volver.addEventListener("click", function(e) {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = "../html/bienvenida.html";
    })
})