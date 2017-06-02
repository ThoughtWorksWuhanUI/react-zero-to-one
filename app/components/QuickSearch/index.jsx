import React from 'react';
import classNames from 'classnames/bind';
import GuestSelector from '../GuestSelector'
import PositionSelector from '../PositionSelector'
import AirBnbDateRangePicker from '../AirBnbDateRangePicker'
import styles from './styles.scss';

const cx = classNames.bind(styles);

class QuickSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      when:{startDate:null,endDate:null}
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <form>
          <div className={cx('search-wrapper')}>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="where">Where</label></div>
              <div className={cx('content')}>
                <PositionSelector></PositionSelector>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="When">When</label></div>
              <div className={cx('content')}>
                <AirBnbDateRangePicker initialStartDate={this.state.when.startDate} initialEndDate={this.state.when.endDate}></AirBnbDateRangePicker>
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
