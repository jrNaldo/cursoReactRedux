import logo from './logo.svg';
import './App.css';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React e Redux</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Sorteio></Sorteio>
        <Soma></Soma>
      </div>
    </div>
  );
}

export default App;
