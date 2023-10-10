import React , {useState} from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [city,setCity]=useState(props.defaultCity);
    const[weatherData , setWeatherData]=useState({ready: false})

function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        ready:true,
        temperature:response.data.temperature.current,
        city:response.data.city,
        date:new Date (response.data.time * 1000)
    })
}
function search(){
//city
 const apiKey="db3b7bt6a8b1a34f70o79e9676b95097";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);
}


function handleSubmit(event){
event.preventDefault();
search(city);
}
function handleCityChange(event){
    setCity(event.target.value);


}
if (weatherData.ready){
 return  <div className="Weather">
        
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-5">
            <input type="search" 
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
            className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit"
            value="Search"
            className="btn btn-primary"/>
            </div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
         </div>  
} else {
    search();
   return "Searching for Temperature🛠🔎..."
}   
}