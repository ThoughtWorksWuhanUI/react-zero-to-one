import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class LoginForm extends React.Component {
  static propTypes = {
    handleClose: React.PropTypes.func,
    handleLogin: React.PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('dialog')}>
          <div className={cx('content')}>
            <div className={cx('form')}>
              <input type="text" placeholder="电子邮件" onChange={this.handleOnChange('email')}/>
              <input type="password" placeholder="密码" onChange={this.handleOnChange('password')}/>
              <button onClick={this.handleLogin}>登录</button>
            </div>
            <span className={ cx('close') } onClick={this.props.handleClose}>
            </span>
          </div>
        </div>
      </div>
    );
  }

  handleLogin = () => {
    this.props.handleLogin && this.props.handleLogin(this.state);
    this.props.handleClose && this.props.handleClose();
  }

  handleOnChange = (field) => {
    return (event, newVal) => {
      this.setState({
        [field]: newVal
      });
    }
  }
}

export default LoginForm;
