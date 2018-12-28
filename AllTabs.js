import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Tabs, Tab, Icon } from 'native-base'
import Foundation from 'react-native-vector-icons/Foundation'
import Home from './Components/Tab1/Home'
import SPmoi from './Components/Tab2/SPmoi'
import ShopMap from './Components/Tab3/ShopMap'
import Compare from './Components/Tab4/Compare'

export default class AllTabs extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarPosition="bottom" tabContainerStyle={{ height: 52 }}>
          {/* Tab số 1 */}
          <Tab heading={<View style={{ flexDirection: "column" }}>
            <Icon>
              <Foundation name="monitor" size={24} />
            </Icon>
            <Icon>
              <Text style={styles.icon_name}>Trang chủ</Text>
            </Icon>
          </View>}>
            <Home />
          </Tab>
          {/* Tab số 2 */}
          <Tab heading={<View style={{ flexDirection: "column" }}>
            <Icon>
              <Foundation name="clipboard-pencil" size={24} />
            </Icon>
            <Icon>
              <Text style={styles.icon_name}>SP mới</Text>
            </Icon>
          </View>}>
            <SPmoi />
          </Tab>
          {/* Tab số 3 */}
          <Tab heading={<View style={{ flexDirection: "column" }}>
            <Icon>
              <Foundation name="marker" size={24} />
            </Icon>
            <Icon>
              <Text style={styles.icon_name}>Gần nhất</Text>
            </Icon>
          </View>}>
            <ShopMap />
          </Tab>
          {/* Tab số 4 */}
          <Tab heading={<View style={{ flexDirection: "column" }}>
            <Icon>
              <Foundation name="dollar-bill" size={24} />
            </Icon>
            <Icon>
              <Text style={styles.icon_name}>Gợi ý SP</Text>
            </Icon>
          </View>}>
            <Compare />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  icon_name: {
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 17
  }
})