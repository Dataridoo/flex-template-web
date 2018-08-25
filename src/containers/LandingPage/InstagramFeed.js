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
              clientId='	775d14e6be244d159e81ccdb5ad83ed4'
              accessToken='8194614893.775d14e.acf2b4a38e524186af2bbf0c04923fba'
            />
          </div>
        )
      }
}

/* CLIENT INFO


https://instagram.com/oauth/authorize/?client_id=0444b51dd57a4470a8e92aad12237e41&redirect_uri=http://instafeedjs.com&response_type=token&scope=public_content
userId: 8194614893
accessToken: 8194614893.775d14e.acf2b4a38e524186af2bbf0c04923fba
http://instafeedjs.com/#access_token=8194614893.775d14e.acf2b4a38e524186af2bbf0c04923fba
https://www.npmjs.com/package/react-instafeed
*/

export default InstagramFeed;