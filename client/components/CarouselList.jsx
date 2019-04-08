import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'
import Modal from './Modal.jsx'

class CarouselList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing:false
    }
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

  render() {
    return (
      <div>

          { this.state.isShowing ? <div onClick={this.closeModalHandler.bind(this)} className="back-drop"></div> : null }
          <Modal
              className="modal"
              show={this.state.isShowing}
              close={this.closeModalHandler.bind(this)}>
                  Maybe aircrafts fly very high because they don't want to be seen in plane sight?
          </Modal>
          <div className='heart' onClick={this.props.openModalHandler}></div>
          <img className='photo' src={this.props.recommendation.recImg} alt=''/>
          
          
          <button className="open-modal-btn" onClick={this.openModalHandler.bind(this)}>Open Modal</button>

        
        <div className='photo-padding'>
          <div className='photo-description'>
            <div className='photo-title'>{this.props.recommendation.recTitle}</div>
            <div className='photo-description-description'>{this.props.recommendation.recDetails}</div>
            <div className='photo-price'>${this.props.recommendation.recCost} per night</div>
            <StarRatingComponent name='rating' starCount={parseInt(this.props.recommendation.recRating)} />
            <div className='photo-rating-count'>({parseInt(this.props.recommendation.recratingCount)})</div>
            
          </div>
        </div>

        


      </div>
    )
  }
}

export default CarouselList

