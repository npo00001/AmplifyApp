import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h1>CS 230L</h1>
      <h2>Section - 003</h2>
      <p>WVU ID: 800323433</p>
      <p>Hi I am Nate O'Brien</p>

      <div class="row">
        <div class="col">
          <div class="card text-white bg-primary">
            <div class="card-body">
              <h5 class="card-title">Card 01</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card text-white bg-danger">
            <div class="card-body">
              <h5 class="card-title">Card 02</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card text-white bg-success">
            <div class="card-body">
              <h5 class="card-title">Card 03</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;