import React, { Component } from 'react';
import { View, TouchableOpacity, Alert, FlatList, StyleSheet, Dimensions, Text, Image, ActivityIndicator } from 'react-native';
import NewHeader from '../Others/NewHeader'
import { withNavigation } from 'react-navigation'
import SPmoi_Item from './SPmoi_Item'
import { connect } from 'react-redux'
import { FirebaseData } from '../../Connect_Redux/actions'
import { firebaseApp } from '../Authentication/FirebaseConfig'

class SPmoi extends Component {
  componentDidMount() {
    this.props.dispatch(FirebaseData())
  }

  changeView() {
    const { list, loading, error } = this.props
    if (loading) return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <ActivityIndicator size={80} color="#ED2156" />
          <Text style={styles.notification}>Đang tải...</Text>
        </View>
      </View>
    )
    if (error) return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../images/error_icon.png")}
          style={{ height: 80, width: 80, marginBottom: 20 }} />
        <Text style={styles.notification}>Lỗi kết nối!</Text>
      </View>
    )
    return (
      <FlatList data={list}
        contentContainerStyle={styles.flatList}
        numColumns={2}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={() => this.kiemtra(index)}>
            <SPmoi_Item
              ten={item.name}
              gia={item.cost}
              anh={item.image} />
          </TouchableOpacity>
        } />
    )
  }

  kiemtra(x) {
    const { list, navigation } = this.props
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Details', {
          info_ten: list[x].name,
          info_gia: list[x].cost,
          info_anh: list[x].image
        })
      }
      else {
        Alert.alert(
          'Không thể mua hàng!',
          'Bạn cần đăng nhập để thực hiện tính năng này!',
          [
            { text: 'Đồng ý', onPress: () => navigation.navigate('SignIn') },
            { text: 'Bỏ qua', onPress: () => { } }
          ],
          { cancelable: false }
        )
      }
    })
  }
  render() {
    return (
      <View style={{ backgroundColor: "#16171C", flex: 1 }}>
        <NewHeader
          newtitle="Sản phẩm mới"
          leftIcon="menu"
          openmenu={() => this.props.navigation.openDrawer()} />
        {this.changeView()}
      </View>
    )
  }
}

const { height, width } = Dimensions.get('window')
const imageWidth = width * 0.3
const imageHeight = imageWidth
const styles = StyleSheet.create({
  khung: {
    height: height * 0.2,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  anh: {
    height: imageHeight,
    width: imageWidth,
  },
  ra_giua: {
    flexDirection: 'column',
    justifyContent: 'center',

  },
  notification: {
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
    color: "white"
  },
  flatList: {
    padding: 5,
  }
})

function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(withNavigation(SPmoi))