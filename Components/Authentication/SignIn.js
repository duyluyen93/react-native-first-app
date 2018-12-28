import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Container, InputGroup, Input, Button } from 'native-base';
import { firebaseApp } from './FirebaseConfig'
import NewHeader from '../Others/NewHeader';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" }
	}

	render() {
		const { navigation } = this.props
		return (
			<Container>
				<NewHeader newtitle="Đăng nhập"
					leftIcon="md-arrow-back"
					openmenu={() => navigation.goBack()} />
				<Container style={styles.container}>
					<Text style={styles.text}>TÀI KHOẢN</Text>
					<InputGroup style={{ marginBottom: 20 }}>
						<Icon name="user" size={20} color="white" />
						<Input style={styles.dien_text}
							placeholder='Email đăng nhập'
							placeholderTextColor='#7F7F7F'
							onChangeText={email => this.setState({ email })}
							value={this.state.email} />
					</InputGroup>
					<InputGroup style={{ marginBottom: 20 }}>
						<Icon name="key" size={20} color="white" />
						<Input style={styles.dien_text}
							placeholder='Mật khẩu'
							placeholderTextColor='#7F7F7F'
							secureTextEntry={true}
							onChangeText={password => this.setState({ password })}
							value={this.state.password} />
					</InputGroup>
					<Button rounded style={styles.button} onPress={this.dangnhap.bind(this)}>
						<Icon name="login" size={25} color="white" />
						<Text style={styles.login}>ĐĂNG NHẬP</Text>
					</Button>
					<TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
						<Text style={styles.dangky}>Chưa có tài khoản? Đăng ký</Text>
					</TouchableOpacity>
				</Container>
			</Container>
		)
	}
	dangnhap() {
		firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				this.setState({ email: '', password: '' });
				Alert.alert('Đăng nhập thành công', 'Chào mừng bạn quay lại ',
					[{ text: 'OK', onPress: () => navigation.navigate('Home') }],
					{ cancelable: false })
			})
			.catch(error => {
				var errorCode = error.code
				if (errorCode == 'auth/invalid-email') {
					Alert.alert('Lỗi', 'Email không hợp lệ',
						[{ text: 'OK', onDismiss: () => { } }],
						{ cancelable: false })
				}
				else if (errorCode == 'auth/wrong-password') {
					Alert.alert('Lỗi', 'Sai mật khẩu',
						[{ text: 'OK', onDismiss: () => { } }],
						{ cancelable: false })
				}
				else if (errorCode == 'auth/user-not-found') {
					Alert.alert('Lỗi', 'Tài khoản này không tồn tại',
						[{ text: 'OK', onDismiss: () => { } }],
						{ cancelable: false })
				}
				else {
					Alert.alert('Lỗi', 'Vui lòng nhập vào email hợp lệ',
						[{ text: 'OK', onDismiss: () => { } }],
						{ cancelable: false })
				}
			})
	}
}

const styles = StyleSheet.create({
	dien_text: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: -10,
		marginLeft: 15,
		fontFamily: "Montserrat-Regular"
	},
	text: {
		fontSize: 35,
		color: 'white',
		fontFamily: 'Montserrat-Regular',
		marginBottom: 30
	},
	dangky: {
		fontSize: 15,
		fontFamily: "Montserrat-Italic",
		color: 'white',
		textDecorationLine: 'underline',
		alignSelf: 'center',
		marginTop: 30
	},
	login: {
		fontFamily: "Montserrat-Medium",
		fontSize: 23,
		color: "white",
		marginLeft: 30
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 20,
		paddingRight: 20
	},
	button: {
		alignSelf: 'center',
		backgroundColor: '#EE4238',
		marginTop: 20,
		paddingLeft: 20,
		paddingRight: 20
	}
})