import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Lock from '../../icons/lock.svg';
import Menu from '../../icons/verticalMenu.svg';
import ChangePIN from '../../icons/changePIN.svg';
import BlockCard from '../../icons/blockCard.svg';
import Card from '../../icons/card.svg';

import styles from './CardDetails.style';

const CardDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.line} />
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Active Balance</Text>
          <Text style={styles.detail}>IDR 24,420,000</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Lock />
          <Text style={styles.showCVV}>Show CVV</Text>
        </View>
      </View>

      <View style={styles.line} />
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Single Purchase Limit</Text>
          <Text style={styles.detail}>IDR 100,000,000</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Menu />
        </View>
      </View>

      <View style={styles.line} />
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>ATM Withdrawn Limit</Text>
          <Text style={styles.detail}>IDR 10,000,000</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Menu />
        </View>
      </View>

      <View style={styles.line} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <ChangePIN />
        </View>
        <Text style={styles.optionsText}>Change PIN</Text>
      </View>

      <View style={styles.line} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <BlockCard />
        </View>
        <Text style={styles.optionsText}>Block Card</Text>
      </View>

      <View style={styles.line} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.iconContainer}>
          <Card />
        </View>
        <Text style={styles.optionsText}>Change Limit</Text>
      </View>
    </ScrollView>
  );
};

export default CardDetails;
