import React from 'react';
import classNames from 'classnames/bind';
import styles from './PopupMenu.scss';

const cx = classNames.bind(styles);

class PopupMenu extends React.PureComponent {

  render() {
    return (
      <div className={cx('container', this.props.className)}>
        <ul>
          {
            this.props.links.map(link => (<li><a href={link.href}>{link.title}</a></li>))
          }
        </ul>
      </div>);
  }
}

PopupMenu.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.object)
}

export default PopupMenu;
