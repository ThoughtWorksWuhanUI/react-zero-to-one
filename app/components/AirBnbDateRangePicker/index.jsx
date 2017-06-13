import React from 'react';
import { connect } from 'react-redux';
import {mapDispatchToProps} from '../../redux/common/MapDispatchToProps';
import classNames from 'classnames/bind';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';

const cx = classNames.bind(styles);
const mapStateToProps = (state) => ({
  when: state.searchCriteria.when
});

class AirBnbDateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    let focusedInput = null;
    this.state = {
      focusedInput,
      datePickerVisible: false,
      startDate: props.when.startDate,
      endDate: props.when.endDate
    };
  }

  onDateFocusChange = (focusedInput) => {
    this.setState({ focusedInput });
  };

  onDatesChange = (date) => {
    this.setState({ startDate: date.startDate, endDate: date.endDate });
    if (!date.startDate && !date.endDate) {
      this.setState({ datePickerVisible: false })
    }
    this.props.updateSearchCriteria({ when: { startDate: date.startDate, endDate: date.endDate } });
    if (date.startDate && date.endDate) {
      this.props.submitSearch();
    }
  };

  showDatePicker = () => {
    this.setState({ datePickerVisible: true })
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (<div> {!this.state.datePickerVisible &&
      <input className={cx('input-box')} onClick={this.showDatePicker} type="text"
        placeholder="任何时间" />}
      {this.state.datePickerVisible &&
        <DateRangePicker
          startDatePlaceholderText="入住日期"
          endDatePlaceholderText="退房日期"
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onDateFocusChange}
          monthFormat="YYYY[年]MMMM"
        />
      }</div>
    )
  }
}
AirBnbDateRangePicker.propTypes = {
  searchCriteria: React.PropTypes.object,
  updateSearchCriteria: React.PropTypes.func,
  submitSearch: React.PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(AirBnbDateRangePicker);
