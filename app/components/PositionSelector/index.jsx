import React from 'react';
import { connect } from 'react-redux'
import {mapDispatchToProps} from '../../redux/common/MapDispatchToProps';
import classNames from 'classnames/bind';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';
import theme from './theme.scss';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';


const cx = classNames.bind(styles);
const mapStateToProps = (state) => ({
  where: state.searchCriteria.where
});

class PositionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: [],
      suggestions: [],
      value: props.where || '',
      isEdit: false
    };
  }

  onBlur = () => {
    this.setState({ isEdit: false });
  };

  onFocus = () => {
    this.setState({ isEdit: true });
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

  getSuggestions = (inputValue) => {
    return this.state.positions.filter(function (e) {
      var searchString = inputValue.toLowerCase().trim();
      return (`${e.position}+${e.province}+${e.city}`).toLowerCase().includes(searchString);
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: this.getSuggestions(value) });
  };

  onSuggestionsClearRequested = () => {
    this.setState({ suggestions: [] });
  };

  onSuggestionSelected = () => {
    this.props.submitSearch();
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.updateSearchCriteria({ where: newValue });
  };

  getSuggestionValue = (suggestion) => {suggestion.position;};

  renderSuggestion=(suggestion)=> {
  return (
    <span>{suggestion.position} {suggestion.province} {suggestion.city}</span>
  )};

  render() {
    const { value, suggestions,isEdit } = this.state;
    const inputProps = {
      placeholder: '目的地,城市,地址',
      value,
      onChange: this.handleChange,
      onBlur: this.onBlur
    };
    return (
      <div className={cx('container')}>
        {!isEdit &&
          <input className={cx('input-box')} value={value} placeholder='目的地,城市,地址' onChange={this.handleChange} onFocus={this.onFocus} type="text" />}
        {isEdit &&
          <Autosuggest
            theme={theme}
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={this.onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
          />}
      </div>);
  }
}
PositionSelector.propTypes = {
  searchCriteria: React.PropTypes.object,
  updateSearchCriteria: React.PropTypes.func,
  submitSearch: React.PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(PositionSelector);
