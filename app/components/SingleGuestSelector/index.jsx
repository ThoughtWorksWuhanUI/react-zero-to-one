import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
class SingleGuestSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={cx('single-guest-selector-wrapper')}>
      <div className={cx('single-guest-selector-left')}>
        <div className={cx('single-guest-selector-title')}>
          <span>{this.props.title}</span></div>
        <div className={cx('single-guest-selector-reminder')}>
          <span>{this.props.reminder}</span></div>
      </div>
      <div className={cx('single-guest-selector-right')}>
        <button className={cx('sub-button')}>
          <i className={cx('sub-button-icon')}></i>
        </button>
        <div className={cx('guest-number')}>1</div>
        <button className={cx('plus-button')}>
          <i className={cx('plus-button-icon')}></i>
        </button>
      </div>
    </div>
  }
}

export default SingleGuestSelector;
