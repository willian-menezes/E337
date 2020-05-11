import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {
  NavigationStackScreenProps,
  NavigationStackScreenComponent,
} from 'react-navigation-stack';

const Oracoes: NavigationStackScreenComponent = ({ navigation }) => {

  return (
    <View>
        <Text>
            Oracoes Screen
        </Text>
    </View>
  );

};

export default Oracoes;
