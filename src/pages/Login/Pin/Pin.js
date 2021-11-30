import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Logo from '../../../icons/logo.svg';

import Numbers from '../../../components/Numbers/Numbers';

import styles from './Pin.style';

const Pin = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Logo />
        <Text style={styles.logoText}>Stream</Text>
      </View>
      <Text style={styles.header}>Enter your PIN</Text>
      <View style={styles.circles}>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
        <View style={styles.circle}></View>
      </View>
      <Text style={styles.text}>Forgot you PIN?</Text>
      <TouchableOpacity>
        <Text style={styles.reset}>RESET PIN</Text>
      </TouchableOpacity>
      <Numbers theme="secondary" />
    </View>
  );
};

export default Pin;
