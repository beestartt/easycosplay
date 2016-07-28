import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  search_field: {
    marginTop: Metrics.smallMargin,
    height: 50,
    backgroundColor: Colors.snow,
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 6,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  textInput: {
    flex: 1,
    height: 50,
    color: Colors.coal,
    padding: Metrics.baseMargin
  }
})
