/**
 * Export reducers from ducks modules of different containers (i.e. default export)
 * We are following Ducks module proposition:
 * https://github.com/erikras/ducks-modular-redux
 */
import CheckoutPage from './CheckoutPage/CheckoutPage.duck';
import ContactDetailsPage from './ContactDetailsPage/ContactDetailsPage.duck';
import EditListingPage from './EditListingPage/EditListingPage.duck';

import EditEventsPage from './EditEventsPage/EditEventsPage.duck';
import InboxPage from './InboxPage/InboxPage.duck';
import ListingPage from './ListingPage/ListingPage.duck';
import EventsListingPage from './EventsListingPage/EventsListingPage.duck';
import ManageListingsPage from './ManageListingsPage/ManageListingsPage.duck';
import ManageEventListingsPage from './ManageEventListingsPage/ManageEventListingsPage.duck';
import PasswordChangePage from './PasswordChangePage/PasswordChangePage.duck';
import PasswordRecoveryPage from './PasswordRecoveryPage/PasswordRecoveryPage.duck';
import PasswordResetPage from './PasswordResetPage/PasswordResetPage.duck';
import PayoutPreferencesPage from './PayoutPreferencesPage/PayoutPreferencesPage.duck';
import ProfilePage from './ProfilePage/ProfilePage.duck';
import ProfileSettingsPage from './ProfileSettingsPage/ProfileSettingsPage.duck';
import SearchPage from './SearchPage/SearchPage.duck';
import EventsSearchPage from './EventsSearchPage/EventsSearchPage.duck';
import RentalsListPage from './RentalsListPage/RentalsListPage.duck';

import TransactionPage from './TransactionPage/TransactionPage.duck';
import CheckoutPageEvent from './CheckoutPageEvent/CheckoutPageEvent.duck';

export {
  CheckoutPage,
  CheckoutPageEvent,
  ContactDetailsPage,
  EditListingPage,
  EditEventsPage,
  InboxPage,
  ListingPage,
  EventsListingPage,
  ManageListingsPage,
  ManageEventListingsPage,
  PasswordChangePage,
  PasswordRecoveryPage,
  PasswordResetPage,
  PayoutPreferencesPage,
  ProfilePage,
  ProfileSettingsPage,
  SearchPage,
  RentalsListPage,
  EventsSearchPage,
  TransactionPage,
};
