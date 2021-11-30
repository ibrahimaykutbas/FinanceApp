import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 80,
  },
  number: {
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 50,
  },
});

export default {
  primary: StyleSheet.create({
    container: {
      ...baseStyle.container,
    },
    number: {
      ...baseStyle.number,
      color: '#000000',
    },
  }),

  secondary: StyleSheet.create({
    container: {
      ...baseStyle.container,
    },
    number: {
      ...baseStyle.number,
      color: '#FFFFFF',
    },
  }),
};
