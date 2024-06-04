# :fork_and_knife: Kamakura Food

## Instrucciones

Queremos imprimir de manera dinámica un menú en nuestra web de comida japonesa "Kamakura Food", dentro de assets/data/data.js existe un array de elementos que contiene los filtros por categorías de los platos del menú y tienes otro array de objetos que tiene todos los platos que se sirven en el restaurante, no debes modificar estos arrays. Imprimir de manera dinámica quiere decir, que si aumentamos un elemento al array, no tendrás que modificar la función, ya que ella lo imprimirá en pantalla automáticamente.

1. Has de manipular el DOM con una función de javascript, que imprima en pantalla los filtros de las categorías del menú (tienes un ejemplo impreso estáticamente del filtro, para que sepas como tiene que quedar), cuando haces click en cada uno de los filtros, ha de mostrar solo los platos que forman parte de esa categoría.

2. Has de manipular el DOM con una función de javascript, que imprima en pantalla los platos del menú (tienes una ejemplo impreso estáticamente del plato, para que sepas como tiene que quedar).

3. Has de crear una función que al hacer click en el carrito de compras, abra el elemento que lo contiene y al volver hacer click, lo cierre. No debes preocuparte por los estilos porque ya existen en el archivo cart.css 

4. Has de crear una función que al hacer click en el botón "Añadir" de cada plato, aparezca en el carrito dicho plato (tienes una ejemplo impreso estáticamente del plato en el carrito, para que sepas como tiene que quedar). No puedes añadir dos veces el mismo plato. Al hacer click en el botón "x" se debe eliminar el plato del carrito de compras.

5. ⭐ BONUS: El plato del carrito de compras lleva un contador, puedes hacer una función que recoja la cantidad escogida y haga el cálculo para obtener el subtotal por cada plato y luego que imprima el total de todos los platos en pantalla, dentro del texto que dice "Total: €".

6. ⭐ BONUS: Al dar click en el botón "Proceder al pago" se mostrará el recibo de tu compra, que contiene los platos a comprar, con su precio y su cantidad. No debes preocuparte por los estilos porque ya existen en el archivo cart.css
   
8. ⭐ BONUS: Intenta reproducir los estilos y la funcionalidad del modal que aparece al dar click en el botón "Pagar" y cuando cierres el modal deberá quedar limpio el recibo y el carrito de compras.

### Importante

1. Tienes todas las clases e identificadores definidos en el HTML, no es necesario aumentar más, si los renombras es probable que los estilos dejen de funcionar.
2. Intenta usar las funcionalidades de ECMASCript 6 (map, filter, sort, reduce, forEach). Usa solo template strings, evita usar la concatenación de variables y strings antigua.
3. Está permitido usar eventos en un archivo separado o dentro del HTML.
4. Separa el código lo más que puedas, te recomiendo tener un archivo para eventos, otro para el carrito, otro para la impresión del menú.
5. Y recuerda que este proyecto usa ESModules.

## Testing

1. El proyecto está preparado para usar vitest y jsdom, solo debes hacer npm install y tienes un test sencillo de prueba que testea que el link de inicio esté en el DOM, puedes comprobar que pasa el test con npm test.
2. Realiza test unitarios de tus funciones.

## Instalación

- Node v18.15.0
- Vitest v0.34.6
- Jsdom v22.1.0

## ¿Qué aprenderemos?

- Manipular el DOM
- Condicionales
- Uso de bucles
- Tests del DOM
- Programación funcional

## Resultado esperado

Dejo un video del resultado esperado

https://github.com/FemCoders/js-kamakura-food/assets/73828751/3a7a8a48-8f50-4c14-92c6-34a8eebbdcde





