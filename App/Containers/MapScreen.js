import React from 'react'
import { connect } from 'react-redux'
import {
View
} from 'react-native'
import MapView from 'react-native-maps'
import Styles from './Styles/MapviewExampleStyle'
import NavBarBackground from '../Components/NavBarBackground'
import SearchField from '../Components/SearchField'

class MapScreen extends React.Component {

  render () {
    return (
      <View style={Styles.map}>
        <NavBarBackground />
        <View style={Styles.mainContainer}>
          <MapView style={Styles.map} >
            <SearchField />
          </MapView>
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
