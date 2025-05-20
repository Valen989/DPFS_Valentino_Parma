document.addEventListener("DOMContentLoaded", () => {
    const grupos = document.querySelectorAll(".grupo");
    let indiceActual = 0;

    function mostrarGrupo(indice) {
        grupos.forEach((grupo, i) => {
            grupo.classList.toggle("activo", i === indice);
        });
    }

    document.getElementById("prevBtn").addEventListener("click", () => {
        indiceActual = (indiceActual - 1 + grupos.length) % grupos.length;
        mostrarGrupo(indiceActual);
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        indiceActual = (indiceActual + 1) % grupos.length;
        mostrarGrupo(indiceActual);
    });

    mostrarGrupo(indiceActual); // Muestra el primer grupo al iniciar
});

