  import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
import PopupMenu from './PopupMenu';
import LoginForm from '../LoginForm'

const cx = classNames.bind(styles);

class TopNav extends React.Component {
  static propTypes = {
    user: React.PropTypes.object,
    handleLogin: React.PropTypes.func,
    handleLogout: React.PropTypes.func,
    resetLoginForm: React.PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      showLandlordMenu: false,
      showLoginForm: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.hideLoginFormWhenLoginSuccessfully(nextProps)
  }

  hideLoginFormWhenLoginSuccessfully = (props) => {
    if(this.state.showLoginForm && !props.user.errorMessage) {
        this.setState({
          showLoginForm: false
        })
    }
  }

  toggleShowLandlordMenu = (toggleOff = false) => {
    this.setState({
      showLandlordMenu: !toggleOff && !this.state.showLandlordMenu
    });
  }

  handleShowLoginForm = () => {
    this.setState({
      showLoginForm: true
    });
  }
  handleHideLoginForm = () => {
    this.setState({
      showLoginForm: false
    });
    this.props.resetLoginForm && this.props.resetLoginForm();
  }


  render() {
    return (
      <div className={cx('container')}>
        <div className={cx('logo')}></div>
        <div className={cx('nav')}>
          <nav>
            <ul>
              <li>
                <button onClick={() =>this.toggleShowLandlordMenu()} onBlur={() => this.toggleShowLandlordMenu(true)}>成为房东</button>
                <PopupMenu
                  className={cx('landlord-menu', { 'hidden': !this.state.showLandlordMenu })}
                  links={[{ id: 1, title: '出租房源', href: '' }, { id: 2, title: '展开体验', href: '' }]}
                />
              </li>
              <li><button>帮助</button></li>
              {
               !this.props.user.isLoggedIn && <div className={cx('login-register')}>
                 <li><button>注册</button></li>
                 <li><button onClick={ this.handleShowLoginForm }>登录</button></li>
                 {
                   this.state.showLoginForm && <LoginForm user={this.props.user} handleClose={this.handleHideLoginForm} handleLogin={ this.props.handleLogin }/>
                 }
               </div>

              }
              {
                this.props.user.isLoggedIn &&
                <div className={cx('user-section')}>
                  <li>
                    <button>{ this.props.user.name }</button>
                  </li>
                  <li>
                    <button onClick={ this.props.handleLogout }>
                      登出
                    </button>
                  </li>
                </div>

              }

            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;
