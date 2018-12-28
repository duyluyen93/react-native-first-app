import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, Text, StyleSheet } from 'react-native'
import { Header, Left, Icon, Body, Title, Right } from 'native-base'
import PropTypes from 'prop-types'

export default class NewHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Left style={{ flex: 0 }}>
          <TouchableOpacity onPress={this.props.openmenu}>
            <Icon name={this.props.leftIcon} style={{ color: 'white' }} />
          </TouchableOpacity>
        </Left>
        <Body style={{ flex: 1 }}>
          <Title style={{ alignSelf: "center" }}>
            <Text style={styles.tieude}>{this.props.newtitle}</Text>
          </Title>
        </Body>
        <Right style={{ flex: 0 }}>
          {this.props.children}
        </Right>
      </Header>
    )
  }
}

var cao = Dimensions.get("window").height;
var rong = Dimensions.get("window").width;
const styles = StyleSheet.create({
  tieude: {
    fontSize: cao / 30
  },
  header: {
    backgroundColor: '#313745',
    height: cao / 12
  }
})

NewHeader.propTypes = {
  newtitle: PropTypes.string,
  leftIcon: PropTypes.string,
  openmenu: PropTypes.func
}