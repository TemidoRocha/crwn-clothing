import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherPorps }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherPorps} />;
};

export default WithSpinner;
