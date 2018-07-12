import React from 'react';


const Promotion = ({promItem }) =>(
  <div className="col-lg-6 colmargin">
    <div className="card">
      <img className="card-img-top rounded" src={promItem.thumbnail} alt={"Bike Hotel Concept"}/>
    </div>
    <div className="card-body">
      <h5 className="card-title"> 
        {promItem.title} <span className="card-title-span">starting from</span>
      </h5>
      <p className="card-text">
        {promItem.detail} <span className="card-text-price">{promItem.price}</span>
      </p>
      <p >
       {promItem.ratings}
      </p>
    </div>
  </div>
)

export default Promotion;