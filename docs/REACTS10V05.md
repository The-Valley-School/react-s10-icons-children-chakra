# VIDEO 05 - Intro a Chakra

Chakra UI es una librería de componentes de React que proporciona una serie de componentes de interfaz de usuario de alto nivel que se basan en las mejores prácticas de accesibilidad y diseño.

La librería Chakra UI proporciona una gran cantidad de componentes listos para usar, como botones, formularios, menús, tablas, etc. También proporciona estilos de caja base para ayudar a crear diseños consistentes y proporciona un sistema de estilos basado en el tema para personalizar fácilmente el diseño de la aplicación.

Además, Chakra UI se basa en un sistema de diseño denominado "system props" que permite a los desarrolladores aplicar estilos y modificar el comportamiento de los componentes mediante el uso de props.

Chakra UI también está diseñado para ser altamente accesible, proporciona una serie de herramientas y mejores prácticas para garantizar que los componentes sean accesibles para todos los usuarios, incluyendo personas con discapacidad.

Para instalar chakra en tu proyecto debes ejecutar:

```jsx
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

Como puedes observar chakra tiene algunas dependencias como emotion, debemos instalar a la vez todas ellas, como se indica en su documentación:

<https://chakra-ui.com/getting-started>

Tras esto debes importar el componente "ChakraProvider" en tu archivo principal de React (por ejemplo, "index.js" o "App.js"). Este componente es el que proporciona el tema y los estilos de Chakra UI a toda tu aplicación y por ello debe “envolver” toda la aplicación:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Finalmente, puedes comenzar a utilizar los componentes de Chakra UI en tu aplicación importándolos y utilizándolos como cualquier otro componente de React, por ejemplo en nuestro App.js podremos:

```jsx
<h2>Ejemplos de chakra:</h2>
<Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='blue' size="xs" rightIcon={<FaTwitter></FaTwitter>}>
    Ir a twitter
  </Button>
  <Button colorScheme='red' size="sm">Button</Button>
  <Button colorScheme="blackAlpha" size="md">Button</Button>
  <Button colorScheme='yellow' size="lg">Button</Button>
</Stack>
```

No debemos olvidarnos de importar previamente estos componentes:

```jsx
import { Button, Stack } from '@chakra-ui/react';
```

Esto se verá de la siguiente manera:

![Untitled](/docs/assets/Untitled%204.png)
