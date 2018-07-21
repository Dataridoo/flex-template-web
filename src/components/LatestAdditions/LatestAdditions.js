import React from 'react';
import PropTypes from 'prop-types';


import css from './LatestAdditions.css';



const LatestAdditions = props => {
  
  return (
    <div className={css.latestAdditions}>
      <h2 className={css.title}>Latest Additions</h2>
      <ul className={css.unorderList} >
        <li className={css.orderedList} >
          <p >EVENT <span className={css.latestspan} >Some text Some text Some text Some text</span></p>
        </li>
        <li className={css.orderedList} >
          <p >RENTAL <span className={css.latestspan}  >Some text Some text Some text Some text</span></p>
        </li>
        <li className={css.orderedList} >
          <p >GUIDES <span className={css.latestspan}  >Some text Some text Some text Some text</span></p>
        </li>        
      </ul>
      
    </div>
  );
};

const { string } = PropTypes;

LatestAdditions.propTypes = {
  rootClassName: string,
  className: string,
};

export default LatestAdditions;
