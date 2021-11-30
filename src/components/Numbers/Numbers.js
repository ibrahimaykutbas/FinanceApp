import React from 'react';
import {View, Text} from 'react-native';

import Finger from '../../icons/finger.svg';
import Back from '../../icons/back.svg';

import styles from './Numbers.style';

const Numbers = ({theme = 'primary', onPress}) => {
  return (
    <View style={styles[theme].container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles[theme].number}>1</Text>
        <Text style={styles[theme].number}>2</Text>
        <Text style={styles[theme].number}>3</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles[theme].number}>4</Text>
        <Text style={styles[theme].number}>5</Text>
        <Text style={styles[theme].number}>6</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles[theme].number}>7</Text>
        <Text style={styles[theme].number}>8</Text>
        <Text style={styles[theme].number}>9</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Finger />
        <Text style={styles[theme].number}>0</Text>
        <Back onPress={onPress ? onPress : null} />
      </View>
    </View>
  );
};

export default Numbers;
