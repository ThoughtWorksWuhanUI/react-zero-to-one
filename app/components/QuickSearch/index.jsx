import React from 'react';
import classNames from 'classnames/bind';
import GuestSelector from '../GuestSelector'
import PositionSelector from '../PositionSelector'
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class QuickSearch extends React.Component {

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
    return (
      <div className={styles.container}>
        <form>
          <div className={cx('search-wrapper')}>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="where">Where</label></div>
              <div className={cx('content')}>
                <PositionSelector className={cx('content-input')}></PositionSelector>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="When">When</label></div>
              <div className={cx('content')}>
                {!this.state.datePickerVisible &&
                <input className={cx('content-input')} onClick={this.showDatePicker} type="text"
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
                }
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="guest">Guest</label></div>
              <div className={cx('content')}>
                <GuestSelector></GuestSelector>
              </div>
            </div>
            <div className={cx('search-button-wrapper')}>
              <button className={cx('search-button')}>
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuickSearch;
