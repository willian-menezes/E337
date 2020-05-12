import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {
  //NavigationStackScreenProps,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';

import Routes from '../../constants/routes';

const Home: NavigationStackScreenComponent = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.ORACOES_SCREEN)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
