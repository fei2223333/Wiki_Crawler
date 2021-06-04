import React from 'react';
import { Provider } from 'react-redux';
import Container from './Template/Container.js'
import store from './Store/store.js'

function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;

