import logo from './logo.svg';
import './App.css';
import Hara from './components/hara'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from V2</p>
        <Hara/>
      </header>
    </div>
  );
}

export default App;
