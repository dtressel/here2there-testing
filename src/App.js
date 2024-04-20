import { useState, useRef } from 'react';
import './App.css';
import Movable from './Movable';
import Dock from './Dock';

function App() {
  const [moveYellow, setMoveYellow] = useState();
  const [moveGreen, setMoveGreen] = useState();
  const [moveRed, setMoveRed] = useState();

  const moveYellowSubmit = useRef();
  const moveGreenSubmit = useRef();
  const moveRedSubmit = useRef();

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
    setMoveGreen({
      to: event.target[0].value,
      duration: `${event.target[1].value}ms`,
      timing: event.target[2].value,
      shape: event.target[3].value,
      delay: `${event.target[4].value}ms`
    });
  }
  const handleMoveRed = (event) => {
    event.preventDefault();
    setMoveRed({
      to: event.target[0].value,
      duration: `${event.target[1].value}ms`,
      timing: event.target[2].value,
      shape: event.target[3].value,
      delay: `${event.target[4].value}ms`
    });
  }
  const handleMoveAll = () => {
    moveYellowSubmit.current.click();
    moveGreenSubmit.current.click();
    moveRedSubmit.current.click();
  }

  return (
    <div className="App">
      <h1>Here2There Demo</h1>
      <div className="App-controls">
        <div className="App-form-container">
          <h2>Move Yellow Square</h2>
          <form onSubmit={handleMoveYellow}>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" defaultValue={2000} step="100" />
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" defaultValue={0} step="100" />
            <button type="submit" ref={moveYellowSubmit}>Move Yellow Square</button>
          </form>
        </div>

        <div className="App-form-container">
          <h2>Move Green Square</h2>
          <form onSubmit={handleMoveGreen}>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" default="0" defaultValue={2000} step="100" />
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" default="0" defaultValue={0} step="100" />
            <button type="submit" ref={moveGreenSubmit}>Move Green Square</button>
          </form>
        </div>

        <div className="App-form-container">
          <h2>Move Red Square</h2>
          <form onSubmit={handleMoveRed}>
            <label htmlFor="moveTo">Move To</label>
            <select id="moveTo" name="moveTo">
              <option value="1">Dock 1</option>
              <option value="2">Dock 2</option>
              <option value="3">Dock 3</option>
              <option value="4">Dock 4</option>
              <option value="5">Dock 5</option>
              <option value="6">Dock 6</option>
            </select>
            <label htmlFor="duration">Duration (in ms)</label>
            <input id="duration" name="duration" type="number" default="0" defaultValue={2000} step="100" />
            <label htmlFor="timing">Timing</label>
            <select id="timing" name="timing">
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="linear">linear</option>
            </select>
            <label htmlFor="shape">Shape</label>
            <select id="shape" name="shape">
              <option value="straight">straight</option>
              <option value="innerArc">inner arc</option>
              <option value="outerArc">outer arc</option>
              <option value="innerL">inner L</option>
              <option value="outerL">outer L</option>
            </select>
            <label htmlFor="delay">Delay (in ms)</label>
            <input id="delay" name="delay" type="number" default="0" defaultValue={0} step="100" />
            <button type="submit" ref={moveRedSubmit}>Move Red Square</button>
          </form>
        </div>
      </div>
      <div className="App-move-all-button-wrapper">
        <button type="button" onClick={handleMoveAll} className="App-move-all-button">Move All Squares</button>
      </div>
      <div className="App-dock-container">
        <Dock sizeTo="yellow" dockId="1" className="App-dock-background">
          <h4>Dock #1</h4>
          <Movable movableId="yellow" move={moveYellow}>
            <div className="App-movable-yellow"></div>
          </Movable>
        </Dock>
        <Dock sizeTo="green" dockId="2" className="App-dock-background">
          <h4>Dock #2</h4>
          <Movable movableId="green" move={moveGreen}>
            <div className="App-movable-green"></div>
          </Movable>
        </Dock>
        <Dock sizeTo="red" dockId="3" className="App-dock-background">
          <h4>Dock #3</h4>
          <Movable movableId="red" move={moveRed}>
            <div className="App-movable-red"></div>
          </Movable>
        </Dock>
      </div>
      <div className="App-dock-container">
        <Dock sizeTo="yellow" dockId="4" className="App-dock-background margin-1" honorPadding>
          <div>
            <h4>Dock #4</h4>
            <div>(with padding)</div>
          </div>
        </Dock>
        <Dock sizeTo="yellow" dockId="5" className="App-dock-background">
          <h4>Dock #5</h4>
        </Dock>
        <Dock sizeTo="yellow" dockId="6" className="App-dock-background">
          <h4>Dock #6</h4>
        </Dock>
      </div>
    </div>
  );
}

export default App;
