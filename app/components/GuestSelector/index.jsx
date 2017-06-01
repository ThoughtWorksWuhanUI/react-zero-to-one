import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import SingleGuestSelector from '../SingleGuestSelector'
const cx = classNames.bind(styles);

class GuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdownList: props.openDropdownList,
      guest: {adults: 1, children: 0, infants: 0}
    };
  }

  getTotalGuest = ()=> {
    return this.state.guest.adults + this.state.guest.children + this.state.guest.infants;
  };

  clickSelect = ()=> {
    this.setState({openDropdownList: !this.state.openDropdownList})
  };

  setGuestNumber = (key, value)=> {
    let data = this.state.guest;
    data[key] = value;
    this.setState({guest: data});
  };

  render() {
    const {openDropdownList, guest} = this.state;
    return <div className={cx('dropdown-list')}>
      <span className={cx('guest-total-number')}>{this.getTotalGuest()} guest</span>
      <div className={cx('select-wrapper')} onClick={this.clickSelect}>
        <i className={cx('down-select-icon',{'has-click':openDropdownList})}></i>
      </div>
      {openDropdownList &&
      <div className={cx('guest-selector')}>
        <SingleGuestSelector title="Adults" number={guest.adults}
                             onChange={(value)=>this.setGuestNumber('adults',value)}></SingleGuestSelector>
        <SingleGuestSelector title="Children" reminder="Ages 2 - 12" number={guest.children}
                             onChange={(value)=>this.setGuestNumber('children',value)}></SingleGuestSelector>
        <SingleGuestSelector title="Infants" reminder="Under 2" number={guest.infants}
                             onChange={(value)=>this.setGuestNumber('infants',value)}></SingleGuestSelector>
      </div>
      }
    </div>
  }
}

export default GuestSelector;
