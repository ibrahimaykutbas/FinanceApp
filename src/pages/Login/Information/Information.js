import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import TopBar from '../../../components/TopBar/TopBar';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import styles from './Information.style';

const Information = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  const goNext = () => {
    navigation.navigate('PinScreen');
  };

  return (
    <View style={styles.container}>
      <TopBar onPress={() => goBack()} />
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Personal Information</Text>
            <Text style={styles.content}>
              Personal information is used for registration and validation
              Stream
            </Text>
          </View>
          {/* Form */}
          <View>
            <Input label="Full Name" placeholder="Your name" />
            <Input label="Place of Birth" placeholder="City" />
            <Input label="Place of Birth" placeholder="City" />
            <Input label="Date of Birth" placeholder="25 / 07 / 1997" />
            <Input label="Gender" placeholder="Sex" />
          </View>
        </View>
        <Button title="Continue" onPress={() => goNext()} />
      </ScrollView>
    </View>
  );
};

export default Information;
