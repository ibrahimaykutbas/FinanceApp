import React from 'react';
import {View, Text} from 'react-native';

import Activity from '../Activity/Activity';

import styles from './InOut.style';

const InOut = () => {
  return (
    <View style={styles.container}>
      <Activity
        activity="Settlement"
        date="12 Mar 2021"
        fee="32,123"
        type="in"
      />
      <View style={styles.line} />
      <Activity activity="Google Play" date="10 Mar 2021" fee="80,000" />
      <View style={styles.line} />
      <Activity
        activity="Nohan Putra"
        date="09 Mar 2021"
        fee="150,000"
        type="in"
      />
    </View>
  );
};

export default InOut;
