import './App.css';
import Here from './Here';
import There from './There';
import move from './move';

function App() {
  return (
    <div className="App">
      <button onClick={() => move(1, 2)}>Move</button>
      <div className="App-test-div2"></div>
      <Here className="App-add-margin" locationId="1">
        <div className="App-test-div"></div>
      </Here>
      <div className="App-test-div2"></div>
      <There sizeRef="1" locationId="2" className="App-make-yellow" />
    </div>
  );
}

export default App;
