import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/common/MapDispatchToProps';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import SingleGuestSelector from '../SingleGuestSelector'

const cx = classNames.bind(styles);
const mapStateToProps = (state) => ({
  guest: state.searchCriteria.guest
});
const defaultGuest = { adults: 1, children: 0, infants: 0 };

class GuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdownList: props.openDropdownList,
      guest: props.guest
    };
  }

  getTotalGuest = () => {
    return this.state.guest.adults + this.state.guest.children + this.state.guest.infants;
  };

  clickSelect = () => {
    this.setState({ openDropdownList: !this.state.openDropdownList })
  };

  setGuestNumber = (newDate) => {
    var newGuest = Object.assign(this.state.guest, newDate);
    this.setState({ guest: newGuest });
    this.props.updateSearchCriteria({ guest: newGuest });
  };

  submitChange = () => {
    this.setState({ openDropdownList: false });
    var noChangeForGuests = this.state.guest.adults === 1 && this.state.guest.children === 0 && this.state.guest.infants === 0;
    if (!noChangeForGuests) {
      this.props.submitSearch();
    }
  };

  applySelect = (e) => {
    this.submitChange();
  };

  cancelSelect = (e) => {
    e && e.stopPropagation();
    this.setState({ guest: defaultGuest, openDropdownList: false });
    this.props.updateSearchCriteria({ guest: defaultGuest });
  };

  render() {
    const { openDropdownList, guest } = this.state;
    return (
      <button className={cx('dropdown-list')} onClick={this.clickSelect}>
        <span className={cx('guest-total-number')}>{this.getTotalGuest()} 位房客</span>
        <div className={cx('select-wrapper')}>
          <i className={cx('down-select-icon', { 'has-click': openDropdownList })}></i>
        </div>
        {openDropdownList &&
          <div className={cx('guest-selector')} onMouseLeave={this.submitChange}>
            <SingleGuestSelector title="成人" number={guest.adults}
              onChange={(value) => this.setGuestNumber({ adults: value })}></SingleGuestSelector>
            <SingleGuestSelector title="儿童" reminder="2 - 12岁" number={guest.children}
              onChange={(value) => this.setGuestNumber({ children: value })}></SingleGuestSelector>
            <SingleGuestSelector title="婴幼儿" reminder="2岁以下" number={guest.infants}
              onChange={(value) => this.setGuestNumber({ infants: value })}></SingleGuestSelector>

            <div className={cx('selector-bottom')}>
              <div className={cx('selector-bottom-left')}>
                <button onClick={this.cancelSelect}><span>取消</span></button>
              </div>
              <div className={cx('selector-bottom-right')}>
                <button onClick={this.applySelect}><span>确认</span></button>
              </div>
            </div>
          </div>
        }
      </button>
    );
  }
}

GuestSelector.propTypes = {
  searchCriteria: React.PropTypes.object,
  updateSearchCriteria: React.PropTypes.func,
  submitSearch: React.PropTypes.func
};
GuestSelector.defaultProps = {
  guest: defaultGuest
};
export default connect(mapStateToProps, mapDispatchToProps)(GuestSelector);
