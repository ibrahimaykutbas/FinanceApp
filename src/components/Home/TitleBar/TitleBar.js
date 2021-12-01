import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Go from '../../../icons/go.svg';

import styles from './TitleBar.style';

const TitleBar = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Go />
    </TouchableOpacity>
  );
};

export default TitleBar;
