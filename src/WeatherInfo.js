import React from "react";
import FormattedDate from "./formattedDate";


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
       <h2>{Math.round(props.data.temperature)}°C</h2> 
       <div className="row">
        <div className="col-4">
        </div>
        <div className="col-4 ">
{props.data.description}
        </div>
        <div className="col-4">
           {props.data.humidity}%
           <br></br>
           Humidity
        </div>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <div className="row">
        <div className="col-6">
        <FormattedDate date={props.data.date} />
        </div>
        <div className="col-6">
            {Math.round(props.data.temperature)}°C / 15°F
        </div>
       </div>
        
        <hr></hr>
        </div>
    );
}
