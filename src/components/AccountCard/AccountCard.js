import React from 'react';
import {View, Text} from 'react-native';

import Chip from '../../icons/card/chip.svg';
import Logo from '../../icons/card/logo.svg';
import Bla from '../../icons/card/bla.svg';
import Visa from '../../icons/card/visa.svg';

import styles from './AccountCard.style';

const AccountCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Chip />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Logo />
          <Text style={styles.logo}>Stream</Text>
        </View>
      </View>
      <View style={styles.cardNumber}>
        <Bla style={{marginRight: 12}} />
        <Bla style={{marginRight: 12}} />
        <Bla style={{marginRight: 12}} />
        <Text>5678</Text>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={styles.text}>VALID THRU</Text>
          <Text style={styles.text}>04/24</Text>
        </View>
        <Visa />
      </View>
    </View>
  );
};

export default AccountCard;
