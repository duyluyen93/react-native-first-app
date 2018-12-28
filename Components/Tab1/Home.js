import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'
import NewHeader from '../Others/NewHeader'
import { firebaseApp } from '../Authentication/FirebaseConfig';

class Home extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#16171C', paddingBottom: 30 }}>
        {/* Thanh tiêu đề */}
        <View>
          <NewHeader
            newtitle="Shopping"
            leftIcon="menu"
            openmenu={() => this.props.navigation.openDrawer()} >
            <TouchableOpacity onPress={() => this.kiemtra()}>
              <Image source={require('../../images/png/user_shape.png')}
                style={{ tintColor: 'white', width: 21, height: 21 }} />
            </TouchableOpacity>
          </NewHeader>
        </View>
        {/* Thân tab */}
        <ScrollView>
          <Collection />
          <Category />
          <TopProduct />
        </ScrollView>
      </View>
    )
  }
  kiemtra() {
    firebaseApp.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'User' : 'SignIn')
    })
  }
}

export default withNavigation(Home);