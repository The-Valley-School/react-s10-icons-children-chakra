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
<ImageCard imageUrl="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.png">
  <h2>NodeJS</h2>
  <p>Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript</p>
  <a href="https://nodejs.org/">https://nodejs.org/</a>
</ImageCard>
```

Lo cual deberá mostrar una tarjeta con la imagen y el contenido que le hemos pasado en las props:

![Untitled](/docs/assets/Untitled%209.png)

**Paso 3: Crear la estructura para un CV**

En este paso crearemos solo la estructura de nuestra página en varios componentes que puedes dejar vacíos por ahora:

- Header
- Contact
- About
- Projects
- Knowledge

**Paso 4: Componente Header**

![header.jpg](/docs/assets/header.jpg)

Añade contenido tu componente Header, para ello debes usar al menos estos componentes te Chakra:

- Flex
- Text
- Image

**Paso 5: Componente Contact**

![contact.jpg](/docs/assets/contact.jpg)

Añade contenido tu componente Contact, para ello debes usar al menos estos componentes te Chakra:

- Button
- Image
- Popover

El popover servirá para desplegar el contenido de los botones. Recuerda usar también React-Icons:

![Untitled](/docs/assets/Untitled%2010.png)

Paso 6: Componente About:

Este componente contendrá información sobre ti:

![Untitled](/docs/assets/Untitled%2011.png)

Para desarrollarlo deberás usar los siguientes componentes de Chakra:

- Flex
- Text

Y los iconos de React-Icons

**Paso 7: Componente Projects:**

Deberás mostrar una lista de proyectos de la siguiente manera:

![Untitled](/docs/assets/Untitled%2012.png)

Al pulsar sobre un proyecto verás una modal informativa:

![Untitled](/docs/assets/Untitled%2013.png)

Deberás usar al menos los siguientes componentes Chakra:

- Modal
- ModalOverlay
- ModalContent
- ModalHeader
- Image
- Button

**Paso 8: Knowledge**

Por último harás un componente Knowledge para pintar tus conocimientos mediante varios componentes ImageCard, aquí no es necesario que uses Chakra:

![Untitled](/docs/assets/Untitled%2014.png)

**Resultado FINAL**

![localhost_3000.png](/docs/assets/localhost_3000.png)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s10-icons-children-chakra>