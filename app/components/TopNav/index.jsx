  import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
import PopupMenu from './PopupMenu';
import LoginForm from '../LoginForm'

const cx = classNames.bind(styles);

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLandlordMenu: false,
      showLoginForm: false
    };
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
              <li><button>注册</button></li>
              <li><button onClick={ this.handleShowLoginForm }>登录</button></li>
              {
                this.state.showLoginForm && <LoginForm handleClose={this.handleHideLoginForm}/>
              }
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;
