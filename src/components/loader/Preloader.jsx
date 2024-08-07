import React from 'react';
import './preloader.scss';
import Loader from '/newLogo.png';

function Preloader() {
  return (
    <div className="preloader">
      <div className="load">
        <img src={Loader}/>
      </div>
    </div>
  )
}

export default Preloader
