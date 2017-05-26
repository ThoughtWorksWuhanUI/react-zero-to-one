import React from 'react';
import styles from './styles.scss';
import TopNav from '../../components/TopNav';
import Hero from '../../components/Hero';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <Hero />
      </div>
    );
  }
}

export default HomePage;
