import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import Navbar from './Navbar.js';
import Home from './pages/Home.js';
import Card from './pages/Card.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="card" element={<Card />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);