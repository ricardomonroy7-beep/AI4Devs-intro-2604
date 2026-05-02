/* ============================================================================
   REVERSE STRING — script.js
   ----------------------------------------------------------------------------
   Programa AI4Devs · Ejercicio 01

   Este archivo contiene la lógica que:
     1. Detecta cuando el usuario escribe en el campo de texto.
     2. Invierte la cadena en tiempo real (sin necesidad de botón).
     3. Muestra el resultado solo a partir de 3 caracteres.

   El código está dividido en bloques numerados. Cada bloque hace UNA cosa
   y está explicado al inicio. El objetivo es ser DIDÁCTICO: no solo que
   funcione, sino que se entienda cómo funciona.
   ============================================================================ */


/* ----------------------------------------------------------------------------
   BLOQUE 1 · CONSTANTE DE CONFIGURACIÓN
   ----------------------------------------------------------------------------
   Una sola "fuente de verdad" para el umbral mínimo.
   Si mañana el requisito cambia (ej. 5 letras), solo se modifica aquí.
   ---------------------------------------------------------------------------- */
const MINIMO_CARACTERES = 3;


/* ----------------------------------------------------------------------------
   BLOQUE 2 · REFERENCIAS AL DOM
   ----------------------------------------------------------------------------
   El "DOM" (Document Object Model) es la representación en memoria del HTML.
   Con document.getElementById(...) le pedimos al navegador los elementos
   que tienen los IDs definidos en index.html para poder leerlos/modificarlos.
   Se guardan en constantes para no buscarlos cada vez (más rápido y limpio).
   ---------------------------------------------------------------------------- */
const inputEntrada = document.getElementById('entrada');
const cajaSalida   = document.getElementById('salida');


/* ----------------------------------------------------------------------------
   BLOQUE 3 · FUNCIÓN DE INVERSIÓN
   ----------------------------------------------------------------------------
   La inversión se hace en tres pasos encadenados:
     a) split('')   → convierte la cadena en un array de caracteres
                      "AI4Devs" → ['A','I','4','D','e','v','s']
     b) reverse()   → invierte el orden del array
                      → ['s','v','e','D','4','I','A']
     c) join('')    → vuelve a unir el array en una cadena
                      → "sveD4IA"

   Este patrón es el idiomático en JavaScript para invertir strings.
   ---------------------------------------------------------------------------- */
function invertirCadena(texto) {
    return texto.split('').reverse().join('');
}


/* ----------------------------------------------------------------------------
   BLOQUE 4 · MANEJADOR DEL EVENTO 'input'
   ----------------------------------------------------------------------------
   El evento 'input' se dispara CADA VEZ que cambia el contenido del campo
   (cada tecla, pegar, borrar, etc.). Es lo que permite el "tiempo real".

   Lógica:
     - Si hay menos de MINIMO_CARACTERES → mostrar mensaje guía (estado "esperando").
     - Si hay suficientes caracteres     → mostrar la cadena invertida.
   ---------------------------------------------------------------------------- */
function alEscribir(evento) {
    const textoActual = evento.target.value;

    if (textoActual.length < MINIMO_CARACTERES) {
        // Caso 1: aún no hay suficientes caracteres
        cajaSalida.classList.add('esperando');
        cajaSalida.textContent = `Escribe al menos ${MINIMO_CARACTERES} caracteres…`;
    } else {
        // Caso 2: ya hay suficientes → invertir y mostrar
        cajaSalida.classList.remove('esperando');
        cajaSalida.textContent = invertirCadena(textoActual);
    }
}


/* ----------------------------------------------------------------------------
   BLOQUE 5 · CONEXIÓN DEL EVENTO
   ----------------------------------------------------------------------------
   addEventListener vincula nuestro manejador al input.
   A partir de aquí, cada pulsación de tecla llamará a alEscribir().
   ---------------------------------------------------------------------------- */
inputEntrada.addEventListener('input', alEscribir);
