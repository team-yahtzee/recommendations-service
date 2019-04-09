import React, {Component} from 'react'
import Slider from "react-slick";
import CarouselList from './CarouselList.jsx'


class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var settings = {
      dots: true,
      slidesToShow: 3,
      centerMode: true
    };
    return (
        <div>
         <div className="container">
          <Slider {...settings}>
            {this.props.recommendations.map(rec => {
              return <CarouselList openModal={this.props.openModal} recommendation={rec}/>
            })}
          </Slider>

          
        </div>
      </div>
    )
  }
}

export default Carousel