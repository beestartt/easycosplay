import React, { PropTypes } from 'react'
import { View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import Actions from './Actions/Creators'
import DebugSettings from './Config/DebugSettings'
import NavigationRouter from './Navigation/NavigationRouter'
// import './Config/PushConfig'

// FIREBASE CONFIG
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAJVAYk9x5fpj69Nbqy_vBPHSg9p8pp7UY',
  authDomain: 'easycosplay-4aee5.firebaseapp.com',
  databaseURL: 'https://easycosplay-4aee5.firebaseio.com',
  storageBucket: 'easycosplay-4aee5.appspot.com'
}

firebase.initializeApp(firebaseConfig)

// Styles
import styles from './Containers/Styles/RootStyle'

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentWillMount () {
    const { dispatch } = this.props.store
    dispatch(Actions.startup())
  }

  renderApp () {
    console.disableYellowBox = !DebugSettings.yellowBox
    return (
      <Provider store={this.props.store}>
        <View style={styles.applicationView}>
          <StatusBar
            barStyle='light-content'
          />
          <NavigationRouter />
        </View>
      </Provider>
    )
  }

  render () {
    return this.renderApp()
  }
}
