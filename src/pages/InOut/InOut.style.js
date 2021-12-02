import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
    paddingBottom: 32,
  },
  title: {
    fontSize: 14,
    color: '#717E95',
    fontWeight: '400',
  },
  balance: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  innerContainer: {
    marginHorizontal: 20,
  },
  date: {
    fontSize: 16,
    color: '#717E95',
    fontWeight: '400',
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#EEF2F8',
    marginVertical: 14,
  },
});
