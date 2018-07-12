import React from 'react';
import Promotion from './singlePromotion';

const PromotionList = ({promItems}) => (
  <div className="row">
    {promItems.map(promItem => <Promotion promItem={promItem} key={promItem._id}/>)}
  </div>
)

export default PromotionList;
