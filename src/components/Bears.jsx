import { useBearStore } from 'Store/Store';
import React from 'react';

const Bears = () => {
  const clearBears = useBearStore(state => state.removeAllBears);
  //   console.log(increasePopulation);
  return <button onClick={clearBears}>Clear Bears</button>;
};

export default Bears;
