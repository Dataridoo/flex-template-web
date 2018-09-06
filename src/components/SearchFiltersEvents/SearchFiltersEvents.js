import React from 'react';
import { compose } from 'redux';
import { object, string, bool, number, func, shape } from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import omit from 'lodash/omit';

import { SelectSingleFilter, SelectMultipleFilter, NamedLink} from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString } from '../../util/routes';
import { propTypes } from '../../util/types';
import css from './SearchFiltersEvents.css';

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
// resolve initial values for a multi value filter
const initialBikeValues = (queryParams, paramName) => {
  return !!queryParams[paramName] ? queryParams[paramName].split(',') : [];
};

const SearchFiltersEventsComponent = props => {
  const {
    urlQueryParams,
    listingsAreLoaded,
    resultsCount,
    searchInProgress,
    categoryFilter,
     amenitiesFilter,
     bikeSizeFilter,
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

  
  const initialCategory = initialValue(urlQueryParams, categoryFilter.paramName);

  const handleSelectOption = (urlParam, option) => {
    // query parameters after selecting the option
    // if no option is passed, clear the selection for the filter
    const queryParams = option
      ? { ...urlQueryParams, [urlParam]: option }
      : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('EventsSearchPage', routeConfiguration(), {}, queryParams));
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
  
  const amenitiesLabel = intl.formatMessage({
    id: 'SearchFilters.amenitiesLabel',
  });

  const initialAmenities = initialValues(urlQueryParams, amenitiesFilter.paramName);
  const handleSelectOptions = (urlParam, options) => {
    const queryParams =
      options && options.length > 0
        ? { ...urlQueryParams, [urlParam]: options.join(',') }
        : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('EventsSearchPage', routeConfiguration(), {}, queryParams));
  };


 
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
  
  
  const bikeSizeLabel = intl.formatMessage({
    id: 'SearchFilters.bikeSizeLabel',
  });

 const initialBikeSize = initialBikeValues(urlQueryParams, bikeSizeFilter.paramName);
   
  const bikeSizeFilterFilterElement = bikeSizeFilter ? (
    <SelectMultipleFilter
      id={'SearchFilters.bikeSizeFilter'}
      name="bikeSize"
      urlParam={bikeSizeFilter.paramName}
      label={bikeSizeLabel}
      onSelect={handleSelectOptions}
      options={bikeSizeFilter.options}
      initialBikeValues={initialBikeSize}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

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
  
  const searchMap = (
      <NamedLink name="SearchMapPage">
        <span className={css.searchMap}>Map</span>
      </NamedLink>
    )

    const searchGrid = (
      <NamedLink name="RentalsListPage">
        <span className={css.searchGrid} >Grid</span>
      </NamedLink>
    )
  return (
    <div className="container">    
      <div className={css.MainSearchContainer}> 
        <div className="row">      
            <div className="col-md-10" > 
             <div className={css.floatLeftCol}> 
                <span className={css.marginRight}> {categoryFilterElement} </span>
                <span className={css.marginRight}> {amenitiesFilterElement} </span>            
                <span className={css.marginRight}> {bikeSizeFilterFilterElement}</span>
                  {toggleSearchFiltersPanelButton} 
                </div>
            </div>
              
              <div className="col-md-2" > 
              <div className={css.floatRightCol}>  
              <button className={css.gridBtn}><i className="icon th"></i>{searchGrid}</button>
              <button className={css.mapBtn}><i className="icon anchor black"></i>{searchMap}</button>
              </div>  
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
          </div>
        ) : null}
        </div>
    </div>
  );
};

SearchFiltersEventsComponent.defaultProps = {
  rootClassName: null,
  className: null,
  resultsCount: null,
  searchingInProgress: false,
  categoryFilter: null,
  isSearchFiltersPanelOpen: false,
  toggleSearchFiltersPanel: null,
  searchFiltersPanelSelectedCount: 0,
};

SearchFiltersEventsComponent.propTypes = {
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

const SearchFiltersEvents = compose(withRouter, injectIntl)(SearchFiltersEventsComponent);

export default SearchFiltersEvents;