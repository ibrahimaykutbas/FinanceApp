import React from 'react';
import {View, Text} from 'react-native';

import Back from '../../icons/back.svg';
import Help from '../../icons/help.svg';

import styles from './TopBar.style';

const TopBar = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Back onPress={onPress} />
      <Help />
    </View>
  );
};

export default TopBar;
