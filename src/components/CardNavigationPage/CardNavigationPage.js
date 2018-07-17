import React from 'react';
import css from  './CardNavigationPage.css';

import {
  Menu,
  MenuLabel,
  MenuContent,
  MenuItem,
  Button,
} from '../../components';

const CardNavigationPage = () =>( 

  <div className="ui grid secondary pointing menu rowMargin">
  <div className="three column row">
    <div className="left floated column">
      <div className="ui icon buttons">
        
        <a className="ui right attached button">           
          <Menu className={css.menu}>
            <MenuLabel className={css.menuLabel}>
              All Listing Types <i className="dropdown icon"></i>
            </MenuLabel>
            <MenuContent className={css.menuContent}>
              <MenuItem key="first item" className={css.menuItem}>
                <Button className={css.menubtn} >ALL CATEGORIES</Button>
              </MenuItem>
              <MenuItem key="second item" className={css.menuItem}>
                <Button className={css.menubtn}>CITY BIKES</Button>
              </MenuItem>
              <MenuItem key="third item" className={css.menuItem}>
                <Button className={css.menubtn}>ROAD BIKES</Button>
              </MenuItem>
              <MenuItem key="fourth item" className={css.menuItem}>
                <Button className={css.menubtn}>E-BIKES</Button>
              </MenuItem>
              <MenuItem key="fifth item" className={css.menuItem}>
              <Button className={css.menubtn}>MOUNTAIN-BIKES</Button>
            </MenuItem>
            </MenuContent>                        
          </Menu>  
        </a>
      </div>         
  </div> 
      
  <div className="right floated column">
    <div className="ui icon buttons">
      <button className="ui left attached button ui blue button"><i className="icon th"></i> &nbsp; Grid   </button>
      <button className="ui left attached button"><i className="icon list"></i>&nbsp;List</button>
      <button className="ui right attached button"><i className="icon anchor"></i> &nbsp;Map</button>
    </div>
  </div>
  </div>
  </div>
)

export default CardNavigationPage;