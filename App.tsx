import React from 'react';
import Navigation from './src/Screen/Navigation';
import  store  from './src/Store/Store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
