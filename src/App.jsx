import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Trivia from './components/Trivia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contador" exact element={<Counter/>}></Route>
        <Route path="/trivia" exat element={<Trivia/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
