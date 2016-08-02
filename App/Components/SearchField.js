import React from 'react'
import {
  TextInput,
  View
} from 'react-native'
import Styles from './Styles/SearchFieldStyles.js'
import I18n from '../I18n/I18n.js'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SearchField extends React.Component {

  static propTypes = {
    searchValue: React.PropTypes.string,
    onChangeText: React.PropTypes.func.isRequired
  }

  clearText = () => {
    this.props.onChangeText('')
  }

  renderIcon () {
    if (this.props.searchValue === '') {
      return (<Icon name='search' size={20} color='grey' style={Styles.icon} />)
    } else {
      return (<Icon name='arrow-back' size={20} color='grey' style={Styles.icon} onPress={this.clearText} />)
    }
  }

  render () {
    const { onChangeText, searchValue } = this.props
    return (
      <View style={Styles.search_field}>
        {this.renderIcon()}
        <TextInput
          onChangeText={onChangeText}
          value={searchValue}
          ref='search_field'
          style={Styles.textInput}
          returnKeyType='next'
          underlineColorAndroid='transparent'
          keyboardType='web-search'
          placeholder={I18n.t('search_field')} />
      </View>
    )
  }
}
