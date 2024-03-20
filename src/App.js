import { useState } from 'react';
import './App.css';
import Here from './Here';
import There from './There';

function App() {
  const [moveYellow, setMoveYellow] = useState();
  const [moveGreen, setMoveGreen] = useState();
  const [moveRed, setMoveRed] = useState();
  const handleMoveYellow = (event) => {
    event.preventDefault();
    setMoveYellow({
      to: event.target[0].value,
      duration: `${event.target[1].value}ms`,
      timing: event.target[2].value,
      shape: event.target[3].value,
      delay: `${event.target[4].value}ms`
    });
  }
  const handleMoveGreen = (event) => {
    event.preventDefault();
    console.log(event);
    setMoveGreen();
  }
  const handleMoveRed = (event) => {
    event.preventDefault();
    console.log(event);
    setMoveRed();
  }

  return (
    <div className="App">
      <div className="App-controls">
        <form onSubmit={handleMoveYellow}>
          <div>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" defaultValue={2000} step="100" />
          </div>
          <div>
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
          </div>
          <div>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
          </div>
          <div>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" defaultValue={0} step="100" />
          </div>
          <button type="submit">Move Yellow Square</button>
        </form>

        <form onSubmit={handleMoveGreen}>
          <div>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" default="0" defaultValue={2000} step="100" />
          </div>
          <div>
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
          </div>
          <div>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
          </div>
          <div>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" default="0" defaultValue={0} step="100" />
          </div>
          <button type="submit">Move Green Square</button>
        </form>

        <form onSubmit={handleMoveRed}>
          <div>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" default="0" defaultValue={2000} step="100" />
          </div>
          <div>
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
          </div>
          <div>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
          </div>
          <div>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" default="0" defaultValue={0} step="100" />
          </div>
          <button type="submit">Move Red Square</button>
        </form>
      </div>
      <div className="App-here-container">
        <Here locationId="1" move={moveYellow} >
          <div className="App-here-yellow"></div>
        </Here>
        <Here locationId="2" move={moveGreen} >
          <div className="App-here-green"></div>
        </Here>
        <Here locationId="3" move={moveRed} >
          <div className="App-here-red"></div>
        </Here>
      </div>
      <div className="App-there-container">
        <There sizeRef="1" locationId="4" className="App-make-yellow" />
        <There sizeRef="1" locationId="5" className="App-make-yellow" />
        <There sizeRef="1" locationId="6" className="App-make-yellow" />
      </div>
    </div>
  );
}

export default App;
