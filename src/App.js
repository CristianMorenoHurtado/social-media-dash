import './App.scss';
import Nav from './assets/components/Nav';
import Main from './assets/components/Main';
import { useState } from 'react';

function App() {
  function randomNum() {
    return Math.floor(Math.random() * 10000).toLocaleString('en-US')
  }
  function randomSmallNum() {
    return Math.floor(Math.random() * 500)
  }
  const [color, setColor] = useState(true)

  return (
    <div className="App">
      <Nav color={color} />
      <Main color={color} randomNum={randomNum} randomSmallNum={randomSmallNum}/>
      <button onClick={() => setColor(!color)} >Reload Data</button>
    </div>
  );
}

export default App;
