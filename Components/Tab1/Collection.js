import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import anh1 from '../../images/anh1.jpg'

var { height, width } = Dimensions.get('window')
export default class Collections extends Component {
	render() {
		return (
			<View style={styles.khung}>
				<Text style={styles.text}>SPRING COLLECTION</Text>
				<Image source={anh1} style={styles.banner} />
			</View>
		);
	}
}
const imageWidth = width - 40
const imageHeight = imageWidth * 354 / 750
const styles = StyleSheet.create({
	khung: {
		margin: 10,
		backgroundColor: '#1C2437',
		padding: 5,
		flex: 1,
		flexWrap: "wrap"
	},
	text: {
		fontSize: 20,
		color: 'white',
		fontFamily: 'Montserrat-Regular',
		margin: 10
	},
	banner: {
		height: imageHeight,
		width: imageWidth,
		alignSelf: "center"
	},
})