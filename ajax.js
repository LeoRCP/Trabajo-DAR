window.onload = function () {
  // 1. Mostrar la URL actual al cargar la página
  document.getElementById("urlInput").value = window.location.href;
};

function realizarPeticion() {
  const url = document.getElementById("urlInput").value;

  const xhr = new XMLHttpRequest();

  // 3. Mostrar estados de la petición
  xhr.onreadystatechange = function () {
    let estadoTexto = "";

    switch (xhr.readyState) {
      case 0: estadoTexto = "0 - No iniciada"; break;
      case 1: estadoTexto = "1 - Cargando"; break;
      case 2: estadoTexto = "2 - Cabeceras recibidas"; break;
      case 3: estadoTexto = "3 - Descargando"; break;
      case 4: estadoTexto = "4 - Completada"; break;
    }

    document.getElementById("estado").textContent = estadoTexto;

    // 5. Código de estado
    if (xhr.readyState === 4) {
      document.getElementById("codigo").textContent =
        xhr.status + " - " + xhr.statusText;

      // 4. Cabeceras HTTP
      document.getElementById("cabeceras").textContent =
        xhr.getAllResponseHeaders();

      // 2. Contenido recibido
      document.getElementById("contenido").textContent = xhr.responseText;
    }
  };

  xhr.open("GET", url, true);
  xhr.send();
}