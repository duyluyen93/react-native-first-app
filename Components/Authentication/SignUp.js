import React, { Component } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { Container, InputGroup, Button, Input } from 'native-base';
import { firebaseApp } from './FirebaseConfig'
import NewHeader from '../Others/NewHeader';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '', user: '', password: '', rePass: '' };
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <NewHeader newtitle="Đăng nhập"
          leftIcon="md-arrow-back"
          openmenu={() => navigation.goBack()} />
        <Container style={styles.container}>
          <Text style={styles.text}>TẠO TÀI KHOẢN</Text>
          <InputGroup style={{ marginBottom: 20 }}>
            <Icon name="user" size={20} color="white" />
            <Input style={styles.dien_text}
              placeholder='Tên đăng nhập'
              placeholderTextColor='#7F7F7F'
              value={this.state.user}
              onChangeText={text => this.setState({ user: text })} />
          </InputGroup>
          <InputGroup style={{ marginBottom: 20 }}>
            <Icon name="envelope" size={20} color="white" />
            <Input style={styles.dien_text}
              placeholder='Email'
              placeholderTextColor='#7F7F7F'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })} />
          </InputGroup>
          <InputGroup style={{ marginBottom: 20 }}>
            <Icon name="key" size={20} color="white" />
            <Input style={styles.dien_text}
              placeholder='Mật khẩu (ít nhất 6 ký tự)'
              placeholderTextColor='#7F7F7F'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })} />
          </InputGroup>
          <InputGroup style={{ marginBottom: 20 }}>
            <Icon name="docs" size={20} color="white" />
            <Input style={styles.dien_text}
              placeholder='Nhập lại mật khẩu'
              placeholderTextColor='#7F7F7F'
              secureTextEntry={true}
              value={this.state.rePass}
              onChangeText={text => this.setState({ rePass: text })} />
          </InputGroup>
          <Button rounded style={styles.button} onPress={this.dangky.bind(this)}>
            <Icon name="direction" size={25} color="white" />
            <Text style={styles.signup}>ĐĂNG KÝ</Text>
          </Button>
        </Container>
      </Container>
    )
  }

  dangky() {
    const { user, email, password, rePass } = this.state
    if (password !== rePass) {
      Alert.alert('Lỗi', 'Yêu cầu nhập lại đúng mật khẩu',
        [{ text: 'OK', onDismiss: () => { } }],
        { cancelable: false })
    }
    else if (user || email || password || rePass === "") {
      Alert.alert('Lỗi', 'Hãy điền đầy đủ thông tin',
        [{ text: 'OK', onDismiss: () => { } }],
        { cancelable: false })
    }
    else {
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ email: '', password: '' })
          Alert.alert('Thông báo', 'Đăng ký thành công!',
            [{ text: 'OK', onPress: () => { } }],
            { cancelable: false })
        })
        .catch(error => {
          var errorCode = error.code;
          if (errorCode == 'auth/email-already-in-use') {
            Alert.alert('Lỗi', 'Email đã được sử dụng',
              [{ text: 'OK', onDismiss: () => { } }],
              { cancelable: false })
          }
          else if (errorCode == 'auth/weak-password') {
            Alert.alert('Lỗi', 'Mật khẩu quá ngắn, phải có ít nhất 6 ký tự',
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
    marginBottom: 30,
    textAlign: 'center'
  },
  signup: {
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
    backgroundColor: '#F18C22',
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})