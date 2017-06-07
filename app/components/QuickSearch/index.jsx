import React from 'react';
import classNames from 'classnames/bind';
import GuestSelector from '../GuestSelector'
import PositionSelector from '../PositionSelector'
import AirBnbDateRangePicker from '../AirBnbDateRangePicker'
import styles from './styles.scss';

const cx = classNames.bind(styles);

class SearchSingleSection extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className={cx('item')}>
        <div className={cx('title')}><label htmlFor="where">{this.props.title}</label></div>
        <div className={cx('content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
};

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
            <SearchSingleSection title="地点">
              <PositionSelector value={where} submit={this.submitForm} onChange={(value)=>this.setState({where:value})}></PositionSelector>
            </SearchSingleSection>
            <SearchSingleSection title="时间">
              <AirBnbDateRangePicker value={when} submit={this.submitForm} onChange={(value)=>this.setState({when:value})}></AirBnbDateRangePicker>
            </SearchSingleSection>
            <SearchSingleSection title="房客">
              <GuestSelector value={guest} submit={this.submitForm} onChange={(value)=>this.setState({guest:value})}></GuestSelector>
            </SearchSingleSection>
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
