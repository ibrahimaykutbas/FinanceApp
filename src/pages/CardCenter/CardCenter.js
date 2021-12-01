import React from 'react';
import {View, Text} from 'react-native';

import TopBar from '../../components/TopBar/TopBar';

import styles from './CardCenter.style';

const CardCenter = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopBar title="Card Center" page="cardCenter" onPress={() => goBack()} />
    </View>
  );
};

export default CardCenter;
