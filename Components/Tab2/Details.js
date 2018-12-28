import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image } from 'react-native'
import { Container, Header, Left, Button, Body, Title } from 'native-base'
import NewHeader from '../Others/NewHeader'
import SPmoi_Item from './SPmoi_Item';

const { height, width } = Dimensions.get('window')

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ten: undefined, gia: undefined, anh: undefined
    }
  }

  componentDidMount() {
    const { navigation } = this.props
    const info_ten = navigation.getParam("info_ten", "default")
    const info_gia = navigation.getParam("info_gia", "default")
    const info_anh = navigation.getParam("info_anh", "default")
    this.setState({
      ten: JSON.stringify(info_ten).replace(/"/g, ""),
      gia: JSON.stringify(info_gia).replace(/"/g, ""),
      anh: JSON.stringify(info_anh).replace(/"/g, "")
    })
  }

  render() {
    const { ten, gia, anh } = this.state
    const { navigation } = this.props
    return (
      <Container>
        <NewHeader newtitle="Chi tiết sản phẩm"
          leftIcon="md-arrow-back"
          openmenu={() => navigation.goBack()} />
        <View style={styles.item}>
          <Image source={{ uri: anh }}
            style={styles.imageStyle} />
          <View style={{ flex: 1.5, padding: 8 }}>
            <Text style={styles.nameStyle}>{ten}</Text>
            <Text style={styles.costStyle}>{gia} đ</Text>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 23,
    fontFamily: "Montserrat-Regular",
    color: "#E7E7E7",
    flexWrap: 'wrap'
  },
  costStyle: {
    fontSize: 22,
    fontFamily: "Montserrat-SemiBold",
    color: "#D74632",
    flexWrap: "wrap"
  },
  imageStyle: {
    borderRadius: 20,
    width: 150,
    height: 150,
    flex: 1
  },
  item: {
    backgroundColor: "#1C2437",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1.4,
    borderColor: "#D74632"
  }
})