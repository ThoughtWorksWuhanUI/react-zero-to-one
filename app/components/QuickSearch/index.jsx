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
      when: {startDate: null, endDate: null},
      where: null,
      guest: {adults: 1, children: 0, infants: 0}
    };
  }

  updateState = (key, value)=> {
    let data = this.state;
    data[key] = value;
    this.setState(data);
  };

  submitForm = (e)=> {
    e && e.preventDefault();
    console.log("submit", this.state);
  };

  render() {
    const {when, where, guest}=this.state;
    return (
      <div className={styles.container}>
        <form onSubmit={this.submitForm} ref="form">
          <div className={cx('search-wrapper')}>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="where">Where</label></div>
              <div className={cx('content')}>
                <PositionSelector value={where} submit={this.submitForm}
                                  onChange={(value)=>this.updateState('where',value)}></PositionSelector>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="When">When</label></div>
              <div className={cx('content')}>
                <AirBnbDateRangePicker value={when} submit={this.submitForm}
                                       onChange={(value)=>this.updateState('when',value)}></AirBnbDateRangePicker>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="guest">Guest</label></div>
              <div className={cx('content')}>
                <GuestSelector value={guest} submit={this.submitForm}
                               onChange={(value)=>this.updateState('guest',value)}></GuestSelector>
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
