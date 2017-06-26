import React from 'react';
import styles from './styles.scss';

class Hero extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h1><span className={styles.brand}>Airbnb</span>{this.props.message}</h1>
      </div>
    );
  }
}

Hero.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default Hero;
