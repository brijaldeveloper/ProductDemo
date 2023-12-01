import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface IBulletText {
    title: string,
    value:string,
    option:any
}

const BulletText = (props: IBulletText) => {
  return (
    <View style={{...props.option}}>
        <Text style={styles.boldText}> • 
            <Text style={styles.boldText}> {"  "}{props.title} </Text> :<Text style={styles.valueText}> {props.value} </Text></Text>
    </View>
  )
}

export default BulletText

const styles = StyleSheet.create({
    boldText:{
        fontSize:22,color:"#000",fontWeight:"bold"
    },
    valueText:{
        fontSize:22,color:"#000",fontWeight:"400"
    }
})

