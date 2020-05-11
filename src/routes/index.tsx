import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';

import Routes from '../constants/routes';
import { TCreateRoutesOptions } from '../interfaces/screen.interface';

import Home from '../screens/Home';
import Avisos from '../screens/Avisos';
import Oracoes from '../screens/Oracoes'

import { Heart, Events, Notifications } from '../components/icons'

const HomeStack = createStackNavigator(
    {
        [Routes.HOME_SCREEN]: {
            screen: Home,
            navigationOptions: { title: 'Palavras' },
        },
        [Routes.ORACOES_SCREEN]: {
            screen: Oracoes,
            navigationOptions: { title: 'Oracoes' },
        }
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerShown: false,
            gesturesEnabled: false, // remove and apply to different screens, this will disable the ios goback
        },
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#313131',
            },
            headerTintColor: '#098ddf',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        },
        initialRouteName: Routes.HOME_SCREEN
    },
);

const MainTabs = createBottomTabNavigator({
    Notifications: {
        screen: Avisos,
        navigationOptions: {
            tabBarLabel: 'Notifications',
            tabBarIcon: ({tintColor}) => (
                <Notifications color={`${tintColor}`} />
            )
        },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({tintColor}) => (
            <Heart color={`${tintColor}`} />
        )
      },
    },
    Events: {
        screen: Oracoes,
        navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({tintColor}) => (
                <Events color={`${tintColor}`} />
            )
        },
    },
},{
    tabBarOptions: {
        activeTintColor: '#098ddf',
        style: {
          backgroundColor: '#313131',
        },
        showIcon: true,
        showLabel: false
    },
    initialRouteName: "Home"
});
  
const createRoutes = ({ customRoutes }: TCreateRoutesOptions) => createAppContainer(
    createSwitchNavigator({
        [Routes.APP_STACK]: MainTabs,
        ...customRoutes,
    }, {
        initialRouteName: Routes.APP_STACK
    }),
);
  
export default createRoutes;
  