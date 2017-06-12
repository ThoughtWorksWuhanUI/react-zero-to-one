import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const MAX_GUESTS_NUMBER = 16;
class SingleGuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number
    };
  }

  subNumber = () => {
    this.updateNumber(function (previousNum) {
      return (previousNum > 0) ? previousNum - 1 : previousNum;
    })
  };

  plusNumber = () => {
    this.updateNumber(function (previousNum) {
      return (previousNum < MAX_GUESTS_NUMBER) ? previousNum + 1 : previousNum
    })
  };

  updateNumber = (newNumberGenerator) => {
    let newNumber = newNumberGenerator(this.state.number);
    this.setState({ number: newNumber });
    this.props.onChange(newNumber);
  };


  render() {
    return <div className={cx('single-guest-selector-wrapper')}>
      <div className={cx('single-guest-selector-left')}>
        <div className={cx('single-guest-selector-title')}>
          <span>{this.props.title}</span></div>
        <div className={cx('single-guest-selector-reminder')}>
          <span>{this.props.reminder}</span></div>
      </div>
      <div className={cx('single-guest-selector-right')}>
        <button className={cx('sub-button', { 'inactive-button': this.state.number <= 0 })} type="button">
          <i className={cx('sub-button-icon')} onClick={this.subNumber}></i>
        </button>
        <div className={cx('guest-number')}>{this.state.number}</div>
        <button className={cx('plus-button', { 'inactive-button': this.state.number >= 16 })} type="button">
          <i className={cx('plus-button-icon')} onClick={this.plusNumber}></i>
        </button>
      </div>
    </div>
  }
}

export default SingleGuestSelector;
