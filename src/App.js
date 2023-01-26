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
