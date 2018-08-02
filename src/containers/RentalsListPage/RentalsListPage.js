import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import config from '../../config';

import { manageDisableScrolling } from '../../ducks/UI.duck';
import { parse, stringify } from '../../util/urlHelpers';
import { propTypes } from '../../util/types';
import { getListingsById } from '../../ducks/marketplaceData.duck';


import { searchListings, setActiveListing } from './RentalsListPage.duck';
import {
  pickSearchParamsOnly,
  validURLParamsForExtendedData,
  createSearchResultSchema,
} from './RentalsListPage.helpers';
import MainPanel from './MainPanel';

const RESULT_PAGE_SIZE = 24;


export class SearchPageComponent extends Component {
  constructor(props) {
    super(props);

    this.filters = this.filters.bind(this);
   
  }

  filters() {
    const { categories } = this.props;

    return {
      categoryFilter: {
        paramName: 'pub_category',
        options: categories,
      },
    };
  }
  

  render() {
    const {
      intl,
      listings,
      location,     
     onManageDisableScrolling,
      pagination,
     // scrollingDisabled,
      searchParams,
      onActivateListing,
    } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { mapSearch, page, ...searchInURL } = parse(location.search, {
      latlng: ['origin'],
      latlngBounds: ['bounds'],
    });

    const filters = this.filters();

    const urlQueryParams = pickSearchParamsOnly(searchInURL, filters);

    const urlQueryString = stringify(urlQueryParams);
    const paramsQueryString = stringify(pickSearchParamsOnly(searchParams, filters));
    const searchParamsAreInSync = urlQueryString === paramsQueryString;

    const validQueryParams = validURLParamsForExtendedData(searchInURL, filters);
   
    const { address } = searchInURL || {};
    const { title, description, frame, schema } = createSearchResultSchema(listings, address, intl);

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div
        //scrollingDisabled={scrollingDisabled}
        description={description}
        title={title}
         frame={frame}
        schema={schema} 
      >
     
       
          <MainPanel
            urlQueryParams={validQueryParams}
            listings={listings}          
            searchParamsAreInSync={searchParamsAreInSync}
            onActivateListing={onActivateListing}
            onManageDisableScrolling={onManageDisableScrolling}            
            pagination={pagination}
            primaryFilters={{
              categoryFilter: filters.categoryFilter,
            }}
          />  
        
          
        
      </div>
    );
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

SearchPageComponent.defaultProps = {
  listings: [],
  mapListings: [],
  pagination: null,
  searchListingsError: null,
  searchParams: {},
  tab: 'listings',
  categories: config.custom.categories,
  activeListingId: null,
};

const { array, func, oneOf, object, shape,  string } = PropTypes;

SearchPageComponent.propTypes = {
  listings: array,
  mapListings: array,
  onActivateListing: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  pagination: propTypes.pagination,
  //scrollingDisabled: bool.isRequired,
  searchListingsError: propTypes.error,
  searchParams: object,
  tab: oneOf(['filters', 'listings', 'map']).isRequired,
  categories: array,
  //amenities: array,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({
    search: string.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const {
    currentPageResultIds,
    pagination,
    activeListingId,
  } = state.SearchPage;
  const pageListings = getListingsById(state, currentPageResultIds);
 
  return {
    listings: pageListings,
    pagination,
    //scrollingDisabled: isScrollingDisabled(state),
    activeListingId,
  };
};

const mapDispatchToProps = dispatch => ({
   onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)), 
  onActivateListing: listingId => dispatch(setActiveListing(listingId)),
});



const RentalsListPage = compose(withRouter, connect(mapStateToProps, mapDispatchToProps), injectIntl)(

  SearchPageComponent
);

RentalsListPage.loadData = (params, search) => {
  const queryParams = parse(search);
  const { page = 1, address, country, origin, ...rest } = queryParams;
  const originMaybe = config.sortSearchByDistance && origin ? { origin } : {};
  return searchListings({
    ...rest,
    ...originMaybe,
    page,
    perPage: RESULT_PAGE_SIZE,
    include: ['author', 'images'],
    'fields.image': ['variants.landscape-crop', 'variants.landscape-crop2x'],
    'limit.images': 1,
  });
};

export default RentalsListPage;
