import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './Input.style';

const Input = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#BAC3D2"
        style={styles.input}
      />
    </View>
  );
};

export default Input;
