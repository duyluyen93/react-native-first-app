import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

var rong = Dimensions.get("window").width;

export default class Phone extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.view_anh}>
          <Image source={{ uri: this.props.anh }} style={styles.anh} />
        </View>
        <View style={styles.view_text}>
          <Text style={styles.tenSP}>{this.props.ten}</Text>
          <Text style={styles.giaSP}>{this.props.gia}</Text>
          <Text style={styles.chitiet}>
            <Text>{this.props.manhinh}{'\n'}</Text>
            <Text>{this.props.hdh}{'\n'}</Text>
            <Text>{this.props.bonho}{'\n'}</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const propTypes = {
  ten: PropTypes.string,
  gia: PropTypes.string,
  manhinh: PropTypes.string,
  hdh: PropTypes.string,
  bonho: PropTypes.string,
  anh: PropTypes.any
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    marginBottom: 3,
    padding: 5,
    backgroundColor: "#1C2437",
    borderRadius: 15,
    borderColor: "#FF4235",
    borderWidth: 1.5
  },
  view_anh: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  anh: {
    height: rong / 3,
    width: rong / 3,
    borderRadius: 10
  },
  view_text: {
    marginLeft: 10,
    flex: 1.5
  },
  tenSP: {
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
    color: "#E7E7E7",
  },
  giaSP: {
    fontSize: 22,
    fontFamily: "Montserrat-Bold",
    color: "#D74632"
  },
  chitiet: {
    lineHeight: rong / 20,
    fontSize: 13,
    marginTop: rong / 40,
    flexWrap: 'wrap',
    fontFamily: "Montserrat-SemiBold",
    color: "#E7E7E7",
  }
})