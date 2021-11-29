import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 22,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {},
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#293345',
    fontWeight: '500',
    marginTop: 25,
    marginBottom: 11,
  },
  content: {
    fontSize: 16,
    color: '#717E95',
    fontWeight: '400',
    marginHorizontal: 37,
    marginBottom: 72,
    textAlign: 'center',
  },
  agreement: {
    fontSize: 12,
    color: '#717E95',
    fontWeight: '400',
    marginHorizontal: 31,
    marginBottom: 32,
    textAlign: 'center',
  },
  link: {
    fontSize: 12,
    color: '#005CEE',
    fontWeight: '400',
    marginHorizontal: 31,
    marginBottom: 32,
    textAlign: 'center',
  },
});
