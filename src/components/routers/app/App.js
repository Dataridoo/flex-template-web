import React from 'react';
import AppRouter from '../routers/AppRouter';
import Home from './home/home';


const App = () => (
  <body>
    <AppRouter />
    <Home />
  </body>
)

export default App;