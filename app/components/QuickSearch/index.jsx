import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames/bind';
import GuestSelector from '../GuestSelector'
import PositionSelector from '../PositionSelector'
import AirBnbDateRangePicker from '../AirBnbDateRangePicker'
import styles from './styles.scss';
import { submitSearch } from '../../redux/actions';
const cx = classNames.bind(styles);

const mapStateToProps = (state) => {
  return state.searchCriteria;
};

const mapDispatchToProps = (dispatch) => ({
  submitSearch: () => {
    dispatch(submitSearch());
  }
});

class SearchSingleSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx('item')}>
        <div className={cx('title')}><label>{this.props.title}</label></div>
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
  }

  submitForm = (e) => {
    e && e.preventDefault();
    this.props.submitSearch();
  };

  render() {
    const { when, where, guest } = this.props;
    return (
      <div className={styles.container}>
        <form onSubmit={this.submitForm} ref="form">
          <div className={cx('search-wrapper')}>
            <SearchSingleSection title="地点">
              <PositionSelector submit={this.submitForm}></PositionSelector>
            </SearchSingleSection>
            <SearchSingleSection title="时间">
              <AirBnbDateRangePicker value={when} submit={this.submitForm} onChange={(value) => this.setState({ when: value })}></AirBnbDateRangePicker>
            </SearchSingleSection>
            <SearchSingleSection title="房客">
              <GuestSelector value={guest} submit={this.submitForm} onChange={(value) => this.setState({ guest: value })}></GuestSelector>
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

QuickSearch.propTypes = {
  searchCriteria: React.PropTypes.object,
  submitSearch: React.PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(QuickSearch);
