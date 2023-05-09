import './App.css';
import crashBandicootImage from './assets/crashBandicoot/CrashBandicoot.webp'
import crashBandicootTittle from './assets/crashBandicoot/CrashLogo.webp'
import CoDimage from './assets/COD/Pj.webp'
import CotnrollerPS5 from './assets/PS5/Controller.webp'

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
        <div className='PlayStation'></div>
        <div className='Shop'></div>

        <div className='RDR2'></div>

        <div className='DMC5'></div>
        <h1 className='TittlePS5'>PlayStation</h1>
        <h1 className='TittlePS5'>PlayStation</h1>
        <div className='PS5'>
        <img src={CotnrollerPS5} alt='Controller' className='ControllerPS5'></img>
        </div>

      </div>
    </div>
  );
}

export default App;
