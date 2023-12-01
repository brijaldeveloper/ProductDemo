import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons'
interface IHeader {
    title: string,
    isBackIcon:boolean,
    onPress:any
   
}

const Header = (props: IHeader) => {
  return (
    <View style={{height:60,width:'90%',flexDirection:'row',alignSelf:"center"}}>
        <View style={{width:'20%',justifyContent:"center"}}>
            {
                props.isBackIcon  &&
            <Icon
            onPress={props.onPress}
            name='arrow-back-outline' color={'#000'} size={30}/>
            }
        </View>
        <View style={{width:'80%',justifyContent:"center"}}>
        <Text style={styles.boldText}>  
           {props.title} </Text> 
        </View>
        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    boldText:{
       
        fontSize:22,color:"#000",fontWeight:"bold"
    },
    valueText:{
        fontSize:22,color:"#000",fontWeight:"400"
    }
})

