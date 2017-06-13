import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const MAX_GUESTS_NUMBER = 16;
class SingleGuestSelector extends React.Component {
  constructor(props) {
    super(props);
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
    let newNumber = newNumberGenerator(this.props.number);
    this.props.onChange(newNumber);
  };

  render() {
    const {number,title,reminder}=this.props;
    return (<div className={cx('single-guest-selector-wrapper')}>
      <div className={cx('single-guest-selector-left')}>
        <div className={cx('single-guest-selector-title')}>
          <span>{title}</span></div>
        <div className={cx('single-guest-selector-reminder')}>
          <span>{reminder}</span></div>
      </div>
      <div className={cx('single-guest-selector-right')}>
        <button className={cx('sub-button', { 'inactive-button':number <= 0 })} type="button">
          <i className={cx('sub-button-icon')} onClick={this.subNumber}></i>
        </button>
        <div className={cx('guest-number')}>{number}</div>
        <button className={cx('plus-button', { 'inactive-button': number >= 16 })} type="button">
          <i className={cx('plus-button-icon')} onClick={this.plusNumber}></i>
        </button>
      </div>
    </div>);
  }
}

export default SingleGuestSelector;
