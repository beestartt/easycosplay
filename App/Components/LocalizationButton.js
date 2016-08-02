import React from 'react'
import {
TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from './Styles/LocalizationButtonStyles'

export default class LocalizationButton extends React.Component {
  addPlace () {
    window.alert('localization')
  }
  render () {
    return (
      <TouchableOpacity style={[Styles.localizationButton]} onPress={this.addPlace} activeOpacity={0.7} >
        <Icon name='my-location' size={25} color='grey' />
      </TouchableOpacity>
    )
  }
}
