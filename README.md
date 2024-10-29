# DI UNIDAD 2, ACTIVIDAD 1
## Ejercicio 1: extraer un componente
El componente Gallery dentro de page.js contiene un marcado muy similar para dos perfiles. Extrae un componente Profile para reducir la duplicación. Tendrás que determinar qué props pasarle.

## Ejercicio 2: ajustar el tamaño de la imagen según una prop
El componente Avatar recibe una prop numérica llamada size que determina el ancho y alto de la etiqueta <img>. En este caso, la prop size está establecida en 40. Sin embargo, al abrir la imagen en una pestaña nueva, se puede observar que la imagen en sí tiene un tamaño mayor (160 píxeles). El tamaño real de la imagen se determina en base al tamaño de la miniatura que se está solicitando.

Modifica el componente Avatar para que solicite el tamaño de imagen más adecuado en función de la prop size. Específicamente, si el valor de size es menor a 90, pasa 's' («small») en lugar de 'b' («big») a la función getImageUrl. Verifica que tus cambios funcionen correctamente al renderizar avatares con diferentes valores de size y al abrir las imágenes en una pestaña nueva.

## Ejercicio 3: pasar JSX en una prop children

Extrae un componente Card del Profile2.js  y usa la prop children para pasarle contenido diferente de JSX.