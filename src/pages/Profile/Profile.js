import React from 'react';
import {View, Text} from 'react-native';

import TopBar from '../../components/TopBar/TopBar';

import ProfileImage from '../../icons/profile.svg';

import styles from './Profile.style';

const Profile = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopBar title="Profile" page="Profile" onPress={() => goBack()} />
      <View style={styles.profileContainer}>
        <ProfileImage width="88" height="88" />
        <View style={{marginLeft: 16}}>
          <Text style={styles.name}>Narayana Kirana</Text>
          <Text style={styles.username}>@naraya.kirana</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Text style={styles.categoryName}>Personel Information</Text>

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.informationTitle}>Account Number</Text>
          <Text style={styles.informationData}>622214560155</Text>
        </View>

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.informationTitle}>Phone Number</Text>
          <Text style={styles.informationData}>+6281890222654</Text>
        </View>

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.informationTitle}>E-mail</Text>
          <Text style={styles.informationData}>kirana@gmail.com</Text>
        </View>

        <View style={styles.line} />
        <Text style={styles.categoryName}>Device Information</Text>

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.informationTitle}>Primary Device</Text>
          <Text style={styles.informationData}>Samsung A50</Text>
        </View>

        <View style={styles.line} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={styles.informationTitle}>App Version</Text>
          <Text style={styles.informationData}>2.25.0(152)</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
