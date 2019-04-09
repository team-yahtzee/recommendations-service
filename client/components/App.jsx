import React, { Component } from "react";

import ReactDOM from 'react-dom'
import { AlexaForBusiness } from "aws-sdk";
import Carousel from './Carousel.jsx' 
import axios from 'axios'
import {BrowserRouter, Router} from 'react-router-dom'
import Reactstrap from 'reactstrap'
import Modal from './Modal.jsx'
import StarRatingComponent from 'react-star-rating-component'



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


// overwrite style
const modalStyle = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0,0.5)"
	}
};



class App extends Component {
  constructor() {
    super()
    this.state = {
      recommendations: seed,
      isModalOpen: false,
      isInnerModalOpen: false,
      modalImg: seed[0].recImg,
      modalTitle: seed[0].recTitle,
      modalRating: seed[0].recRating,
      modalRatingCount: seed[0].recratingCount
    }
    		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
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
  
    // close modal (set isModalOpen, true)
    closeModal() {
      this.setState({
        isModalOpen: false
      });
    }
  
    // open modal (set isModalOpen, false)
    openModal() {
      this.setState({
        isModalOpen: true
      });
    }

  render() {
    return (
      <div>
        <h2 className='more-homes-title'>More homes you may like</h2>
          <Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
        	<button className='modal-close-button'
						// style={{
						// 	margin: 0,
						// 	width: "auto",
						// 	marginTop: 10
						// }}
						onClick={this.closeModal}
					>
						X
					</button>

          <h1 className='save-to-list-text'>Save to list</h1>
          <div className='create-new-list-div'>
            <button className='create-new-list-text'>Create New List</button>
          </div>
          <div className ='modal-bottom-box'>
            <img
              className ='modal-image'
              width="200px"
              height="150px"
              style={{ borderRadius: 3 }}
              src= {this.state.modalImg}
              alt="unsplash"
            />

            <div className='modal-title'>{this.state.modalTitle}</div>
            <StarRatingComponent className='photo-star-rating modal-box-rating' name='rating' starCount={parseInt(this.state.modalRating)} />
            <div className='photo-rating-count modal-box-rating'>({parseInt(this.state.modalRatingCount)})</div>

          </div>
          
          

				</Modal>

        <Carousel openModal={this.openModal} recommendations={this.state.recommendations}/>
        <h2 className='more-homes-title'>Explore other options in and around New York</h2>

        <button onClick={this.newData.bind(this)}>Refresh!</button>
        <span className='more-places-title'>More places to stay in New York:</span>
        <div>
          <div className='more-places-rec'>Houses</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))