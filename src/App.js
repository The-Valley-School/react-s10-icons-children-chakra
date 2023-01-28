import './App.css';
import { IoAirplane, IoAmericanFootballOutline, IoAccessibilityOutline } from "react-icons/io5";
import { FcAssistant, FcLinux } from "react-icons/fc";
import { FaHandPaper, FaHandshakeAltSlash } from "react-icons/fa";
import CustomButton from "./components/CustomButton/CustomButton";

function App() {
  return (
    <div className="app">

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
