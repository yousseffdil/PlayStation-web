import './App.css';
import crashBandicootImage from './assets/crashBandicoot/CrashBandicoot.webp'
import crashBandicootTittle from './assets/crashBandicoot/CrashLogo.webp'
import CoDimage from './assets/COD/Pj.webp'
function App() {
  return (
    <div className="container">
      <div className='content'>
        <div className='CrashBandicoot'>
          <img src={crashBandicootImage} alt='Crash_Bandicoot' className='Crash'/>
          <img src = {crashBandicootTittle} alt='Main_Tittle' className='Tittle'></img>
        </div>
        <div className='Cod'>
          <img src={CoDimage} alt='CodPJ' className='CoDPJ'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
