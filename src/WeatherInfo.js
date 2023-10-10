import React from "react";
import FormattedDate from "./formattedDate";


export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
       <img width="94" 
       height="94" 
       src="https://img.icons8.com/3d-fluency/94/cloud.png" 
       alt="cloud"/>

       <h2>{Math.round(props.data.temperature)}°C</h2> 
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
