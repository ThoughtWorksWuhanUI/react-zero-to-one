import React from 'react';
import styles from './styles.scss';

class HelloMessage extends React.Component {
  render() {
    return (<div className={styles.red}>Hello, {this.props.message}<div className={styles.logo}></div></div>);
  }
}

export default HelloMessage;
