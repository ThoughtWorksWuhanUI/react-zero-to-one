import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class GuestSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdownList: props.openDropdownList
    };
  }

  clickSelect = ()=> {
    this.setState({openDropdownList: !this.state.openDropdownList})
  };

  render() {
    const {openDropdownList} = this.state;
    return <div className={cx('dropdown-list')}>
      <span className={cx('guest-total-number')}>1 guest</span>
      <div className={cx('select-wrapper')} onClick={this.clickSelect}>
        <i className={cx('down-select-icon',{'has-click':openDropdownList})}></i>
      </div>
      {openDropdownList &&
      <div className={cx('guest-selector')}>
        <SingleGuestSelector title="Adults"></SingleGuestSelector>
        <SingleGuestSelector title="Children" reminder="Ages 2 - 12"></SingleGuestSelector>
        <SingleGuestSelector title="Infants" reminder="Under 2"></SingleGuestSelector>
      </div>
      }
    </div>
  }
}

export default GuestSelector;
