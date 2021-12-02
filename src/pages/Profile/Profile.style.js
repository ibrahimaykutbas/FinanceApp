import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 25,
  },
  name: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    color: '#717E95',
    fontWeight: '400',
  },
  line: {
    height: 1,
    backgroundColor: '#EEF2F8',
    marginVertical: 20,
  },
  innerContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 14,
    color: '#94A0B4',
    fontWeight: '400',
  },
  informationTitle: {
    fontSize: 16,
    color: '#5B667A',
    fontWeight: '400',
  },
  informationData: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
});
