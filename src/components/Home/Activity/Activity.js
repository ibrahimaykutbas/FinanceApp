import React from 'react';
import {View, Text} from 'react-native';

import Card from '../../../icons/card.svg';

import styles from './Activity.style';

const Activity = ({activity, date, fee, type}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.iconContainer}>
          <Card />
        </View>
        <View style={{marginLeft: 8}}>
          <Text style={styles.activity}>{activity}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <Text style={type ? styles.inFee : styles.fee}>
        {type && '+ '}
        {fee}
      </Text>
    </View>
  );
};

export default Activity;
