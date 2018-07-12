import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinks = () => (
  <div>
      <div className="row ">
      <div className="col-lg-6 colfooter">      
        <ul className="float-left">
          <li className="left-link"><Link className="link" to="/rentals">How it works</Link></li>
          <li className="left-link"><Link className="link" to="/rentals">Privacy Policy</Link></li>
          <li className="left-link"><Link className="link" to="/rentals">Terms of use</Link></li>
          <li className="left-link"><Link className="link" to="/rentals">Contact</Link></li>
        </ul> 
      </div>

      <div className="col-lg-6 colfooter social">
        <ul className="float-right">  
          <li className="left-link">
            <Link className="link"  to="/rentals">
              <i className="fa fa-camera"></i>
            </Link>
          </li>
          <li className="left-link">           
              <Link className="link" to="/rentals"> 
                <i className="fa fa-twitter"></i>
              </Link>        
          </li>
          <li className="left-link">
          <Link className="link" to="/rentals">
            <i className="fa fa-youtube-play"></i>
          </Link>
        </li>
          <li className="left-link">
            <Link className="link" to="/rentals">
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
        </ul>
      </div>      
    </div> 
    <div className="row">
      <div className="col-lg-12 copy-right">
        <p >&copy;pedal.world 2018</p> 
      </div>
    </div>
  </div>
)

export default FooterLinks;