import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Button } from 'native-base';
import { firebaseApp } from './FirebaseConfig'
import NewHeader from '../Others/NewHeader'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class User extends Component {

	constructor(props) {
		super(props)
		this.state = {
			currentUser: null
		}
	}

	componentDidMount() {
		const { currentUser } = firebaseApp.auth()
		this.setState({ currentUser })
	}

	dangxuat() {
		const { navigation } = this.props
		firebaseApp.auth().signOut().then(() => { navigation.navigate('SignIn') })
	}

	render() {
		const { currentUser } = this.state
		const { navigation } = this.props
		return (
			<Container>
				<NewHeader newtitle="Thông tin đăng nhập"
					leftIcon="md-arrow-back"
					openmenu={() => navigation.goBack()} />
				<Container style={styles.container}>
					<Text style={styles.welcome}>Xin chào</Text>
					<Text style={styles.account}>
						{currentUser && currentUser.email}
						abc@xyz.com
				</Text>
					<Button rounded style={styles.button} onPress={this.dangxuat.bind(this)}>
						<Icon name="logout" size={25} color="white" />
						<Text style={styles.signout}>ĐĂNG XUẤT</Text>
					</Button>
				</Container>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#14102B"
	},
	welcome: {
		fontFamily: "Montserrat-Regular",
		fontSize: 35,
		color: "white"
	},
	account: {
		fontFamily: "Montserrat-Medium",
		fontSize: 25,
		color: "#ED2156"
	},
	button: {
		alignSelf: 'center',
		backgroundColor: '#57004B',
		marginTop: 50,
		paddingLeft: 20,
		paddingRight: 20
	},
	signout: {
		fontFamily: "Montserrat-Medium",
		fontSize: 23,
		color: "white",
		marginLeft: 30
	}
})