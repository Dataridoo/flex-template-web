import React, { Component } from 'react';
import { array, bool, func, object, objectOf, string } from 'prop-types';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import {
  SearchResultsPanel,
  SearchFilters,
  SearchFiltersPanel,
} from '../../components';
import { validFilterParams } from './RentalsListPage.helpers';

import css from './RentalsListPage.css';

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isSearchFiltersPanelOpen: false };
  }

  render() {
    const {
      className,
      rootClassName,
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
   // const filters = merge(primaryFilters, secondaryFilters);  
  

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

    const classes = classNames(rootClassName || css.searchResultContainer, className);

    //const filterParamNames = Object.values(filters).map(f => f.paramName);
    const secondaryFilterParamNames = secondaryFilters
      ? Object.values(secondaryFilters).map(f => f.paramName)
      : [];

    return (
      <div className={classes}>
        <SearchFilters
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
          <div className={classNames(css.searchFiltersPanel)}>
            <SearchFiltersPanel
              urlQueryParams={urlQueryParams}
              listingsAreLoaded={listingsAreLoaded}
              onClosePanel={() => this.setState({ isSearchFiltersPanelOpen: false })}
              filterParamNames={secondaryFilterParamNames}
             // {...secondaryFilters}
            />
          </div>
        ) : (
          <div
            className={classNames(css.listings, {
              [css.newSearchInProgress]: !listingsAreLoaded,
            })}
          >
            
            <SearchResultsPanel
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
  searchListingsError: propTypes.error,
  searchParamsAreInSync: bool.isRequired,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  pagination: propTypes.pagination,
  searchParamsForPagination: object,
  primaryFilters: objectOf(propTypes.filterConfig),
  secondaryFilters: objectOf(propTypes.filterConfig),
};

export default MainPanel;
