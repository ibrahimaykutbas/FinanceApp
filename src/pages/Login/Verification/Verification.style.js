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
    marginBottom: 23,
    textAlign: 'center',
  },
  code: {
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 30,
    marginBottom: 19,
  },
  codeText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '400',
  },
  resendCode: {
    fontSize: 16,
    color: '#005CEE',
    fontWeight: '700',
    textAlign: 'center',
  },
  numberContainer: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 80,
  },
  number: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '400',
    marginBottom: 50,
  },
});
