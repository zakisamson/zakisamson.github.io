import './App.css';
import Hero from './Components/Hero';
import Navbars from './Components/Navbars';

function App() {
  return (
    <div className="App">
      <Navbars />
      <div className="container">
        <Hero />
      </div>
    </div>
  );
}

export default App;
