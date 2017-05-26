import React from 'react';
import styles from './styles.scss';

class Hero extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <h1><span className={styles.brand}>Airbnb</span>预订独一无二的房源，像当地人一样体验城市。</h1>
      </div>
    );
  }
}

export default Hero;
