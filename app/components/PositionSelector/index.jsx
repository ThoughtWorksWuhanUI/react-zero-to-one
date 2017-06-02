import React from 'react';
import classNames from 'classnames/bind';
import 'react-dates/lib/css/_datepicker.css';
import styles from './styles.scss';


const cx = classNames.bind(styles);

class PositionSelector extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:'',
      isEdit:false
    };
  }

  onBlur=()=>{
    this.setState({isEdit:false});
  };

  onFocus=()=>{
    this.setState({isEdit:true});
  };
  
  handleChange=(event)=>{
    this.setState({position: event.target.value});
  };

  render(){
    return (
      <div>
        {!this.state.isEdit &&
        <input className={cx('input-box')} value={this.state.position} placeholder='AnyWhere' onFocus={this.onFocus} type="text"/>}
        {this.state.isEdit &&
        <input className={cx('input-box')} value={this.state.position} placeholder='Destination, city, address' onChange={this.handleChange} onBlur={this.onBlur} type="text"/>}
      </div>);
  }
}
export  default PositionSelector
