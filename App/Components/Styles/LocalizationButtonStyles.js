import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  localizationButton: {
    zIndex: 1,
    position: 'absolute',
    bottom: 2 * Metrics.doubleBaseMargin + 50,
    right: Metrics.doubleBaseMargin,
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    borderRadius: Metrics.icons.xl / 2,
    backgroundColor: Colors.snow,
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
