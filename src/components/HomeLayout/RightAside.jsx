import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../FindUs/FindUs';
import Qzone from '../Qzone/Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
          <SocialLogin></SocialLogin>
          <FindUs></FindUs>
          <Qzone></Qzone>
        </div>
    );
};

export default RightAside;