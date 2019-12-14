import { isLocationExists } from "./localstorgeHandling";

const apiKey = "pafSLrxAaB7FuHeau3pJ6Cvx6DAojRkp";
const currentConditionUrl =
  "http://dataservice.accuweather.com/currentconditions/v1";
const dailyForecastsUrl =
  "http://dataservice.accuweather.com/forecasts/v1/daily/5day";
const autocompleteSearchUrl =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getCurrentCondition = (locationId, locationName) => {
  return fetch(`${currentConditionUrl}/${locationId}?apikey=${apiKey}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(response => {
      return {
        id: locationId,
        name: locationName,
        liked: isLocationExists(locationId),
        weatherText: response[0].WeatherText,
        weatherIcon: response[0].WeatherIcon,
        temperature: response[0].Temperature.Metric.Value
      };
    })
    .catch(err => console.log(err));
};

export const getDailyForecasts = locationId => {
  return fetch(
    `${dailyForecastsUrl}/${locationId}?apikey=${apiKey}&metric=true`
  )
    .then(handleErrors)
    .then(response => response.json())
    .then(response =>
      response.DailyForecasts.map((day, index) => {
        return {
          day: days[(new Date().getDay() + index) % 7],
          weatherIcon: day.Day.Icon,
          temperature: day.Temperature.Maximum.Value
        };
      })
    )
    .catch(err => console.log(err));
};

export const getQueryInfo = query => {
  return fetch(`${autocompleteSearchUrl}?apikey=${apiKey}&q=${query}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(response =>
      response.map(city => {
        return {
          id: city.Key,
          name: city.LocalizedName
        };
      })
    )
    .catch(err => console.log(err));
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
