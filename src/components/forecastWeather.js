import React, { Component } from "react";

class ForecastWeather extends Component {
  render() {
    const { weatherIcon, day, temperature } = this.props;
    console.log(this.props);
    if (!weatherIcon || !day || !temperature) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <img
          className="weather-icon bg-white rounded"
          src={require(`../weather-icons/${this.props.weatherIcon}-s.png`)}
          alt="weather-icon"
        ></img>
        <h3 className="text-center">{this.props.day}</h3>
        <h5 className="text-center">{this.props.temperature}&#8451;</h5>
      </React.Fragment>
    );
  }
}

export default ForecastWeather;
