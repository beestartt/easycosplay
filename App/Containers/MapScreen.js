import React from 'react'
import { connect } from 'react-redux'
import {
View
} from 'react-native'
import MapView from 'react-native-maps'
import Styles from './Styles/MapviewExampleStyle'
import NavBarBackground from '../Components/NavBarBackground'
import SearchField from '../Components/SearchField'
import AddButton from '../Components/AddButton'
import LocalizationButton from '../Components/LocalizationButton'

class MapScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchField: ''
    }
  }

  render () {
    return (
      <View style={Styles.map}>
        <NavBarBackground />
        <View style={Styles.mainContainer}>
          <SearchField
            searchValue={this.state.searchField}
            onChangeText={(text) => this.setState({searchField: text})}
            />
          <AddButton />
          <LocalizationButton />
          <MapView
            style={Styles.map}
            toolbarEnabled
            followsUserLocation
            showsUserLocation />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(MapScreen)
