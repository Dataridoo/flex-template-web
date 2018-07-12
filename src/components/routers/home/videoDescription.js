import React from 'react';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';


const VideoDescription = () =>(
  <div className="videodescription">
    <div className="row">      
      <div className="col-lg-3 colmargin">
        <div className="card">
          <img className="card-img-top rounded" src={image6} alt={"Accomodation"}/>
        </div>      
      </div>
      <div className="col-lg-3 colmargin">
        <div className="card">
          <img className="card-img-top rounded" src={image7} alt={"events"}/>
        </div>      
      </div>
      <div className="col-lg-6 colmargin"> 
        <div >
          <h5 > Video description </h5>
          <p >Mountain bike week program in syöte national park.</p> 
          <p >Mountain bike week program in syöte national park.</p>
          <p >Mountain bike week program in syöte national park.</p>  <br/>      
        </div>       
        <div className="about">
          <h5 className="about-title">  About </h5>
          <p className="about-text"> Mountain bike week program in syöte national park. </p>
          <p className="about-text"> Mountain bike week program in syöte national park. </p>
          <p className="about-text"> Mountain bike week program in syöte national park. </p>
          <p className="about-text"> Mountain bike week program in syöte national park. </p>
        </div>
      </div>
    </div>
  </div>
)

export default VideoDescription;