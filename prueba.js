function Inicio() {
  const emailInput = document.getElementById('Username2');
  const email = emailInput.value.trim();

  if (!email) {
    alert("prueba");
    emailInput.focus();
    return;
  }

  window.location.href = "iniciarsesion.html";
}

function Ensayo()
{
    let texto=document.querySelector("#pruebas");

    if(texto.value != "")
    {
        alert("Registro exitoso ✅");
        window.location.href = "registro.html";
    }
    else
    {
         alert("Por favor ingresa tu correo");
    }
}

 