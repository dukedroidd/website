document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Desactiva la transición al cargar la página
    body.style.transition = "none";

    // Recupera el tema desde localStorage
    const savedTheme = localStorage.getItem("theme") || "light-theme";
    body.classList.add(savedTheme);

    // Cambia el texto del botón según el tema actual
    themeToggle.textContent = savedTheme === "light-theme" ? "Cambiar a modo oscuro" : "Cambiar a modo claro";

    // Reactiva la transición después de un breve retraso
    setTimeout(() => {
        body.style.transition = ""; // Elimina el estilo inline para restaurar la transición definida en CSS
    }, 0);

    // Agrega un evento al botón para alternar el tema
    themeToggle.addEventListener("click", () => {
        const isLightTheme = body.classList.contains("light-theme");

        // Cambia entre temas y guarda la selección
        body.classList.replace(isLightTheme ? "light-theme" : "dark-theme", isLightTheme ? "dark-theme" : "light-theme");
        themeToggle.textContent = isLightTheme ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

        // Guarda el tema actual en localStorage
        localStorage.setItem("theme", isLightTheme ? "dark-theme" : "light-theme");
    });
});