import React, { Component } from 'react'
import { FlatList, View, Text, ActivityIndicator, Image, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import { connect } from 'react-redux'
import { GetData } from '../../Connect_Redux/actions'
import Phone_Item from './Phone_Item'

class CrawledData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingTooLong: false
    }
  }

  componentDidMount() {
    this.props.dispatch(GetData())
  }

  changeView() {
    const { loading, list, error } = this.props
    const { loadingTooLong } = this.state
    setTimeout(() => {
      this.setState({ loadingTooLong: true })
    }, 5000)
    if (loading && !loadingTooLong) return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
          <ActivityIndicator size={80} color="#ED2156" />
          <Text style={styles.notification}>Đang tải...</Text>
        </View>
      </View>
    )
    if (loading && loadingTooLong) return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../images/error_icon.png")}
          style={{ height: 80, width: 80, marginBottom: 20 }} />
        <Text style={styles.notification}>Cần reload app do localhost chậm, có thể mất vài lần</Text>
      </View>
    )
    if (error) return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../images/error_icon.png")}
          style={{ height: 80, width: 80, marginBottom: 20 }} />
        <Text style={styles.notification}>Server NodeJS chưa bật</Text>
      </View>
    )
    return (
      <View>
        <Text style={styles.note}>Dữ liệu crawl từ thegioididong.com</Text>
        <FlatList data={list}
          renderItem={({ item, index }) =>
            <View key={index}>
              <Phone_Item
                ten={item.ten}
                gia={item.gia}
                manhinh={item.manhinh}
                hdh={item.hdh}
                bonho={item.bonho}
                anh={item.anh} />
            </View>
          } />
      </View>
    )
  }

  render() {
    return (
      <Container style={styles.backgroundPage}>
        {this.changeView()}
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(CrawledData)

const styles = StyleSheet.create({
  backgroundPage: {
    backgroundColor: "#16171C",
    paddingBottom: 30
  },
  notification: {
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
    color: "white",
    textAlign: "center"
  },
  note: {
    fontFamily: "Montserrat-MediumItalic",
    color: "white",
    textAlign: "center",
    marginTop: 5,
  }
})