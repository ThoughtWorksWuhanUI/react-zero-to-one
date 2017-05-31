import React from 'react';
import styles from './styles.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class QuickSearch extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <form>
          <div className={cx('search-wrapper')}>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="where">Where</label></div>
              <div className={cx('content')}>
                <input type="text" placeholder="Anywhere"/>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="When">When</label></div>
              <div className={cx('content')}>
                <input type="text" placeholder="Anytime"/>
              </div>
            </div>
            <div className={cx('item')}>
              <div className={cx('title')}><label htmlFor="guest">Guest</label></div>
              <div className={cx('content')}>
                <button>
                  <span>1 guest</span>
                </button>
              </div>
            </div>
            <div className={cx('search-button-wrapper')}>
              <button className={cx('search-button')}>
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default QuickSearch;
