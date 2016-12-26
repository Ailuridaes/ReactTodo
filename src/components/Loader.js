import React from 'react';
import loader from '../loader.gif';

const Loader = () => {
  const loaderStyle = {
    margin: '25px'
  };

  const divStyle = {
    textAlign: 'center'
  };

  return (
    <div style={ divStyle }>
      <img src={ loader } alt="loader icon" style={ loaderStyle } />
    </div>
  );
};

export default Loader;
