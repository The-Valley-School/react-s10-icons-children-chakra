import './App.css';
import { IoAirplane, IoAmericanFootballOutline, IoAccessibilityOutline } from "react-icons/io5";
import { FcAssistant, FcLinux } from "react-icons/fc";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaHandPaper, FaHandshakeAltSlash } from "react-icons/fa";
import CustomButton from "./components/CustomButton/CustomButton";
import Collapsable from './components/Collapsable/Collapsable';
import Circle from './components/Circle/Circle';

function App() {
  return (
    <div className="app">

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
