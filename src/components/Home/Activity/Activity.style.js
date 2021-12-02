import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#EEF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activity: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  date: {
    fontSize: 14,
    color: '#94A0B4',
    fontWeight: '400',
  },
  fee: {
    fontSize: 16,
    color: '#DD1444',
    fontWeight: '500',
  },
  inFee: {
    fontSize: 16,
    color: '#19B832',
    fontWeight: '500',
  },
});
