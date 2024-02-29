import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import moment from 'moment';



function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setcity] = useState("");
  const [temperature, setTemperature] = useState("null");
  const [condition, setCondition] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [humidity, setHumidity] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const date = moment().format("MMMM DD YYYY");
  const time = moment().format("HH mm ss");

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a0965372154f4936ad390543233012&q=${searchQuery}`);
      const data = await response.json();
      setcity(data.location.name);
      setTemperature(data.current.temp_c);
      setCondition(data.current.condition.text);
      setImage(data.current.condition.icon);
      setLocation(data.location.tz_id);
      setHumidity(data.current.humidity);
      setWindSpeed(data.current.wind_kph);
      setRegion(data.location.region);
      setCountry(data.location.country);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  }
  return (
    <div id='container'>
      <div id="heder" >
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
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
          <div id='date-time'>
            <p>{date} </p>
            <p>{time} </p>
          </div>
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
      <div className='row'>
        <div className='col-4'>
          <div className='container-icon'>
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
        <div id='table' className='col-8'>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Temperature</th>
                <th scope="col">Humidity</th>
                <th scope="col">Condition</th>
                <th scope="col">wind speed</th>
                <th scope="col">Region</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{location}</th>
                <td>{temperature}°C</td>
                <td>{humidity}</td>
                <td>{condition}</td>
                <td>{windSpeed}</td>
                <td>{region}</td>
                <td>{country}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default App
