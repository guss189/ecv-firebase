import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import AppConstants from './app.constants';

import HomePage from '../pages/HomePage.js';
import PostDetails from '../pages/PostDetails.js';
import PostAdd from '../pages/PostAdd.js';
// import LoginPage from '../pages/LoginPage.js';
// import RegisterPage from '../pages/RegisterPage.js';
// import AccueilPage from '../pages/AccueilPage.js';

const AppRoutes = () => (
  <Router>
    <Stack key="root">
      <Scene key={AppConstants.ROUTES.home} component={HomePage} title="Home" initial/>
    </Stack>
  </Router>
);

export default AppRoutes;
