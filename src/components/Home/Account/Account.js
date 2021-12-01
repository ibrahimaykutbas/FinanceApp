import React from 'react';
import {View, Text} from 'react-native';

import Card from '../../../icons/card.svg';

import styles from './Account.style';

const Account = ({type, number, balance}) => {
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
          <Text style={styles.cardType}>{type}</Text>
          <Text style={styles.cardNumber}>{number}</Text>
        </View>
      </View>
      <Text style={styles.balance}>{balance}</Text>
    </View>
  );
};

export default Account;
