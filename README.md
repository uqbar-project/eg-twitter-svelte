## Ejemplo Twitter en Svelte

El ejemplo muestra cómo podría funcionar una página de Twitter.

- Queremos replicar el comportamiento de twitter
- Escribimos en un texto, nos dice cuántos caracteres escribimos
- BONUS: que nos diga cuántos caracteres nos quedan
- BONUS 2: mostrarlo con colores distintos. verde si podemos escribir tranquilo, amarillo cuando falten menos de 5 y rojo cuando ya nos pasamos.

Ejercicio extraído de la [guía de binding](https://algo3.uqbar-project.org/gua-prctica-de-ejercicios/ejercicios-binding).

TODO: demo

## Implementación

La URL es `http://localhost:5173`

En la variante con template tenemos

- un estado mutable: el **tweet**, un string
- un valor calculable o `$derived`, la **cantidad de caracteres restantes**
- otro valor calculable a partir de los caracteres restantes, **qué clase le corresponde**.
