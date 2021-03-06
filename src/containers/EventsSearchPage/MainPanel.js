import React, { Component } from 'react';
import { array, bool, func, number, object, objectOf, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import {
  SearchResultsPanelEvents,
  SearchFiltersEvents,
  SearchFiltersPanelEvents,
} from '../../components';
import { validFilterParams } from './EventsSearchPage.helpers';

import css from './EventsSearchPage.css';

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isSearchFiltersPanelOpen: false };
  }

  render() {
    const {
      urlQueryParams,
      listings,
      searchInProgress,
      searchListingsError,
      searchParamsAreInSync,
      onActivateListing,
      onManageDisableScrolling,
      pagination,
      searchParamsForPagination,
      primaryFilters,
      secondaryFilters,
    } = this.props;

    const isSearchFiltersPanelOpen = !!secondaryFilters && this.state.isSearchFiltersPanelOpen;

    
    const selectedSecondaryFilters = secondaryFilters
      ? validFilterParams(urlQueryParams, secondaryFilters)
      : {};
    const searchFiltersPanelSelectedCount = Object.keys(selectedSecondaryFilters).length;

    const searchFiltersPanelProps = !!secondaryFilters
      ? {
          isSearchFiltersPanelOpen: this.state.isSearchFiltersPanelOpen,
          toggleSearchFiltersPanel: isOpen => {
            this.setState({ isSearchFiltersPanelOpen: isOpen });
          },
          searchFiltersPanelSelectedCount,
        }
      : {};

    const hasPaginationInfo = !!pagination && pagination.totalItems != null;
    const listingsAreLoaded = !searchInProgress && searchParamsAreInSync && hasPaginationInfo;

   
    const secondaryFilterParamNames = secondaryFilters
      ? Object.values(secondaryFilters).map(f => f.paramName)
      : [];

    return (
      <div >
        <SearchFiltersEvents
         className={css.searchFilters}        
          urlQueryParams={urlQueryParams}
          listingsAreLoaded={listingsAreLoaded}
          searchInProgress={searchInProgress}
          searchListingsError={searchListingsError}
          onManageDisableScrolling={onManageDisableScrolling}
          {...searchFiltersPanelProps}
          {...primaryFilters}
        />
       
        {isSearchFiltersPanelOpen ? (
          <div 
          className={classNames(css.searchFiltersPanel)}
    
          >
            <SearchFiltersPanelEvents
              urlQueryParams={urlQueryParams}
              listingsAreLoaded={listingsAreLoaded}
              onClosePanel={() => this.setState({ isSearchFiltersPanelOpen: false })}
              filterParamNames={secondaryFilterParamNames}
              {...secondaryFilters}
            />
          </div>
        ) : (
          <div      
            className={classNames(css.listings, {
              [css.newSearchInProgress]: !listingsAreLoaded,
            })}
          >
            {searchListingsError ? (
              <h2 className={css.error}>
                <FormattedMessage id="SearchPage.searchError" />
              </h2>
            ) : null}
            <SearchResultsPanelEvents
              className={css.searchListingsPanel}              
              listings={listings}
              pagination={listingsAreLoaded ? pagination : null}
              search={searchParamsForPagination}
              setActiveListing={onActivateListing}
            />
          </div>
        )}
      </div>
    );
  }
}

MainPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listings: [],
  resultsCount: 0,
  pagination: null,
  searchParamsForPagination: {},
  primaryFilters: null,
  secondaryFilters: null,
};

MainPanel.propTypes = {
  className: string,
  rootClassName: string,

  urlQueryParams: object.isRequired,
  listings: array,
  searchInProgress: bool.isRequired,
  searchListingsError: propTypes.error,
  searchParamsAreInSync: bool.isRequired,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  onOpenModal: func.isRequired,
  onCloseModal: func.isRequired,
  onMapIconClick: func.isRequired,
  pagination: propTypes.pagination,
  searchParamsForPagination: object,
  showAsModalMaxWidth: number.isRequired,
  primaryFilters: objectOf(propTypes.filterConfig),
  secondaryFilters: objectOf(propTypes.filterConfig),
};

export default MainPanel;