import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setcity] = useState("");
  const [temperature, setTemperature] = useState("null");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a0965372154f4936ad390543233012&q=${searchQuery}`);
      const data = await response.json();
      setcity(data.location.name);
      setTemperature(data.current.temp_c);
      setCondition(data.current.condition.text);
      setImage(data.current.condition.icon);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }
  return (
    <div id='container'>
    <div id="heder" >
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" height="500px">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <h3 id='title'>Weather Forcast</h3>
            <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navButton">
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2">Forcast</a></li>
          <li><a href="#" className="nav-link px-2">News</a></li>
          <li><a href="#" className="nav-link px-2">Map</a></li>
          <li><a href="#" className="nav-link px-2">About</a></li>
        </ul>
      </header>
      <div className="row justify-content-center">
      <div className="col-5">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-control" id="inputCity" placeholder="Enter City Name" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>
      </div>
    </div>
    </div>
    <div id="space"></div>
    

    <div id="subTitle">
      <h2>Current Weather Condition</h2>
    </div>
    <div id='space2'></div>
    <div className='container'>
      <div id='detalis1'>
        <p id='cityName'>{city}</p>
        <div id="weatherImage">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div>
          <p id='tempValue'>{temperature}°C</p>
          <p id='conditionValue'>{condition}</p>
        </div>
      </div>
    </div>


  </div>
  )
}

export default App
