import React, {PropTypes} from 'react'
import {
  Text,
  Image,
  Animated,
  View
 // Alert
} from 'react-native'
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import Actions from '../Actions/Creators'
import {Images, Metrics, Colors} from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk'

// I18n
import I18n from '../I18n/I18n.js'

import * as firebase from 'firebase'

class LoginScreen extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      mapScreen: PropTypes.func,
      anim: new Animated.Value(0),
      username: 'reactnative@infinite.red',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: 0.8 * Metrics.screenWidth },
      description: { fontSize: Metrics.screenWidth / 20 }
    }
    this.isAttempting = false
  }

  loginFacebook () {
    const auth = firebase.auth()
    const provider = firebase.auth.FacebookAuthProvider
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
      .then((result) => {
        if (result.isCancelled) {
          window.alert('Login cancelled')
        } else {
          AccessToken.getCurrentAccessToken()
            .then(accessTokenData => {
              const credential = provider.credential(accessTokenData.accessToken)
              return auth.signInWithCredential(credential)
            })
            .then(credData => {
              console.log(credData)
              this.props.mapScreen()
            })
            .catch(err => {
              window.alert('Login cancelled')
              console.log(err)
            })
        }
      },
      (error) => {
        window.alert(`Login fail with error: ${error}`)
      })
  }

  render () {
    return (
      <Image
        style={[Styles.container]}
        source={Images.background_login} >
        <Image
          style={[Styles.topLogo, this.state.topLogo]}
          source={Images.logo_white} />
        <Text style={[Styles.description, this.state.description]}>
          {I18n.t('login_description')}
        </Text>
        <View style={[Styles.loginButtonWrapper]} >
          <Icon.Button name='facebook' size={30} style={[Styles.facebookButton]} backgroundColor={Colors.facebook} onPress={() => this.loginFacebook()}>
            <Text style={[Styles.facebookButtonText]}>{I18n.t('loginWithFacebook')}</Text>
          </Icon.Button>
        </View>
      </Image>
    )
  }

  fadeIn (delay, from = 0) {
    const {anim} = this.state
    return {
      opacity: anim.interpolate({
        inputRange: [delay, Math.min(delay + 500, 3000)],
        outputRange: [0, 1],
        extrapolate: 'clamp'
      }),
      transform: [{
        translateY: anim.interpolate({
          inputRange: [delay, Math.min(delay + 500, 3000)],
          outputRange: [from, 0],
          extrapolate: 'clamp'
        })
      }]
    }
  }

}

const mapStateToProps = (state) => {
  return {
    attempting: state.login.attempting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mapScreen: NavigationActions.mapScreen,
    close: NavigationActions.pop,
    attemptLogin: (username, password) => dispatch(Actions.attemptLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
