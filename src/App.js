import React from 'react';



import './assets/css/custom.css';
import AppProvider from './core/AppProvider';

import renderRouters from './core/routersConfig';
import reducers from './redux/reducers';
import mySaga from './redux/saga';
import routers from './routers';



function App() {

  return (
    <AppProvider reducers={reducers} saga={mySaga}>
      {renderRouters(routers)}
    </AppProvider>

  );
}

export default App;
