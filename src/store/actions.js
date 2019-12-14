import {
  getCurrentCondition,
  getDailyForecasts
} from "../utilities/dataProvidor";

export const GET_LOCATION = "GET_LOCATION";
export const GET_DAILY_FORECAST = "GET_DAILY_FORECAST";
export const SEARCH_LOCATION = "SEARCH_LOCATION";
export const SET_SEARCH_LOCATION = "SET_SEARCH_LOCATION";
export const TOGGEL_LIKED = "TOGGEL_LIKED";
export const SET_VALUE_INPUT = "SET_VALUE_INPUT";
export const SET_SUGGESTIONS = "SET_SUGGESTIONS";

export const toggelLikedCreator = option => {
  return {
    type: TOGGEL_LIKED,
    payload: option
  };
};

export const setValueInputCreator = value => {
  return {
    type: SET_VALUE_INPUT,
    payload: value
  };
};

export const setSegguestionsCreator = suggestions => {
  return {
    type: SET_SUGGESTIONS,
    payload: suggestions
  };
};
export const getLocationActionCreator = (
  locationId,
  locationName
) => async dispatch => {
  const res = await getCurrentCondition(locationId, locationName).then(
    location => location
  );

  dispatch({ type: GET_LOCATION, payload: res });
};

export const getDailyForecastActionCreator = locationId => async dispatch => {
  const res = await getDailyForecasts(locationId).then(response => response);

  dispatch({ type: GET_DAILY_FORECAST, payload: res });
};
