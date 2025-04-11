import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Trivia from './components/Trivia';
import CambiarColor from './components/CambiarColores';
import Reloj from './components/Reloj';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contador" exact element={<Counter/>}></Route>
        <Route path="/trivia" exat element={<Trivia/>}></Route>
        <Route path="/cambiador-color" exact element={<CambiarColor/>}></Route>
        <Route path="/reloj" exact element={<Reloj/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
