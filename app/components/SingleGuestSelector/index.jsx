import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
class SingleGuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.title == 'Adults' ? 1 : 0
    };
  }

  subNumber = ()=> {
    let previousNum = this.state.number;
    if (previousNum > 0) {
      this.setState({number: previousNum - 1})
    }
  };
  
  plusNumber = ()=> {
    let previousNum = this.state.number;
    if (previousNum < 16) {
      this.setState({number: previousNum + 1})
    }
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
        <button className={cx('sub-button')} type="button">
          <i className={cx('sub-button-icon')} onClick={this.subNumber}></i>
        </button>
        <div className={cx('guest-number')}>{this.state.number}</div>
        <button className={cx('plus-button')} type="button">
          <i className={cx('plus-button-icon')}  onClick={this.plusNumber}></i>
        </button>
      </div>
    </div>
  }
}

export default SingleGuestSelector;
