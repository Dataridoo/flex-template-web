import React from 'react';
import { NavLink } from 'react-router-dom';
/* import logo from '../assets/log.jpg';
import profile from '../assets/profile.jpg';
import search from '../assets/search.jpg'; */

const Header = () =>(         
  <nav className="navbar navbar-expand-lg navbar-white bg-white fixed-top">         
   
      <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">            
          <li className="nav-item">
            <NavLink className="nav-link" to="/rentals" activeClassName="is-active">Rentals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/guided" activeClassName="is-active">Guided Tours</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/events" activeClassName="is-active">Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="is-active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog" activeClassName="is-active">Blog</NavLink>
          </li>          
          <li className="nav-item">
            <NavLink className="nav-link" to="/contactUs" activeClassName="is-active">Contact Us</NavLink>
          </li> 
                                      
        </ul>
        
        
      </div> 
    </nav>  
)

export default Header;