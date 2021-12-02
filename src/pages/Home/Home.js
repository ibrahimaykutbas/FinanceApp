import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from '../../components/Home/Header/Header';
import TitleBar from '../../components/Home/TitleBar/TitleBar';
import CardCenter from '../../components/Home/CardCenter/CardCenter';
import Moneytory from '../../components/Home/Moneytory/Moneytory';
import InOut from '../../components/Home/InOut/InOut';

import styles from './Home.style';

const Home = ({navigation}) => {
  const goCardCenter = () => {
    navigation.navigate('CardCenterScreen');
  };

  const goInOut = () => {
    navigation.navigate('InOutScreen');
  };

  const goProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const goTransaction = () => {
    navigation.navigate('TransactionScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        goProfile={() => goProfile()}
        goTransaction={() => goTransaction()}
      />
      <TitleBar title="Card Center" onPress={() => goCardCenter()} />
      <CardCenter />
      <TitleBar title="Moneytory" />
      <Moneytory />
      <TitleBar title="In & Out" onPress={() => goInOut()} />
      <InOut />
    </ScrollView>
  );
};

export default Home;
