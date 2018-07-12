import React from 'react';
import SingleImage from './singleImage';

const ImageList = ({imagesList}) =>(
  <div className="row">
    {imagesList.map(singleImage => <SingleImage singleImage={singleImage} key={singleImage._id} />)}   
  </div>
)

export default ImageList;