import React, { useState } from 'react';
import './App.css';
import crashBandicootImage from './assets/crashBandicoot/CrashBandicoot.webp';
import crashBandicootTittle from './assets/crashBandicoot/CrashLogo.webp';
import CoDimage from './assets/COD/Pj.webp';
import CotnrollerPS5 from './assets/PS5/Controller.webp';
import { AiOutlineLeft, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook, AiOutlineInfoCircle } from 'react-icons/ai';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="content">
        <div className="CrashBandicoot">
          <img src={crashBandicootImage} alt="Crash_Bandicoot" className="Crash" />
          <img src={crashBandicootTittle} alt="Main_Tittle" className="Tittle" />
        </div>
        <div className="Cod">
          <img src={CoDimage} alt="CodPJ" className="CoDPJ" />
        </div>
        <div className="PlayStation"></div>
        <div className="Shop"></div>
        <div className="RDR2"></div>
        <div className="DMC5"></div>
        <h1 className="TittlePS5">PlayStation</h1>
        <h1 className="TittlePS5">PlayStation</h1>
        <div className="PS5">
          <img src={CotnrollerPS5} alt="Controller" className="ControllerPS5" />
        </div>
        <button className="Menu" onClick={toggleMenu}>
          <AiOutlineLeft/>
        </button>
        <div className={`Icons ${isMenuOpen ? 'show' : 'hide'}`}>
          <ul>
            <li>
              <AiOutlineInstagram />
            </li>
            <li>
              <AiOutlineFacebook />
            </li>
            <li>
              <AiOutlineInfoCircle />
            </li>
            <li>
              <AiOutlinePhone />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App; 