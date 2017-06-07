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
              <div className={cx('title')}><label htmlFor="where">地点</label></div>
              <div className={cx('content')}>
                <PositionSelector value={where} submit={this.submitForm}
                                  onChange={(value)=>this.setState({where:value})}></PositionSelector>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="When">时间</label></div>
              <div className={cx('content')}>
                <AirBnbDateRangePicker value={when} submit={this.submitForm}
                                       onChange={(value)=>this.setState({when:value})}></AirBnbDateRangePicker>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="guest">房客</label></div>
              <div className={cx('content')}>
                <GuestSelector value={guest} submit={this.submitForm}
                               onChange={(value)=>this.setState({guest:value})}></GuestSelector>
              </div>
            </div>
            <div className={cx('search-button-wrapper')}>
              <button className={cx('search-button')}>
                <span>搜索</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuickSearch;
