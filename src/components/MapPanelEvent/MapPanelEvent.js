import React from 'react';
import PropTypes from 'prop-types';
import { NamedLink } from '../../components';
import css from './MapPanel.css';

const MapPanelEvent = props => (
  <div>
    <div className={css.mapContainer}>Map</div>
    <div className={css.mapListingsContainer}>{props.children}</div>
    <NamedLink className={css.toFiltersButton} name="SearchFiltersPage">
      Filters
    </NamedLink>
    <NamedLink className={css.close} name="SearchListingsPage">
      X
    </NamedLink>
  </div>
);

MapPanelEvent.defaultProps = { children: null };

const { any } = PropTypes;

MapPanelEvent.propTypes = { children: any };

export default MapPanelEvent;
