import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div id="loader" className="whole-page fadeout">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
