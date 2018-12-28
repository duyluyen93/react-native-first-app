import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

const rong = Dimensions.get("window").width

export default class SPmoi_Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Image source={{ uri: this.props.anh }}
          style={styles.imageStyle} />
        <Text style={styles.nameStyle}>{this.props.ten}</Text>
        <Text style={styles.costStyle}>{this.props.gia} đ</Text>
      </View>
    )
  }
}

const details = {
  ten: PropTypes.string,
  gia: PropTypes.string,
  anh: PropTypes.string
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 23,
    fontFamily: "Montserrat-Regular",
    color: "#E7E7E7",
    textAlign: "center",
  },
  costStyle: {
    fontSize: 22,
    fontFamily: "Montserrat-SemiBold",
    color: "#D74632"
  },
  imageStyle: {
    borderRadius: 20,
    width: 150,
    height: 150
  },
  item: {
    backgroundColor: "#1C2437",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 7,
    paddingBottom: 7,
    margin: 5,
    width: (rong - 30) / 2,
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: "#D74632"
  }
})