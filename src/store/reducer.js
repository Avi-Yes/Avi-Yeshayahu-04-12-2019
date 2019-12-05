import {
  GET_DAILY_FORECAST,
  GET_LOCATION,
  TOGGEL_LIKED,
  SET_VALUE_INPUT,
  SET_SUGGESTIONS
} from "./actions";

const intialState = {
  currentLocation: {},
  dailyForecast: [],
  value: "",
  suggestions: []
};

export function appReducer(state = intialState, action) {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    case GET_DAILY_FORECAST:
      return {
        ...state,
        dailyForecast: action.payload
      };

    case TOGGEL_LIKED:
      let newstate = { ...state };
      let newLocation = { ...newstate.currentLocation };
      newLocation.liked = action.payload;
      return {
        ...newstate,
        currentLocation: newLocation
      };
    case SET_VALUE_INPUT:
      return {
        ...state,
        value: action.payload
      };
    case SET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };
    default:
      return state;
  }
}
