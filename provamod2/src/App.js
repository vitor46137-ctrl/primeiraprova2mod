import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frutas from './Frutas';
import NewPage from './nova/Componentes/NewPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Frutas</Link>
        <Link to="/nova">Nova Fruta</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Frutas />} />
        <Route path="/nova" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
