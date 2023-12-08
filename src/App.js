
import './App.css';
import Bodysection from './Components/Bodysection';
import Scroll from './Components/Scroll';


function App() {
  return (
    <div>


      <Bodysection/>
      <Scroll/>
    <div className="App bg bg-purple-700">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
 Abinaya
        <p>
          Edit <code>src/App.js</code> and hello save to reload.
        <p className='text-[40px] text-[#242424] font-extralight'>
          Edit <code>src/App.js</code> and save to reload main
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
