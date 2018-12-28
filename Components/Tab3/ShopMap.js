import React, { Component } from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import { Button, Icon, Badge } from 'native-base'
import NewHeader from '../Others/NewHeader'
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { list } from './ShopList'
import geolib, { latitude, longitude } from 'geolib'

var cao = Dimensions.get("window").height;
var rong = Dimensions.get("window").width;
var api_key = "AIzaSyBUwv3D3LVAqVisgCa-f6RazQeKO7QHjnM";

export default class ShopMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nearest: 0,
      show: false,
      distance: 0,
      lat_current: 21.0055546,
      lng_current: 105.8412741
    }
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(
  //     position => {
  //       this.setState({
  //         lat_current: position.coords.latitude,
  //         lng_current: position.coords.longitude
  //       })
  //     }
  //   )
  // }

  viewAllShops() {
    const shopList = [];
    for (let i = 0; i < list.length; i++) {
      shopList.push(
        <Marker key={i}
          coordinate={list[i].vitri}
          title={list[i].ten}
          description={list[i].diachi} />
      )
    }
    return shopList;
  }

  nearestShop() {
    var positionList = []
    for (let i = 0; i < list.length; i++) {
      positionList.push({
        latitude: list[i].vitri.latitude,
        longitude: list[i].vitri.longitude
      })
    }
    var t = geolib.findNearest(
      { latitude: this.state.lat_current, longitude: this.state.lng_current },
      positionList
    )
    console.log(t)
    this.setState({
      nearest: t.key,
      show: true,
      distance: t.distance
    })
    // Kiểu trả về của t là 1 object {distance: X, key: 'y'}
  }

  render() {
    return (
      <View>
        <NewHeader newtitle="Bản đồ" />
        <View>
          {/* hiện bản đồ */}
          <MapView style={styles.map}
            region={{
              latitude: 21.0055546,
              longitude: 105.8412741,
              latitudeDelta: 0.15,
              longitudeDelta: 0.15,
            }}>
            {/* Vị trí hiện tại */}
            <Marker
              coordinate={
                { latitude: this.state.lat_current, longitude: this.state.lng_current }
              }
              pinColor="yellow" />
            {/* Vị trí các shop */}
            {this.viewAllShops()}
            {this.state.show &&
              <MapViewDirections
                origin={{ latitude: this.state.lat_current, longitude: this.state.lng_current }}
                destination={list[this.state.nearest].vitri}
                apikey={api_key}
                strokeWidth={4}
                strokeColor="green" />
            }
            {/* Hiển thị đường đi: Enable "Directions API" trong acc google */}
          </MapView>
          <Button rounded iconRight
            style={styles.button}
            onPress={() => this.nearestShop()}>
            <Text style={styles.button_name}>  Shop gần nhất  </Text>
            <Icon name='arrow-forward' />
          </Button>
          {/* Mục đích để ban đầu thẻ Badge ẩn */}
          {this.state.show &&
            <Badge success style={styles.badge}>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textview}>Shop gần nhất: </Text>
                  <Text style={styles.resultview}>{list[this.state.nearest].diachi}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.textview}>Khoảng cách: </Text>
                  <Text style={styles.resultview}>{this.state.distance / 1000} km</Text>
                </View>
              </View>
            </Badge>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    width: rong,
    height: cao,
  },
  button: {
    backgroundColor: 'green',
    margin: 10,
    height: 30,
    position: 'absolute'
  },
  button_name: {
    color: "white",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  ketqua: {
    fontSize: 15,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  textview: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular'
  },
  resultview: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold'
  },
  badge: {
    position: 'absolute',
    bottom: cao / 4.5,
    height: 40,
    alignSelf: "center",
    backgroundColor: "#007ACC"
  }
})