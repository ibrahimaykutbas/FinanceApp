import React from 'react';
import {View, Text} from 'react-native';

import Back from '../../../icons/back.svg';
import Help from '../../../icons/help.svg';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import styles from './Register.style';

const Register = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const goNext = () => {
    navigation.navigate('VerificationScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Back onPress={() => goBack()} />
        <Help />
      </View>
      <View style={styles.innerContainer}>
        {/* Üst Kısım */}
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.content}>
              Choose your country code and enter your phone number
            </Text>
          </View>
          {/* Form */}
          <View>
            <Input label="E-mail" placeholder="sample@email.com" />
            <Input label="Phone Number" placeholder="85-XXXX-XXXX-X" />
          </View>
        </View>

        {/* Alt Kısım */}
        <View>
          <Text style={styles.agreement}>
            By submitting this application you confirm that you are authorized
            to share this information and agree with our
            <Text style={styles.link}> Term and Conditions</Text>
          </Text>
          <Button title="Send Verification Code" onPress={() => goNext()} />
        </View>
      </View>
    </View>
  );
};

export default Register;
