import React from 'react';
import {View, Text} from 'react-native';

import Card from '../Account/Account';

import styles from './CardCenter.style';

const CardCenter = () => {
  return (
    <View style={styles.container}>
      <Card type="Virtual Card" number="**** 5678" balance="20,400,000" />
      <View style={styles.line} />
      <Card type="Basic Card" number="**** 4556" balance="4,020,000" />
    </View>
  );
};

export default CardCenter;
