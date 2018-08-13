import React from 'react';
import { compose } from 'redux';
import { object, string, bool, number, func, shape } from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import omit from 'lodash/omit';

import {  SelectMultipleFilter} from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { createResourceLocatorString } from '../../util/routes';
import { propTypes } from '../../util/types';
import css from './SearchFiltersFineSetUp.css';


// Dropdown container can have a positional offset (in pixels)
const FILTER_DROPDOWN_OFFSET = -22;

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
    fineSetUpFilter,
    history,
    intl,
  } = props;

  const hasNoResult = listingsAreLoaded && resultsCount === 0;

  const fineSetUpLabel = intl.formatMessage({
    id: "SearchFilters.fineSetUpLabel",
  });

  const initialFineSetUp = initialValues(urlQueryParams, fineSetUpFilter.paramName);
  const handleSelectOptions = (urlParam, options) => {
    const queryParams =
      options && options.length > 0
        ? { ...urlQueryParams, [urlParam]: options.join(',') }
        : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };


 
  const fineSetUpFilterElement = fineSetUpFilter ? (
    <SelectMultipleFilter
      id={'SearchFilters.fineSetUpFilter'}
      name="fineSetUp"
      urlParam={fineSetUpFilter.paramName}
      label={fineSetUpLabel}
      onSelect={handleSelectOptions}
      options={fineSetUpFilter.options}
      initialValues={initialFineSetUp}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;


  
  return (
    <div >  
          {fineSetUpFilterElement} 

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

const SearchFiltersFineSetUp = compose(withRouter, injectIntl)(SearchFiltersComponent);

export default SearchFiltersFineSetUp;
