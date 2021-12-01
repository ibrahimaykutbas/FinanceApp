import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#EEF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardType: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  cardNumber: {
    fontSize: 16,
    color: '#94A0B4',
    fontWeight: '400',
  },
  balance: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
});
