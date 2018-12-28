import React, { Component } from 'react';
import { StyleProvider } from 'native-base'
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import AllTabs from './AllTabs'
import getTheme from './native-base-theme/components'
import newtab from './native-base-theme/variables/newtab'
import SignIn from './Components/Authentication/SignIn';
import ChangeInfo from './Components/Others/ChangeInfo';
import SignUp from './Components/Authentication/SignUp'
import Details from './Components/Tab2/Details'
import User from './Components/Authentication/User'
import Iterator from './Iterator'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = [
      'Setting a timer'
    ]
  }

  render() {
    return (
      <StyleProvider style={getTheme(newtab)}>
        <Main />
      </StyleProvider>
    )
  }
}

const Drawer = createDrawerNavigator({
  'Trang chủ': { screen: AllTabs },
  'Thông tin': { screen: ChangeInfo },
}, {
    contentOptions: {
      activeTintColor: '#ff4800'
    },
    initialRouteName: 'Trang chủ',
  }
)

const MainNavigator = createStackNavigator({
  Drawer: { screen: Drawer },
  Details: { screen: Details },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  User: { screen: User },
  AllTabs: { screen: AllTabs }
}, { headerMode: 'none' }
)

const Main = createAppContainer(MainNavigator)