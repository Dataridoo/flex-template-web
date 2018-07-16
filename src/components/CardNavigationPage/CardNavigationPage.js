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

  <div class="ui grid secondary pointing menu rowMargin">
  <div class="five column row">
    <div class="left floated column">
      <div class="ui icon buttons">
        
        <button class="ui right attached button">           
          <Menu className={css.menu}>
            <MenuLabel className={css.menuLabel}>
              All Listing Types <i class="dropdown icon"></i>
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
        </button>
      </div>         
  </div> 
      
  <div class="right floated column">
    <div class="ui icon buttons">
      <button class="ui left attached button ui blue button"><i class="icon th"></i> &nbsp; Grid   </button>
      <button class="ui left attached button"><i class="icon list"></i>&nbsp;List</button>
      <button class="ui right attached button"><i class="icon anchor"></i> &nbsp;Map</button>
    </div>
  </div>
  </div>
  </div>
)

export default CardNavigationPage;