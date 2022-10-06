const usuario = document.getElementById("user");
const contraseña = document.getElementById("contraseña");
const form1 = document.querySelector(".btnIngresar");

let usuarioBD = "10675"
let contraseñaBD = "57601"
let extraerU = usuarioBD.slice(0, 1)
let extraerC = contraseñaBD.slice(0, 1)


form1.addEventListener("click", function(e) {
    e.preventDefault();

    if (usuario.value !== usuarioBD || contraseña.value !== contraseñaBD) {
        Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Oh no, algo está mal',
                footer: '<a>Vuelve a ingresar correctamente los campos</a>'
            })
            //alert("Por favor vuelve a llenar los campos de manera correcta.")
        return
    }
    swal.fire({
            icon: 'success',
            title: "Datos ingresados correctamente",
            text: "Para completar tu ingreso realiza la suma",
            background: "width",
        })
        //  alert ("Datos ingresados correctamente, para completar tu ingreso realiza la suma. ")
    mostrarCapchat(extraerU, extraerC);

})

const mostrarCapchat = (extraerU, extraerC) => {
    // Pintar el formulario

    const capchat = document.querySelector(".login2");

    capchat.innerHTML = `
                            <form class="contenedor2" id="contenedor2">
                                <h1 class="form-title">Validación</h1>
                                <div class="form-suma">
                                <div id="sumas"></div>
                                <input type="number" placeholder="" id="suma">
                                </div>
                                <button class="btn2" id="inicio">Iniciar</button>
                            </form>
                          `
        // Fin

    sumas.textContent = (`${extraerU}+${extraerC}`);

    const form2 = document.querySelector(".btn2");

    form2.addEventListener("click", function(e) {
        e.preventDefault();

        const suma = document.getElementById("suma").value;
        const resultado = Number(extraerU) + Number(extraerC)
        if (suma != resultado) {
            Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Suma incorrecta',
                })
                //alert("Respuesta incorrecta")
            return
        }
        swal.fire({
            icon: 'success',
            title: "Bienvenido",
            text: "Sesión iniciada",
            background: "width",
        })
        setTimeout(() => {
            window.location.href = "../html/bienvenida.html";
        }, 2000);
    })
}