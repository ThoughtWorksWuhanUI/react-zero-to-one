import React from 'react';
import styles from './styles.scss';

class TopNav extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.nav}>
          <nav>
            <ul>
              <li><button>成为房东</button></li>
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
