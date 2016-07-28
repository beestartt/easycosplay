import React from 'react'
import {
  Image
} from 'react-native'
import Styles from './Styles/NavBarBackgroundStyles'
import {Images} from '../Themes'

export default class NavBarBackground extends React.Component {
  render () {
    return (
      <Image
        style={Styles.title_bar}
        source={Images.title_bar} >
        <Image
          style={Styles.title_bar_logo}
          source={Images.logo_white} />
      </Image>
    )
  }
}
