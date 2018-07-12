import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div  className="container-fluid">
    <div className="row">
      <div className="col-12">
        <h3>404 Error! <Link to="/">Go home </Link></h3>
      </div>
    </div>
  </div> 
)

export default PageNotFound;