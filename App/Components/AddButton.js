import React from 'react'
import {
TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from './Styles/AddButtonStyles'

export default class AddButton extends React.Component {
  addPlace () {
    window.alert('add')
  }
  render () {
    return (
      <TouchableOpacity style={[Styles.addButton]} onPress={this.addPlace} activeOpacity={0.7} >
        <Icon name='add' size={30} color='white' />
      </TouchableOpacity>
    )
  }
}
