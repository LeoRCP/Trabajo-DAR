// Normalizar texto (quitar acentos y pasar a minúsculas)
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 1. Detectar palíndromo
function comprobarPalindromo() {
  const input = document.getElementById("palindromoInput").value;
  const resultado = document.getElementById("palindromoResultado");

  if (!input.trim()) {
    resultado.textContent = "Por favor, introduce una cadena.";
    return;
  }

  const limpio = normalizarTexto(input).replace(/[^a-z0-9]/g, "");
  const invertido = limpio.split("").reverse().join("");

  resultado.textContent = limpio === invertido
    ? "✅ Es un palíndromo."
    : "❌ No es un palíndromo.";
}

// 2. Mayor de dos números
function compararNumeros() {
  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;
  const resultado = document.getElementById("mayorResultado");

  if (n1 === "" || n2 === "") {
    resultado.textContent = "Introduce ambos números.";
    return;
  }

  const num1 = Number(n1);
  const num2 = Number(n2);

  if (num1 > num2) resultado.textContent = "El mayor es: " + num1;
  else if (num2 > num1) resultado.textContent = "El mayor es: " + num2;
  else resultado.textContent = "Ambos números son iguales.";
}

// 3. Vocales que aparecen
function mostrarVocales() {
  const frase = document.getElementById("fraseVocales").value;
  const resultado = document.getElementById("vocalesResultado");

  if (!frase.trim()) {
    resultado.textContent = "Introduce una frase.";
    return;
  }

  const texto = normalizarTexto(frase);
  const vocales = ["a", "e", "i", "o", "u"];
  const encontradas = new Set();

  for (const char of texto) {
    if (vocales.includes(char)) encontradas.add(char);
  }

  resultado.textContent =
    encontradas.size === 0
      ? "No se encontraron vocales."
      : "Vocales que aparecen: " + [...encontradas].join(", ");
}

// 4. Contar vocales
function contarVocales() {
  const frase = document.getElementById("fraseConteo").value;
  const resultado = document.getElementById("conteoResultado");

  if (!frase.trim()) {
    resultado.textContent = "Introduce una frase.";
    return;
  }

  const texto = normalizarTexto(frase);
  const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (const char of texto) {
    if (conteo.hasOwnProperty(char)) conteo[char]++;
  }

  let salida = "Conteo de vocales:\n";
  for (const vocal in conteo) {
    salida += `${vocal}: ${conteo[vocal]}\n`;
  }

  resultado.textContent = salida.trim();
}