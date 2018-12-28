import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Tabs, Tab, ScrollableTab, Icon, Container, StyleProvider } from 'native-base'
import NewHeader from '../Others/NewHeader'
import CrawledData from './CrawledData'
import FilterByCost from './FilterByCost'
import getTheme from '../../native-base-theme/components'
import newtab from '../../native-base-theme/variables/newtab'

export default class Compare extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(newtab)}>
        <Container>
          <NewHeader newtitle="Gợi ý sản phẩm" />
          <Tabs locked={true}>
            <Tab heading={
              <View>
                <Icon name="md-clipboard" />
                <Icon>
                  <Text style={styles.ten}>  Danh sách</Text>
                </Icon>
              </View>}>
                <CrawledData />
            </Tab>
            <Tab heading={
              <View>
                <Icon name="ios-cash-outline" />
                <Icon>
                  <Text style={styles.ten}>  So sánh giá</Text>
                </Icon>
              </View>}>

              <FilterByCost />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    )
  }
}

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignSelf: "center",
    paddingTop: 4,
    paddingBottom: 4
  },
  nut1: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "orange"
  },
  nut2: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "green"
  },
  ten: {
    fontSize: 18,
    fontFamily: "Montserrat-Regular"
  },
})