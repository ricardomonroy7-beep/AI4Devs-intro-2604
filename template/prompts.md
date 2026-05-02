# Prompts — Reverse String (AI4Devs · Ejercicio 01)

**Autor:** Ricardo Monroy Alvarez. (RMA)
**Chatbot utilizado:** Claude (Anthropic) — modelo Opus 4.7
**Iteraciones:** 2 prompts encadenados (meta-prompt DRASTIC → prompt de ejecución)

---

## 🧩 Prompt 1 · Meta-prompt (Generación con framework DRASTIC)

> Este primer prompt se usó para que el asistente analizara la tarea y construyera un prompt estructurado de ejecución bajo el framework DRASTIC (Direction, Results, Audience, Structure, Tone, Identity, Context), siguiendo el formato "Strong Prompt" recomendado por LIDR (Persona / Context / Desired Outcome / Tone+Style / # Of Options / Output Style).

```
ANALIZA LA TAREA PRESENTE EN ACT1.md Y EN README.md, LA ESTRUCTURA DE TRABAJO
DE LOS ARCHIVOS REQUERIDOS index.html, prompts.md, script.js Y LOS REQUISITOS
DEL INGENIERO, PARA GENERAR LO SIGUIENTE:

PROMPT SKILL DRASTIC PARA LLEVAR A CABO LA TAREA DE CREAR:
- ARCHIVOS .HTML, .MD Y .JS COMPLETOS, TESTEADOS Y LISTOS PARA DESCARGAR Y MANDAR.
- EL ARCHIVO DE PROMPTS.MD CON ESTE PROMPT Y EL GENERADO, AMBOS CON LA ETIQUETA
  SOLICITADA POR LIDR.

REQUISITOS DEL INGENIERO:
- PÁGINA CON DISEÑO ELEGANTE Y PROFESIONAL, INSTRUCCIONES CLARAS Y CENTRADAS,
  RENGLÓN PARA ESCRIBIR.
- AL MOMENTO DE ESCRIBIR SE DEBE IR OBSERVANDO EN PANTALLA EL REVERSE STRING,
  A PARTIR DE 3 LETRAS.
- CÓDIGO SIMPLE, EXPLICADO PASO A PASO PARA SER DIDÁCTICO.

REALIZA PREGUNTAS DE SER NECESARIO PARA COMPLETAR LA TAREA DE MANERA
SATISFACTORIA. EL OBJETIVO ES OBTENER UN PROMPT DRASTIC LISTO PARA EJECUTAR,
JUNTO A LAS HERRAMIENTAS NECESARIAS, PARA OBTENER LOS ARCHIVOS.
```

**Aclaraciones aportadas tras preguntas del asistente:**
- Estilo visual: **Corporativo EDSON** (azul marino, gris, serio tipo ingeniería).
- Nivel de comentarios didácticos: **Medio** (bloques explicados, no línea por línea).

---

## 🚀 Prompt 2 · Prompt de ejecución (DRASTIC + formato AI4Devs Strong Prompt)

> Este es el prompt final que generó los archivos `index.html` y `script.js` entregados. Sigue el formato recomendado por LIDR en el Módulo 1.

```
# Persona
Take on the role of a senior frontend developer and AI4Devs mentor,
specialized in writing didactic, clean vanilla JavaScript / HTML / CSS
for engineers who are NOT professional web developers.

# Context
I am Ricardo, a senior structural engineer (9 years at Zapopan, Mexico).
I know Python for engineering automation but I do
not know JavaScript, HTML or CSS. I am completing exercise 01
"reverse-string" of the AI4Devs program (LIDR.co). The starting files
are an empty `index.html` (with only `<script src="script.js"></script>`
in the body) and an empty `script.js`. The deliverable is a Pull Request
to the AI4Devs-intro repo, inside a folder named `reversestring-RGD/`.

# Desired Outcome
Produce TWO complete, production-ready files:

1. `index.html` — a single self-contained page (CSS embedded in <style>)
   that includes:
   - A centered card layout with a navy/grey corporate engineering palette
     (no bright colors, no emojis in the UI, no external CSS frameworks).
   - A header with the title "Reverse String" and subtitle "AI4Devs · Ejercicio 01".
   - Centered instructions explaining what to do.
   - A labeled text input ("Texto original") with id="entrada".
   - A labeled output area ("Texto invertido") with id="salida" that
     displays a placeholder hint while there are fewer than 3 characters,
     and switches to a monospace font showing the reversed string from
     3 characters onwards.
   - Responsive (works on mobile down to 380px).
   - A small footer crediting "Programa AI4Devs · LIDR.co".

2. `script.js` — vanilla JavaScript (no frameworks, no libraries) that:
   - Defines a constant `MINIMO_CARACTERES = 3` as the single source of truth.
   - Gets DOM references to #entrada and #salida.
   - Implements `invertirCadena(texto)` using the idiomatic
     `split('').reverse().join('')` pattern.
   - Listens to the 'input' event (real-time, NO button) and:
     · If input.length < 3 → shows the waiting hint.
     · If input.length ≥ 3 → shows the reversed string.

# Tone + Style
- Spanish identifiers and Spanish comments (the engineer is a Spanish speaker).
- Comments at MEDIUM granularity: explain by BLOCKS, not line-by-line.
- Each block must start with a banner comment that states what the block
  does and WHY it does it that way.
- Code must be readable by a Python developer encountering JS for the
  first time. Avoid clever one-liners. Prefer clarity over brevity.

# # Of Options
One single solution per file, not multiple variants. Use the simplest
correct approach (`split.reverse.join` for the reversal, `addEventListener`
for the real-time behavior).

# Output Style
Deliver the two files as complete, copy-paste-ready code blocks with no
external dependencies. The files must work by simply opening `index.html`
in a browser — no build step, no npm, no server. Validate the logic
mentally against these test cases before finalizing:
  · "AI4Devs" → "sveD4IA"
  · "" / "a" / "ab" → waiting hint
  · "abc" → "cba" (boundary)
  · "racecar" → "racecar" (palindrome)
  · "EDSON S.C." → ".C.S NOSDE" (spaces and punctuation preserved)

# Restrictions
- No frameworks (no React, no Vue, no jQuery, no Tailwind).
- No external CSS or fonts loaded from CDN.
- No emojis inside the rendered UI.
- No build tools required.
- The HTML must keep the original `<script src="script.js"></script>` tag
  at the end of <body>.
```

---

## 📝 Notas de la iteración

- **Por qué dos prompts y no uno:** el primer prompt (meta) sigue la mecánica
  AI4Devs de **dirigir a la IA para que genere el prompt operativo**, en lugar
  de escribirlo manualmente. El segundo prompt es el que efectivamente produce
  el código y es el que se cita en el comentario del Pull Request.
- **Validación realizada:** se ejecutaron 10 casos de prueba sobre la lógica
  (`AI4Devs`, vacío, 1 char, 2 chars, 3 chars, nombres, espacios+puntuación,
  números, mixto mayúsculas/minúsculas, palíndromo). Resultado: **10/10 ✅**.
- **Diseño:** paleta corporativa azul marino (#0B1F3A) + gris claro (#F5F7FA),
  inspirada en la identidad de ingeniería estructural seria.

---

## 🔗 Prompt final para el comentario del Pull Request

> *(Este es el bloque que se debe pegar en el comentario del PR según las
> instrucciones del ejercicio.)*

```
Prompt final (Claude Opus 4.7) — formato AI4Devs Strong Prompt + DRASTIC:

# Persona: Senior frontend dev + mentor AI4Devs.
# Context: Estudiante AI4Devs sin background JS/HTML/CSS.
# Desired Outcome: index.html (self-contained, paleta corporativa navy/grey,
  card centrada, input #entrada, salida #salida) + script.js vanilla con
  invertirCadena = split.reverse.join, evento 'input' en tiempo real,
  umbral MINIMO_CARACTERES = 3.
# Tone + Style: comentarios en español por bloques (nivel medio), código
  legible para un dev Python que ve JS por primera vez.
# Output Style: dos archivos copy-paste-ready, sin frameworks ni build,
  validados contra "AI4Devs"→"sveD4IA", "abc"→"cba", "racecar"→"racecar".
# Restrictions: sin React/Vue/jQuery/Tailwind, sin CDN, sin emojis en UI,
  preservar <script src="script.js"></script> en index.html.
```
