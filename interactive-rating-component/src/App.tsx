import React from 'react';

import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';
import store from '@/store';
import GlobalStyle from '@/style/global';

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
