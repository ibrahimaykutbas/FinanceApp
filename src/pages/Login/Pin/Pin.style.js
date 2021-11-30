import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005CEE',
    alignItems: 'center',
    paddingTop: 20,
  },
  logoText: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  header: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: 80,
    marginBottom: 42,
  },
  circles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 55,
    marginBottom: 42,
  },
  circle: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '400',
    marginBottom: 16,
  },
  reset: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
