import React from 'react';
import {View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TopBar from '../../components/TopBar/TopBar';
import AccountCard from '../../components/AccountCard/AccountCard';

import CardDetails from '../../components/CardDetails/CardDetails';
import Transactions from '../../components/Transactions/Transactions';

import styles from './CardCenter.style';

const Tab = createMaterialTopTabNavigator();

const CardCenter = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TopBar title="Card Center" page="cardCenter" onPress={() => goBack()} />
      <AccountCard />
      <View style={styles.line} />
      <Tab.Navigator>
        <Tab.Screen
          name="CardDetail"
          options={{tabBarLabel: 'Card Detail'}}
          component={CardDetails}
        />
        <Tab.Screen
          name="Transactions"
          options={{tabBarLabel: 'Transactions'}}
          component={Transactions}
        />
      </Tab.Navigator>
    </View>
  );
};

export default CardCenter;
