import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import top1 from '../../images/top1.jpg';
import top2 from '../../images/top2.jpg';
import top3 from '../../images/top3.jpg';
import top4 from '../../images/top4.jpg';

const { height, width } = Dimensions.get('window')
export default class TopProduct extends Component {
	render() {
		return (
			<View style={styles.khung}>
				<Text style={styles.text}> TOP PRODUCTS </Text>
				<View style={styles.sapxep}>
					<View>
						<TouchableOpacity onPress={() => { this.props.navigation.navigate('Top1') }}>
							<Image source={top1} style={styles.banner} />
						</TouchableOpacity>
						<Text style={styles.text_be}> Áo khoác đen </Text>
					</View>
					<View>
						<Image source={top2} style={styles.banner} />
						<Text style={styles.text_be}> Sơ mi xanh </Text>
					</View>
					<View>
						<Image source={top3} style={styles.banner} />
						<Text style={styles.text_be}> Áo khoác trắng </Text>
					</View>
					<View>
						<Image source={top4} style={styles.banner} />
						<Text style={styles.text_be}> Sơ mi xám </Text>
					</View>
				</View>
			</View>
		);
	}
}

const proWidth = (width - 40) / 2
const imageHeight = height * 0.3
const styles = StyleSheet.create({
	khung: {
		margin: 10,
		marginBottom: 20,
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
		width: proWidth,
		alignSelf: "center"
	},
	sapxep: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around'

	},
	text_be: {
		fontSize: 16,
		alignSelf: 'center',
		color: 'red'
	}
})