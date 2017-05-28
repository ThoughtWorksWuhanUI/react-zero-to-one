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
      slidesToScroll: 1,
      draggable: false
    };
    return (
      <div className={cx('container', this.props.className)}>
        <h3>{this.props.title}</h3>
        <Slider {...settings}>
          <div>
            <div className={cx('item')}>
              <img src='https://a0.muscache.com/im/pictures/b7508c4c-eec0-4857-b218-ecf653cc0736.jpg?aki_policy=poster' />
              <div className={cx('description')}>
                <span className={cx('price')}>$293HKD</span>Take the slot you're going to remember what you will going through.
              </div>
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

Carousel.propTypes = {
  title: React.PropTypes.string
}

export default Carousel;
