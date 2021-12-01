import React from 'react';
import {View, Text} from 'react-native';

import styles from './Moneytory.style';

const Moneytory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>Expenses</Text>
      <Text style={styles.date}>01 Mar 2021 - 16 Mar 2021</Text>
      <Text style={styles.money}>IDR 540,000</Text>
      <View style={styles.line} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={styles.orange}>
          <Text style={styles.text}>78% Entertainment</Text>
        </View>
        <View style={styles.blue}>
          <Text style={styles.text}>16% Top up</Text>
        </View>
        <View style={styles.gray}>
          <Text style={styles.text}>6% Food</Text>
        </View>
      </View>
    </View>
  );
};

export default Moneytory;
