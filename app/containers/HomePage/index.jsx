import React from 'react';
import styles from './styles.scss';
import TopNav from '../../components/TopNav';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <Hero />
        <Carousel title= "热门体验"/>
      </div>
    );
  }
}

export default HomePage;
