import React from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";
import { getQueryInfo } from "../../utilities/dataProvidor";
import {
  setValueInputCreator,
  setSegguestionsCreator,
  getLocationActionCreator,
  getDailyForecastActionCreator
} from "../../store/actions";
import "./style.css";

class SearchInput extends React.Component {
  getSuggestionValue = suggestion => {
    this.props.getLocation(suggestion.id, suggestion.name);
    this.props.getDailyForecast(suggestion.id);
    this.props.setValueInput("");
    return suggestion.name;
  };

  renderSuggestion = suggestion => <span>{suggestion.name}</span>;

  onChange = (event, { newValue, method }) => {
    if (method === "click" || method === "enter") {
      this.props.setValueInput("");
    } else {
      this.props.setValueInput(newValue);
    }
  };

  onSuggestionsFetchRequested = ({ value }) => {
    getQueryInfo(value).then(data => this.props.setSuggestios(data));
  };

  onSuggestionsClearRequested = () => {
    this.props.setSuggestios([]);
  };

  render() {
    const value = this.props.value === undefined ? "" : this.props.value;
    const suggestions = this.props.suggestions;
    const inputProps = {
      placeholder: "Search For City",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions === undefined ? [] : suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
    suggestions: state.suggestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValueInput: valueInput => dispatch(setValueInputCreator(valueInput)),
    setSuggestios: suggestions => dispatch(setSegguestionsCreator(suggestions)),
    getLocation: (locationId, locationName) =>
      dispatch(getLocationActionCreator(locationId, locationName)),
    getDailyForecast: loacationId =>
      dispatch(getDailyForecastActionCreator(loacationId))
    // setName: name => dispatch(setNameCreator(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
