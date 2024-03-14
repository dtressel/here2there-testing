import { useState } from 'react';
import './App.css';
import Here from './Here';
import There from './There';

function App() {
  const [moveTo, setMoveTo] = useState();
  const handleMove = (to) => {
    setMoveTo(to);
  }

  return (
    <div className="App">
      <button onClick={() => handleMove(2)}>Move</button>
      <button onClick={() => handleMove(1)}>Home</button>
      <div className="App-test-div2"></div>
      <Here className="App-add-margin" locationId="1" moveTo={moveTo} >
        <div className="App-test-div"></div>
      </Here>
      <div className="App-test-div2"></div>
      <There sizeRef="1" locationId="2" className="App-make-yellow">
        <p>Move stuff to here. fdnaufdshuaihfudhjakhfjkdh ajkfhdishauhuklh uflhduail</p>
        <p>Move stuff to here.</p>
        <p>Move stuff to here.</p>
        <p>Move stuff to here.</p>
        <p>Move stuff to here.</p>
        <p>Move stuff to here.</p>
        <p>Move stuff to here.</p>
      </There>
    </div>
  );
}

export default App;
