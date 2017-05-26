import React from 'react';
import classNames from 'classnames/bind';
import styles from './PopupMenu.scss';

const cx = classNames.bind(styles);

class PopupMenu extends React.PureComponent {
  render () {
    return (<div className={cx('container', this.props.className)}>PopupMenu</div>);
  }
}

export default PopupMenu;
