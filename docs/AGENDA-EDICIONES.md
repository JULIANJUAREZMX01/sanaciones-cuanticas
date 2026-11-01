# Agenda de ediciones · Sanaciones Cuánticas Energéticas

Este archivo es el tablero de trabajo del sitio. Cada edición se registra aquí antes de aplicarse, y las que cambian la estructura del método o el modelo de negocio se documentan además como ADR en `docs/adr/`.

## Lote 1 · 1 de noviembre de 2026

| # | Edición | Estado | Archivos |
|---|---|---|---|
| 1 | El método deja de sostenerse en Reiki y pasa a sostenerse en el Método Yujuen | aplicada | `data/contenido.ts`, `index`, `metodo`, `aviso`, `Base` |
| 2 | Paquete 3, Programa Convergencia: de tres a cuatro sesiones | aplicada | `data/contenido.ts`, `sesiones` |
| 3 | Renombrado del pilar central y de todo el copy que mencionaba Reiki | aplicada | todas las páginas |
| 4 | Pulido narrativo: apertura, promesa y cierre reescritos sin repetir la misma idea | aplicada | `index` |
| 5 | Ajuste visual: separadores ornamentales, jerarquía tipográfica y espaciado móvil | aplicada | `global.css` |
| 6 | Coherencia de marca: se usa "Sanación Cuántica Energética" en singular para el servicio | aplicada | `Base`, `aviso` |

## Lote 2 · pendiente de información de la Lic. Dra. Rosa Patricia

| # | Edición | Bloqueo | Notas |
|---|---|---|---|
| 7 | Definición oficial del Método Yujuen (tres a cinco renglones, en sus palabras) | requiere texto de la creadora | hoy el sitio lo describe de forma estructural y provisional |
| 8 | Números reales del consultorio: WhatsApp, teléfono y correo | requiere dato | hoy se usan los de Julián como préstamo |
| 9 | Sala de videollamada (Skype, Zoom o Meet) | requiere enlace | el sitio ofrece "videollamada" sin enlace fijo |
| 10 | Ciudad, código postal y punto de referencia para el mapa | requiere dato | dirección ya publicada: Calle Limón 618, Col. Chapultepec |
| 11 | Fotografías reales de la doctora y del consultorio | requiere material | hoy hay ilustraciones de alebrije generadas para el sitio |
| 12 | Horarios de atención y días de descanso | requiere decisión | hoy dice "a convenir" |
| 13 | Testimonios reales con autorización por escrito | requiere material | no se publican testimonios inventados |

## Reglas de edición

1. Todo cambio de estructura del método, precios o condiciones se documenta en `docs/adr/`.
2. El copy no promete curación médica; se mantiene la fórmula de consentimiento informado y acompañamiento.
3. Ninguna edición publica datos de contacto, precios o credenciales sin confirmación previa.
4. Cada lote termina con `npm run check`, build y verificación de las rutas en vivo.
