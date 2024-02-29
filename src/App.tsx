import { useState } from 'react';
import './App.css'
import Navbar from './assets/componnents/navbar';
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
    <div>
      <div className="col-5">
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="form-control" id="inputCity" placeholder="Enter City Name" />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3" onClick={handleSearch}>Search</button>
      </div>
      <div id="subTitle">
        <h2>Current Weather Condition</h2>
      </div>
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
