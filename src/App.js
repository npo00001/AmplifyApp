import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Cards from './Cards.js';

function App() {
  return (
  <div className="App">
    <Navbar />
    <h1>CS 230L</h1>
    <h2>Section - 003</h2>
    <p>WVU ID: 800323433</p>
    <p>Hi I am Nate O'Brien</p>
    <Cards />
  </div>
  );
}

export default App;