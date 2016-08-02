import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  search_field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 1,
    marginTop: Metrics.smallMargin,
    height: 50,
    backgroundColor: Colors.snow,
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: Metrics.elevation // only for android shadow
  },
  textInput: {
    flex: 1,
    height: 50,
    color: Colors.coal
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin
  }
})
