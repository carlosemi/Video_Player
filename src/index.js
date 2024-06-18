import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen'
import EditVideoScreen from './screens/EditVideoScreen'
import AddVideoScreen from './screens/AddVideoScreen';

import store from './store'; // Import the store

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/video/:id" element={<VideoScreen />} />
      <Route path="/editVideo/:id" element={<EditVideoScreen />} />
      <Route path="/addVideo" element={<AddVideoScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Provider store={store}> {/* Wrap your app with the Provider and pass the store */}
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>

  </React.StrictMode>
);


reportWebVitals();
