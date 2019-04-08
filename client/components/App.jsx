import React, { Component } from "react";
import {  Button,Modal,ModalBody,ModalHeader,} from 'reactstrap'
import ReactDOM from 'react-dom'
import { AlexaForBusiness } from "aws-sdk";
import Carousel from './Carousel.jsx' 
import axios from 'axios'
import {BrowserRouter, Router} from 'react-router-dom'
import Reactstrap from 'reactstrap'




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
      recommendations: seed,
      isShowing:false,
      isOpen:false
    }
  }

  ComponentDidMount() {
    console.log('hi')
    axios.get('/4')
    .then(({data}) => {
      this.setState({
        recommendations: data
      })
      console.log(data)
    })
  }

  newData() {
    axios.get('/5')
    .then(({data}) => {
      this.setState({
        recommendations: data
      })
    })
  }

  openModalHandler() {
      this.setState({
          isShowing: true
      });
  }

  closeModalHandler() {
      this.setState({
          isShowing: false
      });
  }

  toggleModal(){
    console.log('hi')
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Carousel recommendations={this.state.recommendations}/>
        <button onClick={this.newData.bind(this)}>Refresh!</button>

        <div>
        <div className="fixed-top bg-secondary p-3 d-flex justify-content-between align-items-center">
          <div className="text-white">Look over there -></div>
          <div>
            <Button color="primary" onClick={this.toggleModal.bind(this)}>Open modal</Button>
          </div>
        </div>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>My modal</ModalHeader>
          <ModalBody>Lorem ipsum.</ModalBody>
        </Modal>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))