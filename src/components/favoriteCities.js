import React, { Component } from "react";

import Navbar from "./navbar";
import CurrentWeather from "./currentWeather";
import { getFavLocations } from "../utilities/localstorgeHandling";

class FavoriteCities extends Component {
  state = {};
  render() {
    const favLocations = getFavLocations();

    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h2 className="text-center font-weight-bold mt-3">
            Favorites Locations
          </h2>
          {favLocations.map(location => {
            return (
              <div key={location.id} className="row mt-3">
                <div className="col border">
                  <CurrentWeather
                    weatherText={location.weatherText}
                    weatherIcon={location.weatherIcon}
                    temperature={location.temperature}
                    name={location.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default FavoriteCities;
