import React from 'react';
import { compose } from 'redux';
import { object, string, bool, number, func, shape } from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import omit from 'lodash/omit';

import { SelectSingleFilter, SelectMultipleFilter, NamedLink } from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString } from '../../util/routes';
import { propTypes } from '../../util/types';
import css from './SearchFilters.css';

// Dropdown container can have a positional offset (in pixels)
const FILTER_DROPDOWN_OFFSET = -22;

// resolve initial value for a single value filter
const initialValue = (queryParams, paramName) => {
  return queryParams[paramName];
};


// resolve initial values for a multi value filter
const initialValues = (queryParams, paramName) => {
  return !!queryParams[paramName] ? queryParams[paramName].split(',') : [];
};

const SearchFiltersComponent = props => {
  const {
    urlQueryParams,
    listingsAreLoaded,
    resultsCount,
    searchInProgress,
    categoryFilter,
    amenitiesFilter,
    isSearchFiltersPanelOpen,
    toggleSearchFiltersPanel,
    searchFiltersPanelSelectedCount,
    history,
    intl,
  } = props;

  const hasNoResult = listingsAreLoaded && resultsCount === 0;
 
  const categoryLabel = intl.formatMessage({
    id: 'SearchFilters.categoryLabel',
  });

  const amenitiesLabel = intl.formatMessage({
    id: 'SearchFilters.amenitiesLabel',
  });

  const initialAmenities = initialValues(urlQueryParams, amenitiesFilter.paramName);

  const initialCategory = initialValue(urlQueryParams, categoryFilter.paramName);

  const handleSelectOptions = (urlParam, options) => {
    const queryParams =
      options && options.length > 0
        ? { ...urlQueryParams, [urlParam]: options.join(',') }
        : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };

  const handleSelectOption = (urlParam, option) => {
    // query parameters after selecting the option
    // if no option is passed, clear the selection for the filter
    const queryParams = option
      ? { ...urlQueryParams, [urlParam]: option }
      : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };


  const categoryFilterElement = categoryFilter ? (
    <SelectSingleFilter
      urlParam={categoryFilter.paramName}
      label={categoryLabel}
      onSelect={handleSelectOption}
      options={categoryFilter.options}
      initialValue={initialCategory}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const amenitiesFilterElement = amenitiesFilter ? (
    <SelectMultipleFilter
      id={'SearchFilters.amenitiesFilter'}
      name="amenities"
      urlParam={amenitiesFilter.paramName}
      label={amenitiesLabel}
      onSelect={handleSelectOptions}
      options={amenitiesFilter.options}
      initialValues={initialAmenities}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const searchMap = (
      <NamedLink name="SearchMapPage">
        <span className={css.searchMap}>Map</span>
      </NamedLink>
    )

    const searchList = (
      <NamedLink name="SearchListingsPage">
        <span className={css.searchList} >List</span>
      </NamedLink>
    )

  const toggleSearchFiltersPanelButtonClasses =
    isSearchFiltersPanelOpen || searchFiltersPanelSelectedCount > 0
      ? css.searchFiltersPanelOpen
      : css.searchFiltersPanelClosed;
  const toggleSearchFiltersPanelButton = toggleSearchFiltersPanel ? (
    <button
      className={toggleSearchFiltersPanelButtonClasses}
      onClick={() => {
        toggleSearchFiltersPanel(!isSearchFiltersPanelOpen);
      }}
    >
      <FormattedMessage
        id="SearchFilters.moreFiltersButton"
        values={{ count: searchFiltersPanelSelectedCount }}
      />
    </button>
  ) : null;
  return (
    <div className={css.MainSearchContainer}>      
      <div className="ui secondary pointing menu">      
            <div className="left menu">  
              {categoryFilterElement}     
              {amenitiesFilterElement} 
              {toggleSearchFiltersPanelButton} 
            </div>
            
            <div className="right menu">  
            <button className={css.gridBtn}><i className="icon th"></i> &nbsp; Grid</button>
            <button className={css.listBtn}><i className="icon list"></i>&nbsp;{searchList}</button>
            <button className={css.mapBtn}><i className="icon anchor black"></i>&nbsp;{searchMap}</button>
              
            </div>          
        </div> 
     

      {listingsAreLoaded && resultsCount > 0 ? (
        <div className={css.searchResultSummary}>
          <span className={css.resultsFound}>
            <FormattedMessage id="SearchFilters.foundResults" values={{ count: resultsCount }} />
          </span>
        </div>
      ) : null}

      {hasNoResult ? (
        <div className={css.noSearchResults}>
          <FormattedMessage id="SearchFilters.noResults" />
        </div>
      ) : null}

      {searchInProgress ? (
        <div className={css.loadingResults}>
          <FormattedMessage id="SearchFilters.loadingResults" />
        </div>
      ) : null}
    </div>
  );
};

SearchFiltersComponent.defaultProps = {
  rootClassName: null,
  className: null,
  resultsCount: null,
  searchingInProgress: false,
  categoryFilter: null,
  isSearchFiltersPanelOpen: false,
  toggleSearchFiltersPanel: null,
  searchFiltersPanelSelectedCount: 0,
};

SearchFiltersComponent.propTypes = {
  rootClassName: string,
  className: string,
  urlQueryParams: object.isRequired,
  listingsAreLoaded: bool.isRequired,
  resultsCount: number,
  searchingInProgress: bool,
  onManageDisableScrolling: func.isRequired,
  categoriesFilter: propTypes.filterConfig,
  isSearchFiltersPanelOpen: bool,
  toggleSearchFiltersPanel: func,
  searchFiltersPanelSelectedCount: number,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SearchFilters = compose(withRouter, injectIntl)(SearchFiltersComponent);

export default SearchFilters;
