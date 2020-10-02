import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Landing: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing</Text>
    </View>
  );
}

export default Landing;