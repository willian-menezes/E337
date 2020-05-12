import React from 'react';

import {StatusBar} from 'react-native';

//import {Provider} from 'react-redux';

import createRoutes from './routes';

import NavigatorService from './routes/navigation-service';

const Navigation = createRoutes({});

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
      <StatusBar barStyle="light-content" />
      <Navigation ref={(nav) => NavigatorService.setNavigator(nav)} />
      {/* </Provider> */}
    </>
  );
};

export default App;
