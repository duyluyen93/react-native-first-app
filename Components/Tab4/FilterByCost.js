import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Container, Accordion } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { GetData } from '../../Connect_Redux/actions'
import { connect } from 'react-redux'
import FlatListFilter from './FlatListFilter.js'

class GiaReNhat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingTooLong: false
    }
  }

  componentDidMount = () => {
    this.props.dispatch(GetData())
  }

  duoi5trieu(item) {
    if (item.gia_format <= 5000000) { return true }
    else { return false }
  }

  tu5den10tr(item) {
    if (5000000 < item.gia_format <= 10000000) { return true }
    else { return false }
  }

  tu10den15tr(item) {
    if (10000000 < item.gia_format <= 15000000) { return true }
    else { return false }
  }

  tu15den20tr(item) {
    if (15000000 < item.gia_format <= 20000000) { return true }
    else { return false }
  }

  tren20tr(item) {
    if (item.gia_format > 20000000) { return true }
    else { return false }
  }

  hangSapVe(item) {
    if (item.gia_format == null) { return true }
    else { return false }
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
    const filters = [
      { title: "Hàng sắp về", noidung: <FlatListFilter getData={list.filter(this.hangSapVe)} /> },
      { title: "Dưới 5 triệu", noidung: <FlatListFilter getData={list.filter(this.duoi5trieu)} /> },
      { title: "Từ 5 - 10 triệu", noidung: <FlatListFilter getData={list.filter(this.tu5den10tr)} /> },
      { title: "Từ 10 - 15 triệu", noidung: <FlatListFilter getData={list.filter(this.tu10den15tr)} /> },
      { title: "Từ 15 - 20 triệu", noidung: <FlatListFilter getData={list.filter(this.tu15den20tr)} /> },
      { title: "Trên 20 triệu", noidung: <FlatListFilter getData={list.filter(this.tren20tr)} /> }
    ]
    return (
      <Accordion
        dataArray={filters}
        renderHeader={this.showHeader}
        renderContent={this.showBody}
      />
    )

  }

  showHeader(header, expanded) {
    return (
      <View style={styles.headerView}>
        <Text style={styles.text_title}>
          {header.title}
        </Text>
        {expanded
          ? <FontAwesome style={{ fontSize: 18 }} name="minus-square" />
          : <FontAwesome style={{ fontSize: 18 }} name="plus-square" />}
      </View>
    );
  }
  showBody(body) {
    return (
      <View>
        {body.noidung}
      </View>
    );
  }
  render() {
    return (
      <Container>
        {this.changeView()}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#A9DAD6'
  },
  text_title: {
    fontSize: 17,
    fontFamily: 'Montserrat-SemiBold',
  },
  text_body: {
    backgroundColor: "#e3f1f1",
    padding: 10
  },
  notification: {
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
    color: "white",
    textAlign: "center"
  },
})

function mapStateToProps(state) {
  return {
    list: state.list,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(GiaReNhat)