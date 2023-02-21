# VIDEO 02 - Props.children en componente Button

En este video veremos la propiedad children, esto nos permitirá pasar contenido HTML a nuestros componentes. 

Para demostrarlo crearemos un componente botón que permitirá que se le inyecte contenido HTML y lo pintará dentro de una etiqueta <button>. 

Nuestro componente App.js hará uso de ese botón de la siguiente manera:

```jsx
<h2>Ejemplo de botón custom:</h2>
<CustomButton action={() => alert("Hola")} size="BIG" color="red">
  <span>Eeeeeey!!!</span> <FaHandPaper></FaHandPaper>
</CustomButton>

<CustomButton action={() => alert("Adiós")} color="blue">
  <span>Adiós!!!</span> <FaHandshakeAltSlash></FaHandshakeAltSlash>
  <ul>
    <li>Uno</li>
    <li>Dos</li>
  </ul>
</CustomButton>
```

Como puedes observar dentro el componente podemos pasar cualquier cosa como un span,  iconos de la librería react-icons o una lista de elementos ul, lo cual quedará así:

![Untitled](/docs/assets/Untitled%201.png)

Nuestro componente CustomButton quedará implementado así:

```jsx
import "./CustomButton.css";

const CustomButton = ({ action, color, children, size }) => {

  return (
    <button
      onClick={action}
      style={{ color: color }}
      className={size === "BIG" ? "custom-button custom-button--big" : "custom-button"}
    >
      {children}
    </button>
  );
}

export default CustomButton;
```

Como puedes observar los componentes hijos se pintarán mediante la etiqueta { children } ya que esa variable la hemos recibido en las props mediante destructuring.

La hoja de estilos de nuestro CustomButton queda así:

```jsx
.custom-button {
  border: 2px solid red;
  padding: 5px 10px;
  border-radius: 5px;
  background: #FFF;
}

.custom-button--big {
  padding: 10px 20px;
  font-size: 24px;
  border: 4px solid red;
}
```
