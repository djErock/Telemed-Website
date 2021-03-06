import React, { Component } from 'react';

import './banner.css';

const Banner = (props) => (
    <div className="banner">
        <img src={require('../../img/banners/' + props.imgSrc)} alt="About Caduceus USA Telemed" />
    </div>
)

export default Banner;