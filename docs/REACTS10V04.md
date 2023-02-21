# VIDEO 04 - React.children.only en componente Circle

En este vídeo haremos uso de la función React.children.only:

<https://reactjs.org/docs/react-api.html#reactchildrenonly>

Esa propiedad nos permite proteger un componente para que solo reciba un elemento mediante Children y en caso de que reciba más mostrará y lanzará un error.

Para demostrarlo creamos un componente Circle que mostrará dentro de un círculo negro el elemento que le hayamos pasado en las props:

![Untitled](/docs/assets/Untitled%203.png)

El componente Circle quedará de la siguiente manera:

```jsx
import "./Circle.css";
import React from "react";

const Circle = (props) => {

  // Prevenimos que haya más de un hijo en el componente
  const onlyOneChild = React.Children.only(props.children);

  return (
    <div className="circle">
      { onlyOneChild }
    </div>
  );
}

export default Circle;
```

El CSS de nuestro componente Circle quedará así:

```css
.circle {
  background: #333;
  color: #FFF;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  position: relative;
}

.circle > * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

Y para hacer uso de Circle en nuestro App.js haremos lo siguiente:

```jsx
<h2>Ejemplos de círculos:</h2>
<Circle>
  <FaFacebookF></FaFacebookF>
</Circle>

<Circle>
  <FaInstagram></FaInstagram>
</Circle>

<Circle>
  <FaTwitter></FaTwitter>
</Circle>
```
