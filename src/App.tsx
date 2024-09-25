import './shared/styles/index.css';

import AppRouter from '@routes';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const App = () => <AppRouter />;
const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
