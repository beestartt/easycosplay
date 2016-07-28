import React from 'react'
import { connect } from 'react-redux'
import {
View,
StatusBar,
Image
} from 'react-native'
import MapView from 'react-native-maps'
import { calculateRegion } from '../Lib/MapHelpers'
import MapCallout from '../Components/MapCallout'
import Styles from './Styles/MapviewExampleStyle'
import {Images} from '../Themes'
import NavBarBackground from '../Components/NavBarBackground'
import SearchField from '../Components/SearchField'

class MapScreen extends React.Component {
  constructor(props) {
    super(props)
  }

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