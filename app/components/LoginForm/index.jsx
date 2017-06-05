import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class LoginForm extends React.Component {
  static propTypes = {
    handleClose: React.PropTypes.func,
    handleLogin: React.PropTypes.func,
    user: React.PropTypes.object
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
            {
              this.props.user.errorMessage &&
              <div className={cx('error-message')}>
                {this.props.user.errorMessage}
              </div>
            }

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
  }

  handleOnChange = (field) => {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    }
  }
}

export default LoginForm;
