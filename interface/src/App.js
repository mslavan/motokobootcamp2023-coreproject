import logo from './logo.svg';
import ConnectButton from "./components/ConnectButton"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ConnectButton />
      </header>
      <main>
      </main>
    </div>
  );
}

export default App;
