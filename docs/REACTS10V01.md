# VIDEO 01 - React-icons

En esta sesión veremos cómo instalar la librería react-icons:

<https://react-icons.github.io/react-icons/>

Para ello debemos ejecutar el siguiente comando npm dentro de nuestro proyecto:

```bash
npm install react-icons --save
```

Y posteriormente importar el icono que queramos y usarlo en nuestros componentes:

```jsx
import { FaBeer } from 'react-icons/fa';
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}
```

Veremos también como cambiar el tamaño o el color de nuestros iconos mediante clases o mediante propiedades.

Finalmente nuestro componente App.js quedará así:

```jsx
import './App.css';
import { IoAirplane, IoAmericanFootballOutline, IoAccessibilityOutline } from "react-icons/io5";
import { FcAssistant, FcLinux } from "react-icons/fc";

function App() {
  return (
    <div className="app">
      
      <h2>Iconos de Ionicons 5</h2>
      <IoAirplane className='my-plane' />
      <IoAmericanFootballOutline className='my-ball' />
      <IoAccessibilityOutline color="pink" />

      <h2>Iconos flat:</h2>
      <FcAssistant size={20}></FcAssistant>
      <FcLinux size={20}></FcLinux>
    </div>
  );
}

export default App;
```

Y nuestra hoja de estilos así:

```css
.my-plane {
    color: blue;
    margin-right: 20px;
}

.my-ball {
    color: orange;
    font-size: 20px;
}
```

Esto mostrará nuestros iconos de la siguiente manera:

![Untitled](/docs/assets/Untitled.png)
