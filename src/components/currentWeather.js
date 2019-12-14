import React from "react";

const CurrentWeather = props => {
  return (
    <React.Fragment>
      <img
        className="weather-icon bg-white rounded"
        src={require(`../weather-icons/${props.weatherIcon}-s.png`)}
        alt="weather-icon"
      ></img>
      <h6 className="text-center font-weight-bold m-0">{props.name}</h6>
      <h6 className="text-center font-weight-bold m-0">
        {props.temperature}&#8451;
      </h6>
      <h6 className="text-center font-weight-bold m-0">{props.weatherText}</h6>
    </React.Fragment>
  );
};

export default CurrentWeather;
