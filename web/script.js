function login(e){
    e.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "123456Aa@"){
        window.location = "dashboard.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function mostrar(seccion){
    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(s => s.classList.add("oculto"));

    document.getElementById(seccion).classList.remove("oculto");
}