import React from 'react';
import { NamedLink, AvatarMedium } from '../../components';

import css from './EventsListingPage.css';

const SectionAvatar = props => {
  const { user, params } = props;
  return (
    <div className={css.sectionAvatar}>
      <NamedLink name="EventsListingPage" params={params} to={{ hash: '#host' }}>
        <AvatarMedium user={user} className={css.avatarDesktop} disableProfileLink />
      </NamedLink>
      <NamedLink name="EventsListingPage" params={params} to={{ hash: '#host' }}>
        <AvatarMedium user={user} className={css.avatarMobile} disableProfileLink />
      </NamedLink>
    </div>
  );
};

export default SectionAvatar;
