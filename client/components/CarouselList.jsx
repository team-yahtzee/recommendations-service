import React, {Component} from 'react'
import Slider from "react-slick";


class CarouselList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var settings = {
      dots: true
    };
    return (
        <div>
         <div className="container">
          <Slider {...settings}>
          <div>
            <img className='photo' src="https://s3.us-east-2.amazonaws.com/airbnb-recommendations/brick-country-home.jpg" />
          </div>
          <div>
            <img className='photo' src="https://s3.us-east-2.amazonaws.com/airbnb-recommendations/house-exterior-in-tropics.jpg" />
          </div>
          <div>
            <img className='photo' src="https://s3.us-east-2.amazonaws.com/airbnb-recommendations/yellow-door-on-brick-home.jpg" />
          </div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default CarouselList