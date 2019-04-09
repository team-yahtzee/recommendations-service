import React, {Component} from 'react'
import StarRatingComponent from 'react-star-rating-component'
import Modal from './Modal.jsx'

class CarouselList extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>
        <div className='heart' onClick={this.props.openModal} 
        value={this.props.recommendation.id} 
        img={this.props.recommendation.recImg}
        title={this.props.recommendation.recTitle}
        rating={this.props.recommendation.recRating}
        recratingcount={this.props.recommendation.recratingCount}></div>
        <div>
          <img className='photo' src={this.props.recommendation.recImg} alt=''/>
          
          <div className='photo-padding'>
            <div className='photo-description'>
              <div className='photo-title'>{this.props.recommendation.recTitle}</div>
              <div className='photo-description-description'>{this.props.recommendation.recDetails}</div>
              <div className='photo-price'>${this.props.recommendation.recCost} per night</div>
              <StarRatingComponent className='photo-star-rating' name='rating' starCount={parseInt(this.props.recommendation.recRating)} />
              <div className='photo-rating-count'>({parseInt(this.props.recommendation.recratingCount)})</div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default CarouselList

