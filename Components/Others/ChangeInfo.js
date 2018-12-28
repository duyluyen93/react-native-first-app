import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logobk from '../../images/logobk.png';
import { Header, Title, Body, Left, Icon, Container } from 'native-base'

const styles = StyleSheet.create({
    kieu1: { fontSize: 20, color: '#ff4800' },
    kieu2: { fontSize: 20, color: 'blue' },
    kieu3: { fontSize: 18, color: 'grey' }
})
export default class ChangeInfo extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#ff4800' }}>
                    <Left>
                        <Icon name='ios-arrow-back' style={{ color: 'white' }}
                              onPress={() => { this.props.navigation.goBack() }} />
                    </Left>
                    <Body>
                        <Title style={{ color: 'white' }}>Thông tin</Title>
                    </Body>
                </Header>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                    <Image source={logobk} style={{ width: 1481 / 15, height: 2185 / 15 }} />
                    <Text style={styles.kieu1}>SVTH: Luyện Đức Duy</Text>
                    <Text style={styles.kieu2}>MSSV: 2017104006</Text>
                    <Text style={styles.kieu3}>Email: duyluyen.93@gmail.com</Text>
                </View>
            </Container>
        )
    }
}