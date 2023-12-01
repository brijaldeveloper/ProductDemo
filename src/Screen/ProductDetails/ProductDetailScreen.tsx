import { SafeAreaView, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './Style';
//@ts-ignore
import { SliderBox } from "react-native-image-slider-box";
import BulletText from '../../Component/BulletText';
import Header from '../../Component/Header';
const ProductDetailScreen = (props: any) => {
  const [productData, setProductData] = useState(props.route.params.productData)


  const discountValue = (percentage: any, originalPrice: any) => {


    // Calculate the discounted price
    const discount = (percentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discount;
    return Math.round(discountedPrice)

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
      isBackIcon={true}
      onPress={()=>props.navigation.goBack()}
       />
      <SliderBox
        ImageComponentStyle={styles.boxStyle}
        sliderBoxHeight={300}
        activeOpacity={0.5}
        images={productData.images} />
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.descriptionText}> {productData.description} </Text>
        <View style={styles.priceView}>
          <Text style={styles.offerText}>Special Price</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.offerText1}>{productData.discountPercentage} % off</Text>
            <Text style={styles.oldPrice}>{productData.price}</Text>
            <Text style={styles.newPrice}>{discountValue(productData.discountPercentage, productData.price)}</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#000", fontWeight: "bold", fontSize: 25 }}>Highlights</Text>

          <BulletText
            option={{ marginTop: 10 }}
            title={'Brand'}
            value={productData.brand}
          />
          <BulletText
            option={{ marginTop: 10 }}
            title={'Category'}
            value={productData.category}
          />
          <BulletText
            option={{ marginTop: 10 }}
            title={'Stock'}
            value={productData.stock}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
