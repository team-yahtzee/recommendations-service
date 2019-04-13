import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Carousel from './Carousel.jsx' 
import axios from 'axios'
import Modal from './Modal.jsx'
import StarRatingComponent from 'react-star-rating-component'
import Footer from './Footer.jsx'
import AutoCompleteText from './AutoCompleteText.jsx'
import countries from './countries.jsx'

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
      modalRatingCount: seed[0].recratingCount,
      modalId: 130,
      editing:false
    }
    		// bind functions
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    console.log(window.location.pathname)
    if (window.location.pathname !== '/') {
      //Change the below to be the public DNS of your recommendation-service server in AWS
      axios.get(`/room${window.location.pathname}`) 
      .then(({data}) => {
        this.setState({
          recommendations: data
        })
      })
    }
  }
  // close modal (set isModalOpen, true)
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  // open modal (set isModalOpen, false)
  openModal(event) {
    this.setState({
      isModalOpen: true,
      modalId: parseInt(event.target.getAttribute('value')),
      modalImg: event.target.getAttribute('img'),
      modalTitle: event.target.getAttribute('title'),
      modalRating: event.target.getAttribute('rating'), 
      modalRatingCount: event.target.getAttribute('recratingcount')
    });
  }

  edit() {
    this.setState({
      editing: true,
    })
  }

  save(e) {
    e.preventDefault();
    this.setState({
      editing:false, 
      note: this.state.cache,
      cachhe: undefined
    })
  }

  cancel(e) {
    e.preventDefault(); 
    this.setState({
      editing:false,
      cache: undefined
    })
  }

  handleChange(e) {
    var value = e.target.value;
    this.setState({
      cache: value
    })
  }

  renderDisplay() {
    return (
      <div>
        <button className='create-new-list-text' onClick={this.edit.bind(this)}>Create New List</button>
      </div>
    )
  }

  renderForm() {
    return (
      <div className ='modal-form'>
      <div className='modal-name-your-list-title'>Name</div>
      <div className='modal-form-form'>
        <form>
          <textarea style={{marginBottom: '20px'}} name="" id='' cols='61' rows='1' value={this.state.cache}
          onChange={this.handleChange.bind(this)} placeholder='Name your list'></textarea>
          <button className='modal-save-button' onClick = {this.save.bind(this)}>Create</button>
          <button className='modal-cancel-button' onClick={this.cancel.bind(this)}>Cancel</button>
        </form>
      </div>
      </div>
    )
  }

  render() {
    return (
      <div className='app'>
        <div className='AutoCompleteText'>
          <div className='App-Component'>
            <div className='App-Component'>
              <AutoCompleteText items={countries}/>
            </div>
          </div>
        </div>
        <div className='below-search'>
          <h2 className='more-homes-title'>More homes you may like</h2>
            <Modal
            isModalOpen={this.state.isModalOpen}
            closeModal={this.closeModal}
            style={modalStyle}
          >
            <button className='modal-close-button'
              onClick={this.closeModal}
            >
              X
            </button>

            <h1 className='save-to-list-text'>Save to list</h1>
            <div className='create-new-list-div'>
              
              {this.state.editing ? this.renderForm() : this.renderDisplay()}
            </div>
            <div className='top-bottom-border'>
              <p>{this.state.note}</p>
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
          </Modal >

          <Carousel openModal={this.openModal} recommendations={this.state.recommendations}/>
          <Footer />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('recommendations'))