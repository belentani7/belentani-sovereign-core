# BELENTANI — Dirección de sistema

Versión de trabajo: 2026-08-18

Este documento define la columna vertebral visual y editorial de BELENTANI. La dirección creativa final pertenece al autor; el sistema se construye para sostenerla sin inventar biografía, obra sonora ni contenido no verificado.

## Tres direcciones posibles

### Enfoque 1: Archivo Soberano

Una experiencia editorial oscura, precisa y contenida, donde cada ruta se siente como una sala de archivo y la navegación funciona como un umbral. El rojo neón aparece como señal de vida, no como decoración.

**Probabilidad:** 0.07

### Enfoque 2: Órbita Escénica

Un lenguaje más performativo y espacial, con grandes campos visuales, cortes diagonales y composiciones que simulan desplazamiento entre mundos. La interfaz desaparece casi por completo detrás de la escena.

**Probabilidad:** 0.04

### Enfoque 3: Registro de Combustión

Una estética de documento intervenido: fotografías densas, capas de notas, marcas de proceso y señales rojas como evidencia material de una obra en transformación.

**Probabilidad:** 0.09

## Dirección elegida: Archivo Soberano

### Movimiento de diseño

**Editorialismo post-digital** con referencias a archivos de artista contemporáneo, fotografía cinematográfica nocturna y sistemas de señalización de museos experimentales. La estructura debe sentirse duradera y precisa, no como un dashboard ni como una landing de startup.

### Principios esenciales

1. **El umbral antes que el menú.** Cada interacción introduce una sala, un estado o una pregunta; la navegación no compite con la obra.
2. **La evidencia antes que el efecto.** El contenido legible y el fallback estático siempre preceden a la animación.
3. **La asimetría como orientación.** Las columnas, márgenes y líneas de lectura se desplazan para evitar una cuadrícula central genérica.
4. **La señal roja como acontecimiento.** El rojo neón se reserva para estados activos, límites, llamadas de acceso y detalles que deben permanecer en la memoria.

### Filosofía cromática

El fondo casi negro protege el silencio y deja que las imágenes respiren. El rojo neón no es un color de marca aplicado a todo: es una señal de activación, una herida luminosa, una frontera entre lo visible y lo sellado. Los grises azulados y blancos cálidos permiten que el texto sea legible sin convertir el sistema en una interfaz fría. El rojo principal de trabajo es `#ff234f`, acompañado por `#09090c`, `#15151b`, `#b7b2ad` y `#f3eee8`.

### Paradigma de layout

Composición de **columna editorial desplazada**: una barra lateral vertical y estrecha sostiene identidad, estado e idioma; el contenido principal ocupa una banda amplia pero nunca queda perfectamente centrado. En escritorio, la página alterna una columna de lectura, un campo visual y una línea de margen que funciona como coordenada. En móvil, la barra se convierte en un encabezado compacto y el contenido conserva el desplazamiento mediante márgenes, cortes y ritmo vertical.

### Elementos de firma

- Una **línea de coordenada roja** que recorre header, separadores y estados activos.
- El **sello de umbral** de BELENTANI, un símbolo sin texto formado por división vertical, punto soberano y órbita incompleta.
- Etiquetas editoriales en mayúsculas espaciadas, como notas de archivo: `ARCHIVE`, `PROCESS`, `SEALED`, `ACCESS`.

### Filosofía de interacción

La interacción debe sentirse como abrir una compuerta, no como activar un widget. Los enlaces muestran con claridad su destino, los estados activos se sostienen visualmente y nunca se depende solo del hover. El teclado recibe el mismo tratamiento que el puntero: foco visible, orden lógico, escape desde rutas y controles sin movimiento obligatorio.

### Animación

El movimiento será corto, direccional y editorial. Las entradas usan opacidad y desplazamiento mínimo desde el eje de lectura; los paneles aparecen desde su borde de origen, no desde una escala cero. Las transiciones ordinarias permanecen por debajo de 300 ms. Las secuencias de entrada se escalonan entre 40 y 70 ms para evitar una pared de movimiento. El fondo puede tener una deriva ambiental muy lenta solo cuando `prefers-reduced-motion: no-preference`; con reduced motion se conserva la composición estática, los estados de foco y la jerarquía.

### Sistema tipográfico

- **Display:** `Space Grotesk`, pesos 500–700, para títulos breves, navegación y numeración de rutas.
- **Texto editorial:** `DM Sans`, pesos 400–500, para párrafos, metadatos y controles.
- **Señal técnica:** `IBM Plex Mono`, peso 400, para coordenadas, estados, idiomas, códigos y etiquetas de archivo.

Las mayúsculas espaciadas se reservan para señales y navegación; los párrafos nunca se componen en mayúsculas. Los titulares se mantienen compactos y con una sola jerarquía dominante por escena.

### Esencia de marca

**BELENTANI es un universo artístico inmersivo para quienes entran en una obra como se entra en un territorio: con atención, silencio y voluntad de descubrir; se diferencia porque convierte archivo, proceso y acceso en una experiencia viva sin revelar lo que debe permanecer sellado.**

Personalidad: **soberana, magnética, contenida**.

### Voz de marca

Los titulares son breves, declarativos y ligeramente enigmáticos. Las llamadas a la acción no prometen resultados genéricos: nombran la puerta que se abre. El microcopy es preciso, nunca publicitario.

Ejemplos:

- **Titular:** `NO ENTRAS A UNA WEB. ATRAVIESAS UN UMBRAL.`
- **CTA:** `ABRIR EL ARCHIVO VISIBLE`

### Wordmark y logo

El wordmark se compone como una inscripción editorial de alta tensión: `BELENTANI` en Space Grotesk semibold, con tracking amplio, una línea roja que atraviesa discretamente la segunda mitad del nombre y un corte vertical en la `A` como eco del símbolo. El logo independiente es el sello de umbral: una forma vertical dividida, atravesada por un punto y una órbita incompleta. Debe existir en rojo neón sobre transparente y en blanco sobre negro.

### Color de marca

**Rojo Umbral — `#ff234f`**. Es el color propietario de la señal, el límite y la activación. Se usa con economía: nunca como relleno dominante de una pantalla completa.

## Arquitectura editorial inicial

Las columnas de contenido quedan separadas de la lógica técnica:

| Columna | Ruta prevista | Estado inicial | Regla editorial |
|---|---|---|---|
| Identidad | `/artist` | Visible | Mostrar solo información verificable sobre Pedro y su práctica artística. |
| Archivo | `/archive` | Visible | Incorporar imágenes y registros aprobados; sin inventar títulos ni fechas. |
| Obra | `/work` | Parcial / sellada | JUDAS permanece sellado: no audio, letra, waveform, descarga ni URL pública del master. |
| Proceso | `/studio` | Scaffold editorial | Estructura lista para notas, materiales y método cuando el autor los confirme. |
| Acceso | `/portal` | Visible | Umbral de entrada, idioma, calidad, movimiento y contacto/derechos. |
| Derechos | `/rights` | Scaffold verificable | Contacto y condiciones sin inventar datos legales. |

## Material visual y pendientes

Se usarán inicialmente las imágenes aportadas por el autor y los recursos originales generados para esta dirección. El material adicional de Google Drive ya ha sido consultado mediante la integración autorizada. Se importaron únicamente imágenes de referencia visual del artista; no se descargó, reprodujo ni expuso ningún archivo de audio de JUDAS. El resto del contenido de Drive queda fuera hasta que el autor confirme su uso editorial.

Recursos generados para el sistema:

- `/manus-storage/belentani-hero-red-nebula_b364c207.jpg`
- `/manus-storage/belentani-archive-portrait_1cf508d0.jpg`
- `/manus-storage/belentani-process-atlas_a7171e2c.jpg`
- `/manus-storage/belentani-portal-field_d36da389.jpg`
- `/manus-storage/belentani-mark_411786b3.png`

Material importado desde Google Drive:

- `pedro-rizado-barba-perfil-01.jpg` → `/manus-storage/pedro-rizado-perfil-01_e71f5fd9.jpg`
- `pedro-rizado-barba-perfil-02.jpg` → `/manus-storage/pedro-rizado-perfil-02_4259f0f0.jpg`

La imagen `PEDRO-REFERENCIA-01.png` fue descartada y no se utiliza en ninguna ruta.

## Decisiones de implementación

- El sitio será estático y no tendrá backend en esta primera columna vertebral.
- El contenido se expresará mediante modelos locales y estados editoriales explícitos.
- Las diez lenguas se podrán cambiar desde el shell; las traducciones iniciales del sistema serán visibles y revisables, sin afirmar que constituyen la traducción literaria final de la obra.
- La experiencia no tendrá reproducción sonora ni enlaces de descarga.
- El fallback estático será la misma arquitectura visual sin efectos ambientales.
- La integración de Drive no se simulará ni se sustituirá por datos inventados.

## Style Decisions

- Las fotografías personales importadas desde Drive aparecerán únicamente como evidencia de archivo: oscuras, recortadas, parciales y anotadas visualmente. No ocuparán una escena heroica con apariencia de selfie o viaje.
- El rojo Umbral `#ff234f` queda reservado para líneas de señal, estados activos o sellados, numerales, CTAs y una sola herida tipográfica intencional por escena.
- Cada sala conserva el rail de coordenadas y el lenguaje de archivo, pero sus umbrales se diferencian por composición, relación imagen-texto y comportamiento de acceso.
- Las llamadas a la acción nombrarán una puerta, una sala visible, un regreso o un archivo; se evitará el vocabulario genérico de producto.
- Las secciones secundarias incorporarán índices, notas de campo, sellos y coordenadas para reforzar que el visitante recorre un archivo de artista y no una landing oscura.
