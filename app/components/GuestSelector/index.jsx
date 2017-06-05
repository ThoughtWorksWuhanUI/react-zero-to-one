import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
import SingleGuestSelector from '../SingleGuestSelector'
const cx = classNames.bind(styles);

class GuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.defaultGuest = {adults: 1, children: 0, infants: 0};
    this.state = {
      openDropdownList: props.openDropdownList,
      guest: props.value || this.defaultGuest
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
    this.props.onChange(data);
  };

  submitChange = ()=> {
    this.setState({openDropdownList: false});
    if (this.state.guest.adults === 1 && this.state.guest.children === 0 && this.state.guest.infants === 0) {
      return;
    } else {
      this.props.submit();
    }
  };

  applySelect = (e)=> {
    this.submitChange();
  };

  cancelSelect = (e)=> {
    e && e.stopPropagation();
    this.setState({guest: this.defaultGuest,openDropdownList: false});
    this.props.onChange(this.defaultGuest);
  };

  render() {
    const {openDropdownList, guest} = this.state;
    return <div className={cx('dropdown-list')}>
      <span className={cx('guest-total-number')}>{this.getTotalGuest()} guest</span>
      <div className={cx('select-wrapper')} onClick={this.clickSelect}>
        <i className={cx('down-select-icon',{'has-click':openDropdownList})}></i>
      </div>
      {openDropdownList &&
      <div className={cx('guest-selector')} onMouseLeave={this.submitChange}>
        <SingleGuestSelector title="Adults" number={guest.adults}
                             onChange={(value)=>this.setGuestNumber('adults',value)}></SingleGuestSelector>
        <SingleGuestSelector title="Children" reminder="Ages 2 - 12" number={guest.children}
                             onChange={(value)=>this.setGuestNumber('children',value)}></SingleGuestSelector>
        <SingleGuestSelector title="Infants" reminder="Under 2" number={guest.infants}
                             onChange={(value)=>this.setGuestNumber('infants',value)}></SingleGuestSelector>

        <div className={cx('selector-bottom')}>
          <div className={cx('selector-bottom-left')}>
            <button onClick={this.cancelSelect}><span>Cancel</span></button>
          </div>
          <div className={cx('selector-bottom-right')}>
            <button onClick={this.applySelect}><span>Apply</span></button>
          </div>
        </div>
      </div>
      }
    </div>
  }
}

export default GuestSelector;
