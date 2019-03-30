import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom'
import { AlexaForBusiness } from "aws-sdk";
import CarouselList from './CarouselList.jsx' 
// import axios from 'axios'

class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      recommendations: ''
    }
  }

  // ComponentDidMount() {
  //   axios.get('/room')
  //   .then(recData => {
  //     this.setState({
  //       recommendations = recData
  //     })
  //   })
  // }

  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <CarouselList recommendations={this.state.recommendations}/>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById('recommendations'))