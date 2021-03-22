import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import UserRoutes from './routes/UserRoutes';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <UserRoutes />
      </Router>
    </Provider>
  );
}

export default App;
