import React , {useState} from "react";
import FormattedDate from "./formattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
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
if (weatherData.ready){
 return  <div className="Weather">
        
        <form>
            <div className="row">
                <div className="col-5">
            <input type="search" 
            placeholder="Enter a city"
            className="form-control"/>
            </div>
            <div className="col-3">
            <input type="submit"
            value="Search"
            className="btn btn-primary"/>
            </div>
            </div>
        </form>
       <h1>{weatherData.city}</h1>
       <img width="94" 
       height="94" 
       src="https://img.icons8.com/3d-fluency/94/cloud.png" 
       alt="cloud"/>

       <h2>{Math.round(weatherData.temperature)}°C</h2> 
       <div className="row">
        <div className="col-4">
         CURRENTLY
        </div>
        <div className="col-4 ">
Cloudy
        </div>
        <div className="col-4">
            
        </div>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <div className="row">
        <div className="col-6">
        <FormattedDate date={weatherData.date} />
        </div>
        <div className="col-6">
            {Math.round(weatherData.temperature)}°C / 15°F
        </div>
       </div>
        
        <hr></hr>
        </div>;
    
} else {
     const apiKey="db3b7bt6a8b1a34f70o79e9676b95097";
    let city="London";
    let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
   axios.get(apiUrl).then(handleResponse);
   
   return "Searching for Temperature🛠🔎..."
}   
}