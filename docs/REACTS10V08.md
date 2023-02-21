# VIDEO 08 - EJERCICIO

En este ejercicio debes seguir los siguientes paso:

**Paso 1: Creación del proyecto**

Crea un proyecto en blanco con create-react-app e instala las librerías react-icons y chakra:

<https://react-icons.github.io/react-icons/>

<https://chakra-ui.com/>

**Paso 2: Creación de componente ImageCard:**

Crea un componente ImageCard que reciba por propiedades la url de una imagen a pintar y además que pueda recibir contenido HTML para pintar debajo mediante la propiedad children.

Para hacer uso de este componente haremos algo así:

```jsx
<ImageCard imageUrl="https://www.shutterstock.com/shutterstock/photos/555325381/display_1500/stock-photo-luxurious-new-construction-home-in-bellevue-wa-modern-style-home-boasts-two-car-garage-framed-by-555325381.jpg">
  <FcHome></FcHome>
  <h2><strong>Lujosa nueva casa de construcción en Bellevue, WA. Casa de estilo moderno con dos garajes de camión enmarcados por un lado azul y una pared de piedra natural. Noroeste, Estados Unidos</strong></h2>
  <ul>
    <li>200 habitaciones</li>
    <li>10 baños</li>
    <li>garaje para 5 coches</li>
    <li>billar</li>
  </ul>

  <FcMoneyTransfer></FcMoneyTransfer>
  <p>1.000.000€</p>
</ImageCard>
```

Lo cual deberá mostrar una tarjeta con la imagen y el contenido que le hemos pasado en las props:

![ejercicio-react.png](/docs/assets/ejercicio-react.png)

**Paso 3: Usar componente Accordion de Chakra**

Deberás hacer uso del componente Accordion de Chakra y pintar como ves en la imagen anterior un acordeón con 3 elementos.

Si te da tiempo y te atreves puedes probar a personalizar el acordeón cambiando su estilo.

Recuerda revisar la documentación de Chakra
