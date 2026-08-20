# BELENTANI — Columna vertebral

Versión: 2026-08-18

## Propósito

BELENTANI es una entidad artística presentada como sistema vivo. Esta primera versión entrega una columna vertebral estática, modular y multilingüe: shell global, rutas editoriales, estados de contenido, fallback sin efectos, responsive desktop/mobile y movimiento reducido. No contiene backend, autenticación, reproducción de sonido ni acceso público al master de JUDAS.

## Contrato de rutas

| Ruta | Función | Estado editorial | Salida principal |
|---|---|---|---|
| `/` | Entrada, manifiesto y presencia | Visible | Abrir archivo, portal o columnas |
| `/artist` | Presencia verificable de The Artist | Visible | Archivo del artista |
| `/archive` | Imágenes, registros y continuidad | Visible | Recorrer el archivo |
| `/work` | Declaración de límite para JUDAS | Sellado | Regresar al portal |
| `/studio` | Espacio preparado para proceso | Pendiente | Volver al archivo visible |
| `/portal` | Condiciones de acceso y control del visitante | Visible | Abrir archivo o derechos |
| `/rights` | Scaffold para contacto, permisos y condiciones | Pendiente | Regresar al portal |

## Modelo de contenido

Los tipos `Locale`, `EditorialState` y `LocalizedCopy` viven en `client/src/data/content.ts`. Las diez lenguas configuradas son español, portugués, inglés, catalán, francés, italiano, chino, hindi, tailandés y finés. El contexto `LocaleProvider` persiste la elección de idioma en el navegador y actualiza el atributo `lang` del documento.

Los estados editoriales están definidos como `visible`, `partial`, `sealed` y `pending`. Cada ruta declara su estado y el shell lo comunica con una etiqueta visible, un punto de señal y texto legible. El estado `sealed` no es un estado de carga: es una decisión editorial.

## Capas técnicas

| Capa | Ubicación | Responsabilidad |
|---|---|---|
| Ensamblaje | `client/src/App.tsx` | ThemeProvider, LocaleProvider, Shell y rutas |
| Shell | `client/src/components/Shell.tsx` | Marca, navegación, idioma, sonido sellado, calidad y movimiento |
| Primitivas | `client/src/components/EditorialPrimitives.tsx` | Estados, coordenadas, escenas, panel sellado y enlaces |
| Páginas | `client/src/pages/` | Home y plantilla editorial por sala |
| Contenido | `client/src/data/content.ts` | Copias localizadas y contratos de estado |
| Sistema visual | `client/src/index.css` | Tokens, layout, tipografía, motion, responsive y fallback |
| Dirección | `ideas.md` | Principios de Archivo Soberano, tono y decisiones visuales |

## Reglas de JUDAS

JUDAS se mantiene sellado. En esta entrega no hay reproductor, waveform, audio, letra, descarga, enlace público al master ni endpoint relacionado. La ruta `/work` explica el límite sin simular una interacción bloqueada.

## Material visual

Las escenas principales usan recursos generados específicamente para BELENTANI. Las rutas editoriales incorporan dos imágenes visuales autorizadas desde Google Drive: `pedro-rizado-barba-perfil-01.jpg` y `pedro-rizado-barba-perfil-02.jpg`. Se presentan como evidencia de archivo procesada con oscurecimiento, recorte, grano conceptual y anotaciones de campo; no se muestran como fotografía casual sin tratamiento. La referencia `PEDRO-REFERENCIA-01.png` fue descartada y no forma parte de la interfaz.

No se descargó, reprodujo ni expuso material de audio de JUDAS. El resto del contenido localizado en Drive queda fuera de esta versión hasta que el autor confirme qué archivos deben entrar en el archivo público.

## Movimiento y accesibilidad

La entrada de página usa una revelación corta de opacidad y desplazamiento. Las escenas tienen una deriva ambiental opcional solo cuando el navegador permite movimiento; el control `Motion ON/OFF` del rail puede desactivar las transiciones. La regla global `prefers-reduced-motion: reduce` elimina la animación no esencial sin retirar foco, contraste ni jerarquía.

El shell incluye enlace de salto al contenido, navegación con enlaces reales, `aria-label` en los controles, `aria-expanded` y `aria-pressed` en el menú y el control de movimiento, foco visible, textos alternativos para imágenes y un orden de lectura razonable. La navegación móvil se convierte en un panel desplegable sin depender del hover.

## Verificación ejecutada

`pnpm check` y `pnpm build` completan correctamente. Se revisaron visualmente `/`, `/artist`, `/archive`, `/work`, `/portal` y `/rights` en escritorio de 1280 × 720, además de `/`, `/artist`, `/archive`, `/work` y `/portal` en móvil de 375 × 812. El build deja una advertencia de tamaño de bundle superior a 500 kB; no bloquea la entrega visual, pero queda como optimización técnica posterior mediante code-splitting.

## Pendientes explícitos

La biografía completa de Pedro, los textos literarios de la obra, los metadatos de archivo, los permisos definitivos y el contacto de derechos siguen pendientes de confirmación autoral. No se han inventado. La integración actual es estática y no sincroniza Drive automáticamente; si se desea una actualización editorial mensual o una biblioteca administrable, habrá que definir posteriormente una fuente de contenido y permisos persistentes.
