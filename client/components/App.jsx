import React, { Component } from "react";

import ReactDOM from 'react-dom'
import { AlexaForBusiness } from "aws-sdk";
import Carousel from './Carousel.jsx' 
import axios from 'axios'

var seed = [
  {
      "id": 130,
      "recImg": "https://res.realadvisor.ch/fetch//https://storage.googleapis.com/img.realadvisor.ch/utl6dhy8och4ocikgbtt.jpg",
      "recDetails": "Sit occaecati quasi necessitatibus labore in qui maiores.",
      "recTitle": "Nulla aspernatur doloribus voluptatem cum.",
      "recCost": "6",
      "recRating": "4",
      "recratingCount": "101",
      "roomId": 1
  },
  {
      "id": 145,
      "recImg": "https://res.realadvisor.ch/fetch//https://storage.googleapis.com/img.realadvisor.ch/ixj02esewlgidv91luov.jpg",
      "recDetails": "Mollitia et non amet earum quibusdam ipsum non.",
      "recTitle": "Sint enim quia.",
      "recCost": "652",
      "recRating": "3",
      "recratingCount": "100",
      "roomId": 1
  },
  {
      "id": 159,
      "recImg": "https://res.realadvisor.ch/fetch//https://storage.googleapis.com/img.realadvisor.ch/j7koxv1vb8ae5gu8warq.jpg",
      "recDetails": "Iusto ea et et repellat minus quae consequuntur est assumenda.",
      "recTitle": "Dicta dignissimos atque natus cum perferendis et.",
      "recCost": "984",
      "recRating": "4",
      "recratingCount": "130",
      "roomId": 1
  },
  {
      "id": 368,
      "recImg": "https://res.realadvisor.ch/fetch//https://storage.googleapis.com/img.realadvisor.ch/zdncrboyjmjfxmbp7myz.jpg",
      "recDetails": "Illo illum consequuntur est et.",
      "recTitle": "Eum beatae atque dicta fugit tempora.",
      "recCost": "673",
      "recRating": "5",
      "recratingCount": "104",
      "roomId": 1
  } 
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      recommendations: seed
    }
  }

  ComponentDidMount() {
    console.log('hi')
    axios.get('http://localhost:3001/4')
    .then(({data}) => {
      this.setState({
        recommendations: data
      })
      console.log(data)
    })
  }

  newData() {
    axios.get('http://localhost:3001/4')
    .then(({data}) => {
      this.setState({
        recommendations: data
      })
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        <Carousel recommendations={this.state.recommendations}/>
        <button onClick={this.newData.bind(this)}>Refresh!</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))