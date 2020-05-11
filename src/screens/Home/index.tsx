import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Routes from '../../constants/routes';

import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';

const Home: NavigationStackScreenComponent = ({ navigation }) => {

  return (
    <View>
        <Text>
            Home Screen
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.ORACOES_SCREEN)}
        >
          <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );

};

export default Home;
