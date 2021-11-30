import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Back from '../../../icons/back.svg';
import Help from '../../../icons/help.svg';
import Finger from '../../../icons/finger.svg';

import TopBar from '../../../components/TopBar/TopBar';
import Numbers from '../../../components/Numbers/Numbers';

import styles from './Verification.style';

const Verification = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const goNext = () => {
    navigation.navigate('InformationScreen');
  };

  return (
    <View style={styles.container}>
      <TopBar onPress={() => goBack()} />
      <View style={styles.header}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.content}>
          Verify the handphone number by entering the verification code
        </Text>
      </View>
      <View style={styles.code}>
        <Text style={styles.codeText}>5</Text>
        <Text style={styles.codeText}>2</Text>
        <Text style={styles.codeText}>3</Text>
        <Text style={styles.codeText}>3</Text>
        <Text style={styles.codeText}>6</Text>
        <Text style={styles.codeText}>6</Text>
      </View>
      <Text style={styles.content}>Didn’t recive verification code?</Text>
      <TouchableOpacity>
        <Text style={styles.resendCode}>Resend Code</Text>
      </TouchableOpacity>
      <Numbers onPress={() => goNext()} />
    </View>
  );
};

export default Verification;
