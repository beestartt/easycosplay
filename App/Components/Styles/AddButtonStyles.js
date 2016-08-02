import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  addButton: {
    zIndex: 1,
    position: 'absolute',
    bottom: Metrics.doubleBaseMargin,
    right: Metrics.doubleBaseMargin,
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    borderRadius: Metrics.icons.xl / 2,
    backgroundColor: Colors.themeDark,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: Metrics.elevation // only for android shadow
  }
})
