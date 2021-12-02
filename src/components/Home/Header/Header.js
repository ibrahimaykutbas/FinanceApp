import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Notification from '../../../icons/notification.svg';
import Profile from '../../../icons/profile.svg';
import Send from '../../../icons/send.svg';
import Request from '../../../icons/request.svg';
import InOut from '../../../icons/inOut.svg';
import QR from '../../../icons/QR.svg';

import styles from './Header.style';

const Header = ({goProfile, goTransaction}) => {
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
          <TouchableOpacity style={styles.image} onPress={goProfile}>
            <Profile />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={goTransaction}>
          <View style={styles.buttonContainer}>
            <Send />
          </View>
          <Text>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <Request />
          </View>
          <Text>Request</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <InOut />
          </View>
          <Text>In & Out</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <View style={styles.buttonContainer}>
            <QR />
          </View>
          <Text>QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
