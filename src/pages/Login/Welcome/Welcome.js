import React from 'react';
import {View, Text} from 'react-native';

import Logo from '../../../icons/logo.svg';

import Button from '../../../components/Button/Button';

import styles from './Welcome.style';

const Welcome = ({navigation}) => {
  const onRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Logo />
        <Text style={styles.title}>Stream</Text>
        <Text style={styles.content}>Start managing your Life Finance</Text>
      </View>
      <Button title="Continue" onPress={() => onRegister()} />
    </View>
  );
};

export default Welcome;
