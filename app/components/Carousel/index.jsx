import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './styles.scss';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const cx = classNames.bind(styles);

class Carousel extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };
    return (
      <div className={cx('container', this.props.className)}>
        <Slider {...settings}>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div>Price</div>
              <div>Star</div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
};

export default Carousel;
