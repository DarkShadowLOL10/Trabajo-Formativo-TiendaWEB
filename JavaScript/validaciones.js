// Esperamos a que todo el HTML cargue pantes de ejecutar el script
document.addEventListener("DOMContentLoaded", function() {

    // Seleccionamos el formulario y los campos de entrada
    const formulario = document.getElementById("formularioLogin");
    const inputCorreo = document.getElementById("correo");
    const inputPassword = document.getElementById("password");

    // Obtenemos los espacios para los mensajes de error
    const errorCorreo = document.getElementById("errorCorreo");
    const errorPassword = document.getElementById("errorPassword");

    // Escuchamos el evento "submit" (cuando el usuarrio hace click en el botón de enviar)
    formulario.addEventListener("submit", function(event) {

    //Evitamos que la pagina se recargue automaticamente
    event.preventDefault();

    //Limpiamos mensajes de error previos
    errorCorreo.textContent = "";
    errorPassword.textContent = "";

    let formualrioValido = true;
    
    // 1. Validamos el correo electrónico
    const correo = inputCorreo.value.trim();

    //Expresion regular basica para validacion de formato de correeo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(correoValor === "") {
        errorCorreo.textContent = "El correo es obligatorio";
        formualrioValido = false;
    } else if(!regexCorreo.test(correo)) {
        errorCorreo.textContent = "El formato del correo no es válido";
        formualrioValido = false;
    }

    // 2. Validamos la contraseña
    const password = inputPassword.value.trim();

    if(password === "") {
        errorPassword.textContent = "La contraseña es obligatoria";
        formualrioValido = false;
    } else if(password.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres";
        formualrioValido = false;
    }

    // 3. Si el formulario es válido, simulamos el Login (Admin vs Cliente)
    if(formualrioValido) {
if (correoValor === "admin@tienda.cl") {
                alert("¡Bienvenido Administrador! Redirigiendo al panel de control...");
                // Aquí lo mandamos a la página de admin
                window.location.href = "admin.html"; 
            } else {
                alert("¡Inicio de sesion exitoso! Redirigiendo al catalogo...");
                // Aquí lo mandamos a la vista normal de cliente
                window.location.href = "catalogo.html";
            }
        }
    });

});