import React from 'react';
import { View, Text } from 'react-native';

import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';

const Avisos: NavigationStackScreenComponent = ({ navigation }) => {

  return (
    <View>
        <Text>
            Avisos Screen
        </Text>
    </View>
  );

};

export default Avisos;
