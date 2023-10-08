import React from "react";
import "./Weather.css";


export default function Weather(){
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
       <h1>Pretoria</h1>
       <img width="94" 
       height="94" 
       src="https://img.icons8.com/3d-fluency/94/cloud.png" 
       alt="cloud"/>

       <h2>23°C</h2> 
       <div className="row">
        <div className="col-4">
         CURRENTLY
        </div>
        <div className="col-4">
Cloudy
        </div>
        <div className="col-4">
            18:35
        </div>
       </div>
       <br></br>
       <br></br>
       <div className="row">
        <div className="col-4">
            345mm
            <br></br>
            PRESSURE
        </div>
        <div className="col-4">
            84%
            <br></br>
            HUMIDITY
        </div>
        <div className="col-4">
            2mph
            <br></br>
            WIND
        </div>
       </div>
       <br></br>
       <br></br>
       <div className="row">
        <div className="col-6">
         Tuesday , 25 Dec
        </div>
        <div className="col-6">
            23°C / 15°F
        </div>
       </div>
        
        <hr></hr>
        </div>;
    
};