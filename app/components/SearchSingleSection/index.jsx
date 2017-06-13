import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

class SearchSingleSection extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={cx('item')}>
        <div className={cx('title')}><label>{this.props.title}</label></div>
        <div className={cx('content')}>
          {this.props.children}
        </div>
      </div>
    );
  }
};
export default SearchSingleSection;
