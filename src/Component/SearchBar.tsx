import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
interface ISearchBar {
    onChangeText: any,
    value:string
}

const SearchBar = (props: ISearchBar) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                value={props.value}
                    placeholder='Search Product'
                    onChangeText={props.onChangeText}
                    style={{ fontSize: 18, color: "#000" }}
                />
            </View>
            <View style={styles.iconView}>
                <Icon name="search-outline" size={30} color="#000" style={{ alignSelf: "center" }} />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        height: 50, alignSelf: "center", width: "90%"
    },
    inputView: {
        width: "80%", justifyContent: "center", paddingHorizontal: 20
    },
    iconView: {
        width: "20%", justifyContent: "center"
    }
})