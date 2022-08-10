import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import Caro from './containers/Caro';
import ChessGame from './containers/Chess';
import Test from './containers/Test/Test';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Home/>} />
          <Route path='game-caro-made-by-phong-tran' element={<Caro/>} />
          <Route path='game-chess-made-by-phong-tran' element={<ChessGame/>} />
          <Route path='test' element={<Test/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
