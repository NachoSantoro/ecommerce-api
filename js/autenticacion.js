document.addEventListener("DOMContentLoaded", () => {
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const toggleText = document.getElementById("toggle-text");
    const toggleLink = document.getElementById("toggle-link");
    const authForm = document.getElementById("auth-form");
    const logoutLink = document.getElementById("logout-link");
    let isLogin = false;

    // Verificar si hay sesión activa
    const usuarioActivo = localStorage.getItem("usuarioActivo");
    if (usuarioActivo) {
        window.location.href = "index.html";
    }

    toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        formTitle.textContent = isLogin ? "Iniciar Sesión" : "Registro";
        submitBtn.textContent = isLogin ? "Iniciar Sesión" : "Registrarse";
        toggleText.innerHTML = isLogin ? "¿No tienes cuenta? <a href='#' id='toggle-link'>Regístrate aquí</a>" : "¿Ya tienes cuenta? <a href='#' id='toggle-link'>Inicia sesión aquí</a>";
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const nombre = document.getElementById("nombre") ? document.getElementById("nombre").value : "";
        
        if (isLogin) {
            const storedUser = JSON.parse(localStorage.getItem(email));
            if (storedUser && storedUser.password === password) {
                alert("Inicio de sesión exitoso");
                localStorage.setItem("usuarioActivo", email);
                window.location.href = "index.html"; // Redirigir a la página principal
            } else {
                alert("Correo o contraseña incorrectos");
            }
        } else {
            if (localStorage.getItem(email)) {
                alert("El correo ya está registrado");
            } else {
                localStorage.setItem(email, JSON.stringify({ nombre, email, password }));
                alert("Registro exitoso, ahora puedes iniciar sesión");
                localStorage.setItem("usuarioActivo", email);
                window.location.href = "index.html";
            }
        }
    });
});

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    alert("Sesión cerrada");
    window.location.href = "registro_login.html";
}