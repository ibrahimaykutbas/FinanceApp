import React from 'react';
import {View, Text} from 'react-native';

import Profile from '../../icons/profile.svg';
import Plus from '../../icons/plus.svg';
import Dropdown from '../../icons/dropdown.svg';
import Category from '../../icons/category.svg';

import TopBar from '../../components/TopBar/TopBar';
import Numbers from '../../components/Numbers/Numbers';
import Button from '../../components/Button/Button';

import styles from './Transaction.style';

const Transaction = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TopBar title="Transaction" onPress={() => goBack()} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 25,
          }}>
          <Text style={styles.title}>Amount</Text>
          <Text style={styles.amount}>IDR 24,420,000</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.optionLine}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Profile width="44" height="44" />
            <Text style={styles.name}>Ayana Putri</Text>
          </View>
          <Plus style={styles.icon} />
        </View>

        <View style={styles.optionLine}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.iconContainer}>
              <Category />
            </View>
            <View>
              <Text style={styles.category}>Category</Text>
              <Text style={styles.name}>Food & Drink</Text>
            </View>
          </View>
          <Dropdown style={styles.icon} />
        </View>
      </View>
      <Numbers />
      <Button title="Send" />
    </View>
  );
};

export default Transaction;
