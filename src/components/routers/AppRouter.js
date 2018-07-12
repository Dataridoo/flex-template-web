import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Rentals from './rentals/rentals';
import GuidedTours from './guidedTours/guidedTours';
import Events from './events/events';
import About from './about/about';
import Blog from './blog/blog';
import ContactUs from './contactus/contactUs';
import SearchPage from './search/searchPage';
import PageNotFound from './pageNotFound/pageNotFound';
import './styles.css';

    const AppRouter = () => (
      <BrowserRouter>
        <div>        
            <NavLink className="nav-link" to="/rentals" activeClassName="is-active">Rentals
            </NavLink>
          
              <NavLink className="nav-link" to="/guided" activeClassName="is-active">Guided Tours</NavLink>
          
             <NavLink className="nav-link" to="/events" activeClassName="is-active">Events
          </NavLink>
          
            <NavLink className="nav-link" to="/about" activeClassName="is-active">About
          </NavLink>
         
            <NavLink className="nav-link" to="/blog" activeClassName="is-active">Blog
          </NavLink>
          
            <NavLink className="nav-link" to="/contactUs" activeClassName="is-active">Contact Us
          </NavLink>
          
          
            <Switch>  
              <Route path="/rentals" component={Rentals} />        
              <Route path="/guided" component={GuidedTours} /> 
              <Route path="/events" component={Events} />        
              <Route path="/about" component={About} /> 
              <Route path="/blog" component={Blog} />        
              <Route path="/search" component={SearchPage} /> 
              <Route path="/contactUs" component={ContactUs} /> 
              <Route component={PageNotFound} />       
            </Switch>
        </div>    
      </BrowserRouter>
    )

    export default AppRouter;