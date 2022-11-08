import logo from './img/Logo.png'
import './App.css';

//importar componente
import CompShowPc from './inventario/ShowPc';
import CompCreatePc from './inventario/CreatePc';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowPc />} />
          <Route path='/create' element={ <CompCreatePc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
