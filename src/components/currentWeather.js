import React, { Component } from "react";

class CurrentWeather extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img
          className="weather-icon bg-white rounded"
          src={require(`../weather-icons/${this.props.weatherIcon}-s.png`)}
          alt="weather-icon"
        ></img>
        <h6 className="text-center font-weight-bold m-0">{this.props.name}</h6>
        <h6 className="text-center font-weight-bold m-0">
          {this.props.temperature}&#8451;
        </h6>
        <h6 className="text-center font-weight-bold m-0">
          {this.props.weatherText}
        </h6>
      </React.Fragment>
    );
  }
}

export default CurrentWeather;
