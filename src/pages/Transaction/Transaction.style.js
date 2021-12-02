import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#F7F9FC',
  },
  title: {
    fontSize: 16,
    color: '#5B667A',
    fontWeight: '400',
  },
  amount: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '500',
  },
  innerContainer: {
    marginHorizontal: 20,
  },
  optionLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F8',
    paddingVertical: 16,
  },
  name: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
    marginLeft: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#EEF2F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: '#94A0B4',
    fontWeight: '400',
    marginLeft: 12,
  },
  icon: {
    marginRight: 17,
  },
  line: {
    height: 1,
    backgroundColor: '#EEF2F8',
    marginVertical: 16,
  },
});
