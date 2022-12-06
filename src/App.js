import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import Menu from './componentes/Menu/Menu';
import Footer from './componentes/Footer/Footer';
import Horario from './componentes/Horario/Horario';
import Cronometro from './componentes/Cronometro/Cronometro';
import Temporalizador from './componentes/Temporizador/Temporalizador';
import Contacto from './componentes/Contacto/Contacto';
import Contacto2 from './componentes/Contacto/Contacto2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route index element={<Horario/>}/>

          <Route path="/Horario" element={<Horario/>}/>

          <Route path="/cronometro" element={<Cronometro/>}/>
            
          <Route path="/temporizador" element={<Temporalizador/>}/>
            
          <Route path="/contacto" element={<Contacto2/>}/>
        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
