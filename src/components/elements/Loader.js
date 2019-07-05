import React from 'react';
import Image from './Image';

const Loader = () => (
  <div className="loader">
    <Image className="loader__image" src="/images/spinner.gif" />
  </div>
);

export default Loader;
