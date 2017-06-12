import React from 'react';
import styles from './styles.scss';
import TopNav from '../../components/TopNav';
import TopNavContainer from '../TopNavContainer'
import QuickSearch from '../../components/QuickSearch';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopNavContainer />
        <Hero />
        <QuickSearch />
        <Carousel title= "热门体验" url="https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-zero-to-one/master/mock_data/experiences.json"/>
      </div>
    );
  }
}

export default HomePage;
