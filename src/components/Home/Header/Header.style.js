import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#005CEE',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
  money: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
    opacity: 0.6,
  },
  image: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    marginLeft: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  buttonContainer: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: '#2F75FD',
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
