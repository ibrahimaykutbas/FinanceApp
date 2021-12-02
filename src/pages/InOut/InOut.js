import React from 'react';
import {View, Text} from 'react-native';

import TopBar from '../../components/TopBar/TopBar';
import Activity from '../../components/Home/Activity/Activity';

import styles from './InOut.style';

const InOut = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopBar title="In & Out" page="inOut" onPress={() => goBack()} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Active Balance</Text>
        <Text style={styles.balance}>IDR 24,420,000</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.date}>Mar 2021</Text>

        <Activity
          activity="Settlement"
          date="12 Mar 2021"
          fee="32,123"
          type="in"
        />

        <View style={styles.line} />
        <Activity
          activity="Google Play - Marb..."
          date="12 Mar 2021"
          fee="80,000"
        />

        <View style={styles.line} />
        <Activity
          activity="Nohan Putra"
          date="12 Mar 2021"
          fee="150,000"
          type="in"
        />

        <Text style={styles.date}>Feb 2021</Text>

        <Activity
          activity="Settlement"
          date="12 Feb 2021"
          fee="32,123"
          type="in"
        />

        <View style={styles.line} />
        <Activity
          activity="Google Play - Marb..."
          date="12 Feb 2021"
          fee="80,000"
        />

        <View style={styles.line} />
        <Activity
          activity="Nohan Putra"
          date="12 Feb 2021"
          fee="150,000"
          type="in"
        />

        <View style={styles.line} />
        <Activity
          activity="Aruni Putri"
          date="12 Feb 2021"
          fee="2.40,000"
          type="in"
        />

        <View style={styles.line} />
        <Activity
          activity="Nohan Putra"
          date="12 Feb 2021"
          fee="150,000"
          type="in"
        />
      </View>
    </View>
  );
};

export default InOut;
