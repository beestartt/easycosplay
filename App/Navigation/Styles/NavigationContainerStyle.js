import {Colors, Metrics} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.transparent,
    height: Metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: Colors.transparent,
    fontWeight: 'bold'
  },
  leftButton: {
    tintColor: Colors.snow,
    marginTop: 94 - Metrics.navBarHeight
  },
  rightButton: {
    color: Colors.snow,
    marginTop: 94 - Metrics.navBarHeight
  }
}
