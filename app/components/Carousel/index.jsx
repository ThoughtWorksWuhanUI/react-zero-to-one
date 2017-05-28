import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import axios from 'axios';
import styles from './styles.scss';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const cx = classNames.bind(styles);

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
      .then((response) => {
        this.setState({ items: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderStar = (rankingCount) => {
    let j = 1;
    const stars = [];
    for (; j <= rankingCount; j++) {
      stars.push(<i key={`ranting-${j}`} className={cx('star')} />);
    }
    return stars;
  }

  renderCarousel = (settings, items) => {
    if (items.length === 0) return null;
    return (
      <Slider {...settings}>
        {
          items.map((item, index) => (
            <div key={`carousel-item-${item.name}-${index}`}>
              <div className={cx('item')}>
                <img src={item.image} />
                <div className={cx('description')}>
                  <span className={cx('price')}>${item.price}</span>
                  {item.name}
                </div>
                <div className={cx('comments')}>
                  <span>{this.renderStar(item.ranking)}</span>
                  <span className={cx('count')}>{item.commentsCount}则评价</span>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    );
  }

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
        {this.renderCarousel(settings, this.state.items)}
      </div>
    );
  }
};

Carousel.propTypes = {
  title: React.PropTypes.string
}

export default Carousel;
