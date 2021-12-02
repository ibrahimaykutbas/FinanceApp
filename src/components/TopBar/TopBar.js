import React from 'react';
import {View, Text} from 'react-native';

import Back from '../../icons/back.svg';
import Help from '../../icons/help.svg';
import Menu from '../../icons/verticalMenu.svg';
import Filter from '../../icons/filter.svg';
import Edit from '../../icons/edit.svg';

import styles from './TopBar.style';

const TopBar = ({title, onPress, page = 'login'}) => {
  return (
    <View style={styles.container}>
      <Back onPress={onPress} />
      {title && <Text style={styles.title}>{title}</Text>}
      {/* {page === 'cardCenter' ? <Menu /> : <Help />} */}
      {page === 'login' && <Help />}
      {page === 'cardCenter' && <Menu />}
      {page === 'inOut' && <Filter />}
      {page === 'Profile' && <Edit />}
    </View>
  );
};

export default TopBar;
