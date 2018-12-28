import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import Phone_Item from './Phone_Item'

export default class FlatListFilter extends Component {
	static propTypes = {
		getData: PropTypes.any
	}

	render() {
		return (
			<FlatList data={this.props.getData}
				ListEmptyComponent={
					<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
						<Text style={styles.notification}>Mục này tạm thời không có!</Text>
					</View>
				}
				renderItem={({ item, index }) =>
					<Phone_Item
						ten={item.ten}
						gia={item.gia}
						manhinh={item.manhinh}
						hdh={item.hdh}
						bonho={item.bonho}
						anh={item.anh} />
				} />
		)
	}
}

const styles = StyleSheet.create({
	notification: {
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
		color: "white",
		padding: 10
  },
})