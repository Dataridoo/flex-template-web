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