import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';
import Swiper from 'react-native-swiper'

const { height, width } = Dimensions.get('window')
const imageWidth = width - 40
const imageHeight = imageWidth * 354 / 750

export default class Category extends Component {
	render() {
		return (
			<View style={styles.khung}>
				<Text style={styles.text}> CATEGORIES </Text>
				<Swiper containerStyle={styles.banner}
					showsButtons={true}
					nextButton={<Text style={{ color: "white", fontSize: 60 }}>›</Text>}
					prevButton={<Text style={{ color: "white", fontSize: 60 }}>‹</Text>}
					activeDotColor="white"
					removeClippedSubviews={false}>
					<Image source={slide1} style={styles.banner} />
					<Image source={slide2} style={styles.banner} />
					<Image source={slide3} style={styles.banner} />
				</Swiper>
			</View>
		);
	}
}

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
		width: imageWidth,
		height: imageHeight,
		alignSelf: "center"
	},
})