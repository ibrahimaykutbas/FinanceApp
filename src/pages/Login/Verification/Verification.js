import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Back from '../../../icons/back.svg';
import Help from '../../../icons/help.svg';

import styles from './Verification.style';

const Verification = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Back onPress={() => goBack()} />
        <Help />
      </View>
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
      <View style={styles.numberContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.number}>1</Text>
          <Text style={styles.number}>2</Text>
          <Text style={styles.number}>3</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.number}>4</Text>
          <Text style={styles.number}>5</Text>
          <Text style={styles.number}>6</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.number}>7</Text>
          <Text style={styles.number}>8</Text>
          <Text style={styles.number}>9</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text style={styles.number}>*</Text>
          <Text style={styles.number}>0</Text>
          <Back />
        </View>
      </View>
    </View>
  );
};

export default Verification;
