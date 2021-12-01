import React from 'react';
import {View, Text, Image} from 'react-native';

import Notification from '../../../icons/notification.svg';
import Send from '../../../icons/send.svg';
import Request from '../../../icons/request.svg';
import InOut from '../../../icons/inOut.svg';
import QR from '../../../icons/QR.svg';

import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.money}>IDR 24,420,000</Text>
          <Text style={styles.status}>Active Balance</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Notification />
          <Image style={styles.image} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <Send />
          </View>
          <Text>Send</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <Request />
          </View>
          <Text>Request</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <InOut />
          </View>
          <Text>In & Out</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <QR />
          </View>
          <Text>QR Code</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
