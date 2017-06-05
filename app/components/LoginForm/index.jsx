import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class LoginForm extends React.Component {
  static propTypes = {
    handleClose: React.PropTypes.func
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('dialog')}>
          <div className={cx('content')}>
            <div className={cx('form')}>
              <input type="text" placeholder="电子邮件"/>
              <input type="password" placeholder="密码"/>
              <button>登录</button>
            </div>
            <span className={ cx('close') } onClick={this.props.handleClose}>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
