import React from 'react';
import {
  StatusBar,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';

import NavigatorService from './routes/navigation-service';
import createRoutes from './routes';

const Navigation = createRoutes({});

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
        <StatusBar barStyle="light-content" />
        <Navigation
            ref={nav => NavigatorService.setNavigator(nav)}
        />
      {/* </Provider> */}
    </>
  );
};

export default App;
