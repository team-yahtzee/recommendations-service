import React, { Component } from "react";
// import {  Button,Modal,ModalBody,ModalHeader,} from 'reactstrap'
import ReactDOM from 'react-dom'
import { AlexaForBusiness } from "aws-sdk";
import Carousel from './Carousel.jsx' 
import axios from 'axios'
import {BrowserRouter, Router} from 'react-router-dom'
import Reactstrap from 'reactstrap'
import Modal from './Modal2.jsx'




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

const mainStyle = {
	app: {
		margin: "120px 0"
	},
	button: {
		backgroundColor: "#408cec",
		border: 0,
		padding: "12px 20px",
		color: "#fff",
		margin: "0 auto",
		width: 150,
		display: "block",
		borderRadius: 3
	}
};

class App extends Component {
  constructor() {
    super()
    this.state = {
      recommendations: seed,
      isShowing:false,
      isOpen:false,
      isModalOpen: false,
			isInnerModalOpen: false
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
        <Carousel recommendations={this.state.recommendations}/>
        <button onClick={this.newData.bind(this)}>Refresh!</button>

        <div style={mainStyle.app}>
				<button style={mainStyle.button} onClick={this.openModal}>
					Open modal
				</button>

				<Modal
					isModalOpen={this.state.isModalOpen}
					closeModal={this.closeModal}
					style={modalStyle}
				>
					<img
						width="100%"
						style={{ borderRadius: 3 }}
						src="https://source.unsplash.com/random"
						alt="unsplash"
					/>

					<button
						// style={{
						// 	...mainStyle.button,
						// 	margin: 0,
						// 	width: "auto",
						// 	marginTop: 10
						// }}
						onClick={this.closeModal}
					>
						Close
					</button>
				</Modal>
			</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))