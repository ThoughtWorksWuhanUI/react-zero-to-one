import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';
import PopupMenu from './PopupMenu';

const cx = classNames.bind(styles);

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLandlordMenu: false
    };
  }

  handleShowLandlordMenu = () => {
    this.setState({
      showLandlordMenu: !this.state.showLandlordMenu
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
                <button onClick={this.handleShowLandlordMenu}>成为房东</button>
                <PopupMenu className={cx('landlord-menu', { 'hidden': !this.state.showLandlordMenu })} />
              </li>
              <li><button>帮助</button></li>
              <li><button>注册</button></li>
              <li><button>登录</button></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default TopNav;
