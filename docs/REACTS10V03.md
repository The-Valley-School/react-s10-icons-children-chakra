# VIDEO 03 - React.children.count en componente Collapsable

En este video veremos la propiedad React.children.count que nos permite contar el número de elementos que hemos recibido en la propiedad children:

<https://reactjs.org/docs/react-api.html#reactchildrencount>

Lo usaremos para crear un componente collapsable que mostrará el número de elementos que contiene:

![Untitled](/docs/assets/Untitled%202.png)

El código de nuestro Collapsable queda así:

```jsx
import React from "react";
import "./Collapsable.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Collapsable = ({ children, title }) => {

  const [opened, setOpened] = React.useState(false);

  const numHijos = React.Children.count(children);

  return (
    <div className="collapsable">
      <div className="collapsable__title" onClick={() => setOpened(!opened)}>
        {title} ({numHijos})
        {opened ?
          <FaChevronUp className="collapsable__icon"></FaChevronUp> :
          <FaChevronDown className="collapsable__icon"></FaChevronDown>
        }
      </div>
      <div className={opened ? "collapsable__body collapsable__body--opened" : "collapsable__body"}>
        {children}
      </div>
    </div>
  );

}

export default Collapsable;
```

El CSS de nuestro Collapsable así:

```css
.collapsable {
  border: 1px solid #333;
  margin-bottom: 10px;
}

.collapsable__title {
  position: relative;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
}

.collapsable__icon {
  position: absolute;
  top: 12px;
  right: 12px;
}

.collapsable__body {
  display: none;
  padding: 10px;
  border-top: 1px solid #333;
}

.collapsable__body--opened {
  display: block;
}
```

Y por último en nuestro componente App.js añadiremos un par de Collapsables:

```jsx
<h2>Ejemplo de collapsable</h2>
<Collapsable title="Este es el primer collapsable">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p>Integer velit augue, volutpat at libero sit amet, ornare lacinia mi.</p>
  <p>Nunc hendrerit orci eget interdum aliquam. Mauris vitae justo sodales, pharetra neque sit amet, lacinia tortor.</p>
</Collapsable>

<Collapsable title="Este es otro collapsable">
  <p>Donec vel nunc augue. Nam auctor metus et lorem interdum aliquet.</p>
  <ul>
    <li>Primer elemento</li>
    <li>Segundo elemento</li>
    <li>Tercer elemento</li>
  </ul>
</Collapsable>
```
