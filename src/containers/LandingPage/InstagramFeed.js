import React, { Component } from 'react';
import Instafeed from 'react-instafeed';

const instafeedTarget = 'instafeed';
const template = `<div class="ui stackable four column grid">
                    <div class="column">
                      <div class="ui fluid card">           
                        <div class="image">
                          <a href='{{link}}' target='_blank' class='instafeed__item'>
                            <img src='{{image}}' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> `;

  class InstagramFeed extends Component {

    componentDidMount() {

    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
          <div id={instafeedTarget}>
            <Instafeed
              limit='5'
              ref='instafeed'
              resolution='standard_resolution'
              sortBy='most-recent'
              target={instafeedTarget}
              template={template}
              userId='8194614893'
              clientId='	1dd0c366c5fa4ce3bba719905ee3134e'
              accessToken='8194614893.1dd0c36.4ad02a57908e401c8bac55452d8c9742'
            />
          </div>
        )
      }
}

/* CLIENT INFO


https://instagram.com/oauth/authorize/?client_id=1dd0c366c5fa4ce3bba719905ee3134e&redirect_uri=http://instafeedjs.com&response_type=token&scope=public_content

http://instafeedjs.com/#access_token=8194614893.1dd0c36.4ad02a57908e401c8bac55452d8c9742


https://api.instagram.com/oauth/authorize/?client_id=1dd0c366c5fa4ce3bba719905ee3134e&redirect_uri=http://localhost:3000/&response_type=token&scope=public_content

https://api.instagram.com/oauth/authorize/?client_id=1dd0c366c5fa4ce3bba719905ee3134e&redirect_uri=http://localhost:3000/&response_type=code

http://localhost:3000/?code=0c4f402c82c04b059cf9152f56769199

 curl -F 'client_id=1dd0c366c5fa4ce3bba719905ee3134e' \
    -F 'client_secret=14ebd5c5b28441daaac48b4047ec9ca4' \
    -F 'grant_type=authorization_code' \
    -F 'redirect_uri=http://localhost:3000/' \
    -F 'code=0c4f402c82c04b059cf9152f56769199' \
    https://api.instagram.com/oauth/access_token

    curl -F 'client_id=1dd0c366c5fa4ce3bba719905ee3134e' \
>     -F 'client_secret=14ebd5c5b28441daaac48b4047ec9ca4' \
>     -F 'grant_type=authorization_code' \
>     -F 'redirect_uri=http://localhost:3000/' \
>     -F 'code=0c4f402c82c04b059cf9152f56769199' \
>     https://api.instagram.com/oauth/access_token
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1182  100   507  100   675   1352   1800 --:--:-- --:--:-- --:--:--  3152{"access_token": "8194614893.1dd0c36.4ad02a57908e401c8bac55452d8c9742", "user": {"id": "8194614893", "username": "pedal.world.europe", "profile_picture": "https://scontent.cdninstagram.com/vp/967a5ff9dddc2af64007fd991386da7e/5BFA7E94/t51.2885-19/s150x150/37093197_2189706844638767_6353317620850098176_n.jpg", "full_name": "Pedal.world", "bio": "Pedal.word offers you an overview and online booking for bike guide services, rentals and accommodation.", "website": "http://pedal.world/", "is_business": true}}


*/

export default InstagramFeed;