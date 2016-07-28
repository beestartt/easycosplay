import React from 'react'
import {
  Text,
  TextInput,
  View
} from 'react-native'
import Styles from './Styles/SearchFieldStyles.js'
import I18n from '../I18n/I18n.js'

export default class SearchField extends React.Component {
  render () {
    return (
      <View style={Styles.search_field}>
        <TextInput
          ref='search_field'
          style={Styles.textInput}
          keyboardType='default'
          returnKeyType='next'
          underlineColorAndroid='transparent'
          placeholder={I18n.t('search_field')} />
      </View>
    )
  }
}
