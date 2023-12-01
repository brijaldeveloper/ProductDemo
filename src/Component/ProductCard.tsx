import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface IProductCard {
  image: any,
  onPress: any,
  title: string,
  price: string,
  category: string
}

const ProductCard = (props: IProductCard) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.cardView}>
      <View style={{}}>
        <Image
          source={props.image}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsView}>
        <View style={styles.textView} >
          <Text style={styles.titleText}>{props.title}</Text>
          <Text style={styles.text1}>₹{props.price}</Text>
          <Text style={styles.text1}>{props.category}</Text>
        </View>
        <View style={{ width: '15%', }}/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderRadius: 10,
    height: 130, width: '90%',
    flexDirection: "row",
    alignSelf: "center", borderWidth: 1, borderColor: "#000",
    marginTop: 20,
    padding: 15
  },
  image: {
    height: 100, width: 150, borderRadius: 10,
    resizeMode: "contain"
  },
  detailsView: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  titleText: {
    color: "#000", fontSize: 20, fontWeight: "bold"
  },
  text1: {
    color: "#000"
  },
  textView: {
    justifyContent: 'center', width: '90%'
  }
})

export default ProductCard;
