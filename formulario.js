document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnEnviar").addEventListener("click", function () {
    console.log("Botón clickeado ✅");
    // ... el resto de tu código aquí
  });
});

document.getElementById("btnEnviar").addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value.trim();
  const opinion = document.getElementById("opinion").value.trim();

  if (nombre && opinion) {
    // Recuperar opiniones anteriores
    let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];

    // Crear la nueva opinión con fecha
    let fecha = new Date().toLocaleDateString("es-CO", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    });

    opiniones.push({ nombre, opinion, fecha });

    // Guardar en localStorage
    localStorage.setItem("opiniones", JSON.stringify(opiniones));

    // Ir a opiniones.html
    window.location.href = "opiniones.html";
  } else {
    alert("Por favor, completa tu nombre y tu opinión.");
  }
});
