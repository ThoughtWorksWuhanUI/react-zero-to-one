import React from 'react';
import classNames from 'classnames/bind';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class AirBnbDateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    let focusedInput = null;
    this.state = {
      focusedInput,
      datePickerVisible: false,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };
  }

  onDateFocusChange = (focusedInput) => {
    this.setState({focusedInput});
  };

  onDatesChange = (date) => {
    this.setState({startDate: date.startDate, endDate: date.endDate})
    if (!date.startDate && !date.endDate) {
      this.setState({datePickerVisible: false})
    }
  };
  showDatePicker = ()=> {
    this.setState({datePickerVisible: true})
  };
  
  render() {
    const {focusedInput, startDate, endDate} = this.state;
    return (<div> {!this.state.datePickerVisible &&
      <input className={cx('input-box')} onClick={this.showDatePicker} type="text"
             placeholder="Anytime"/>}
        {this.state.datePickerVisible &&
        <DateRangePicker
          startDatePlaceholderText="Check In"
          endDatePlaceholderText="Check Out"
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onDateFocusChange}
        />
        }</div>
    )
  }
}
export default AirBnbDateRangePicker;
