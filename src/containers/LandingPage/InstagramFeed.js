<<<<<<< HEAD
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
              userId='5757941462'
              clientId='4ef4f2477f864171b6d9960cd395ac02'
              accessToken='5757941462.4ef4f24.d5733cb0f9fb458aa14a32f945c9a8a7'
            />
          </div>
        )
      }
}
export default InstagramFeed;
=======
import React from 'react';
import Instafeed from 'react-instafeed';


const instafeedTarget =  (
    <div id={instafeedTarget}>
      <Instafeed
        limit='5'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
        userId='4622774'
        clientId='5f9c6910354a42a69ec2096d3ecd5017'
        accessToken='f33965f025304358a843d73dedc71eec'
      />
    </div>
  )

  //https://www.instagram.com/developer/clients/5f9c6910354a42a69ec2096d3ecd5017/edit/

  export default instafeedTarget;
>>>>>>> 8cf0c81213824515c2f02551a3b18cf344427886
