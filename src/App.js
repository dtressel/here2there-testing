import { useState } from 'react';
import './App.css';
import Here from './Here';
import There from './There';

function App() {
  const [move, setMove] = useState();
  const handleMove = (transition) => {
    setMove(transition);
  }

  return (
    <div className="App">
      <button
        onClick={() => handleMove({ 
          to: 2,
          duration: "200ms",
          timing: "ease-in-out"
        })}
      >Move</button>
      <button onClick={() => handleMove({ to: 1, duration: "5s" })}>Home</button>
      <div className="App-test-div2"></div>
      <Here className="App-add-margin" locationId="1" move={move} >
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
