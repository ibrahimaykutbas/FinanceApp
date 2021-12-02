import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  card: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#717E95',
    fontWeight: '400',
  },
  detail: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    marginTop: 8,
  },
  showCVV: {
    fontSize: 14,
    color: '#005CEE',
    fontWeight: '500',
    marginLeft: 8,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#EEF2F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginLeft: 20,
  },
  optionsText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    marginLeft: 12,
  },
  line: {
    height: 1,
    backgroundColor: '#EEF2F8',
  },
});
