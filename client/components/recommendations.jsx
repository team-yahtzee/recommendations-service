import React from 'react'

const infoStyle = {
  float: 'left',
  width: '50%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center'
};

class Recommendations extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <div className='carousel-container'>
          <div className='carousel-slide'>
            <img className='rec-photo' src ="https://airbnb-recommendations.s3.amazonaws.com/ezgif.com-webp-to-jpg.jpg" alt='' id='lastClone'/>
            <img className='rec-photo' src ='https://airbnb-recommendations.s3.amazonaws.com/7301e3ee-3a30-495a-a1d5-8e3aee6173db.jpg' alt='' />
            <img className='rec-photo' src ='https://airbnb-recommendations.s3.amazonaws.com/b11351c8-0345-45d6-a6d9-f0389e56f1c1.jpg' alt='' />
            <img className='rec-photo' src ='https://airbnb-recommendations.s3.amazonaws.com/e18fecfa-2510-4790-9cbf-4fdb127b4c16.jpg' alt='' />
            <img className='rec-photo' src ='https://airbnb-recommendations.s3.amazonaws.com/ezgif.com-webp-to-jpg.jpg' alt='' />
            <img className='rec-photo' src ='https://airbnb-recommendations.s3.amazonaws.com/7301e3ee-3a30-495a-a1d5-8e3aee6173db.jpg' id='firstClone' alt='' />
          </div>
        </div>

        <button id='prevBtn'>Prev</button>
        <button id='nextBtn'>Next</button>
      </div>
    );
  }

}

export default Recommendations

