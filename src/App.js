import './App.css';
import Here from './Here';
import There from './There';

function App() {
  return (
    <div className="App">
      <div className="App-test-div2"></div>
      <Here className="App-add-margin" locationId="1">
        <div className="App-test-div"></div>
      </Here>
      <div className="App-test-div2"></div>
      <There sizeRef="1" className="App-make-yellow" />
    </div>
  );
}

export default App;
