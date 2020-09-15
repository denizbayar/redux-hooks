import React from 'react';
import {Provider} from 'react-redux';

import store from './store/store';
import Navbar from './components/Navbar/Navbar'
import Routes from './routes';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/>
      <Routes/>
    </div>
  </Provider>
  );
}

export default App;
