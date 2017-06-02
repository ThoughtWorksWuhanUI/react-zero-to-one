import React from 'react';
import classNames from 'classnames/bind';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';
import theme from './theme.scss';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';


const cx = classNames.bind(styles);

class PositionSelector extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      positions:[],
      suggestions:[],
      value:'',
      isEdit:false
    };
  }

  onBlur=()=>{
    this.setState({isEdit:false});
  };

  onFocus=()=>{
    this.setState({isEdit:true});
  };

  componentDidMount() {
    axios.get("http://react0to1.getsandbox.com/airbnb/position")
      .then((response) => {
        this.setState({ positions: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getSuggestions = (inputValue)=> {
    return this.state.positions.filter(function (e) {
      var searchString = inputValue.toLowerCase;
      return e.position.toLowerCase.indexOf(searchString) >= 0 || e.city.indexOf(searchString) >= 0;
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({suggestions: this.getSuggestions(value)});
  };

  onSuggestionsClearRequested = () => {
    this.setState({suggestions: []});
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  render(){
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Destination, city, address',
      value,
      onChange: this.handleChange,
      onBlur:this.onBlur
    };

    function getSuggestionValue(suggestion) {
      return suggestion.position;
    }

    function renderSuggestion(suggestion) {
      return (
        <span>{suggestion.position}{suggestion.province}{suggestion.city}</span>
      );
    }
    return (
      <div className={cx('container')}>
        {!this.state.isEdit &&
        <input className={cx('input-box')} value={this.state.value} placeholder='AnyWhere' onChange={this.handleChange} onFocus={this.onFocus} type="text"/>}
        {this.state.isEdit &&
        <Autosuggest
          theme={theme}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />}
      </div>);
  }
}
export  default PositionSelector
