import React from 'react';

const SingleImage = ({singleImage}) => (
  <div className="col-lg-3 colmargin3">
    <div className="card">
      <img className="card-img-top rounded" src={singleImage.thumbnail} alt={"Bike Hotel Concept"}/>
    </div> 
  </div> 
)

export default SingleImage;