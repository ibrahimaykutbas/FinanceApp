import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 1 - 40,
    height: 207,
    backgroundColor: '#000000',
    borderRadius: 12,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingLeft: 24,
    paddingRight: 17,
    paddingBottom: 24,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '400',
  },
});
