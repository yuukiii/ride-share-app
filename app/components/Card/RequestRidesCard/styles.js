import {Platform, StyleSheet, Dimensions} from 'react-native';
import variables from '../../../utils/variables';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  cardContainer: {
    width: width - variables.sizes.padding * 2,
    marginHorizontal: variables.sizes.margin,
    marginVertical: 20,
    marginBottom: variables.sizes.base,
    paddingHorizontal: variables.sizes.padding,
    paddingVertical: variables.sizes.padding * 0.66,
    borderRadius: variables.sizes.border,
    backgroundColor: variables.cardDefaultBg,
    shadowColor: '#000',
    shadowOpacity: 0.11,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 13,
    elevation: Platform.OS === 'ios' ? 0 : 5,
  },
  name: {
    fontSize: 16,
    color: '#475c67',
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  location: {
    color: '#BDBFC7',
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
});
