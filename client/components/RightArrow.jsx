import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      {/* <i className='right'></i> */}
    </div>
  );
}

export default RightArrow;