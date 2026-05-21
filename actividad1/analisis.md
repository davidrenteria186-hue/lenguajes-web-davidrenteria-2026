# Informe Técnico

## Hoisting

En JavaScript, las variables declaradas con var son elevadas (hoisting) al inicio del contexto de ejecución. Esto significa que pueden ser accedidas antes de su inicialización, aunque su valor será undefined.

Ejemplo:

```js
console.log(nombre);
var nombre = "Juan";

