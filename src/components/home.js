import React, { Component } from "react";
import { connect } from "react-redux";

import WeatherDetailes from "./weatherDetails";
import Navbar from "./navbar";
import SearchInput from "./inputSearch/inputSearch";
import {
  getLocationActionCreator,
  getDailyForecastActionCreator
} from "../store/actions";

class Home extends Component {
  state = {};

  componentDidMount() {
    this.props.getLocation("215854", "Tel Aviv");
    this.props.getDailyForecast("215854");
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SearchInput />
        <WeatherDetailes />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentLocation: state.currentLocation,
    dailyForecast: state.dailyForecast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocation: (locationId, locationName) =>
      dispatch(getLocationActionCreator(locationId, locationName)),
    getDailyForecast: loacationId =>
      dispatch(getDailyForecastActionCreator(loacationId))
    // setName: name => dispatch(setNameCreator(name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
