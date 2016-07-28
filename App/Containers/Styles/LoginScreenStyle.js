import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 26,
    // Image's source contains explicit size, but we want
    // it to prefer flex: 1
    width: undefined,
    height: undefined
  },
  loginButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // shadowColor: '#000000',
    // shadowOpacity: 0.4,
    // shadowRadius: 6,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // }
  },
  facebookButton: {
    width: 0.8 * Metrics.screenWidth,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    color: Colors.silver,
    flex: 1
  },
  topLogo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    padding: 1
  },
  facebookButtonText: {
    fontSize: Metrics.screenWidth / 20,
    color: Colors.silver,
    fontWeight: 'bold',
    marginLeft: 20
  }
})
