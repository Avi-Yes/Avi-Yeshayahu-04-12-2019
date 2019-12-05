import React, { Component } from "react";
import { connect } from "react-redux";
import CurrentWeather from "./currentWeather";
import ForecastWeather from "./forecastWeather";
import {
  getDailyForecastActionCreator,
  toggelLikedCreator
} from "../store/actions";
import {
  saveLocally,
  removeLocally,
  isLocationExists
} from "../utilities/localstorgeHandling";

class WeatherDetailes extends Component {
  hadelLikeBtnCliked = () => {
    if (!this.props.currentLocation.liked) {
      this.props.toggelLiked(true);
      saveLocally(this.props.currentLocation);
    } else {
      this.props.toggelLiked(false);
      removeLocally(this.props.currentLocation.id);
    }
  };

  render() {
    if (!this.props.currentLocation || !this.props.dailyForecast) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="container mt-4 pt-1 main-content">
        <div className="row justify-content-between mt-2">
          <div className="col-2">
            <CurrentWeather
              weatherText={this.props.currentLocation.weatherText}
              weatherIcon={this.props.currentLocation.weatherIcon}
              temperature={this.props.currentLocation.temperature}
              name={this.props.currentLocation.name}
            />
          </div>

          <div className="col-2 ">
            <span onClick={this.hadelLikeBtnCliked} className="fav-icon">
              <i
                className={
                  this.props.currentLocation.liked ||
                  isLocationExists(this.props.currentLocation)
                    ? "fa fa-heart fa-3x"
                    : "fa fa-heart-o fa-3x"
                }
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>

        <div className="speartion" />
        <div className="row align-items-end mb-auto pb-3 ml-auto mr-auto forecast-items ">
          {this.props.dailyForecast.map(current => {
            return (
              <div
                key={current.day}
                className="col-sm col-xs-1 mr-2 justify-content-center rounded  weather-info "
              >
                <ForecastWeather
                  key={current.day}
                  day={current.day}
                  weatherIcon={current.weatherIcon}
                  temperature={current.temperature}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    dailyForecast: state.dailyForecast
    //liked: state.liked,
    // name: state.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getLocation: (locationId, locationName) => dispatch(getLocationActionCreator(locationId, locationName)),
    getDailyForecast: loacationId =>
      dispatch(getDailyForecastActionCreator(loacationId)),
    toggelLiked: option => {
      dispatch(toggelLikedCreator(option));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetailes);
