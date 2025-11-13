window.addEventListener("DOMContentLoaded", function () {
  console.log("opiniones.js cargado ✅");

  let opiniones = JSON.parse(localStorage.getItem("opiniones")) || [];
  let lista = document.getElementById("lista-opiniones");

  lista.innerHTML = "";

  if (opiniones.length === 0) {
    lista.innerHTML = "<p>Aún no hay opiniones. Sé el primero en dejar la tuya 📝</p>";
    return;
  }

  opiniones.forEach(op => {
    let item = document.createElement("div");
    item.classList.add("opinion-item");
    item.innerHTML = `
      <strong>${op.nombre}</strong> <small>(${op.fecha})</small>
      <p>${op.opinion}</p>
    `;
    lista.appendChild(item);
  });
});
