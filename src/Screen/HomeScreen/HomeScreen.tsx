import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './Style';
import SearchBar from '../../Component/SearchBar';
import ProductCard from '../../Component/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Header from '../../Component/Header';


const HomeScreen = (props: any) => {
  const navigation = useNavigation();


  const [productList, setProductList] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchText ,setSearchText] =useState('')
  const [loading ,setLoading] =useState(false)
  const itemsPerPage = 10;

  useEffect(() => {
    GetProductList();
    const unsubscribe = navigation.addListener('focus', () => {
      GetProductList();
      setSearchText('')
    });

    return unsubscribe;
  }, []);

  const GetProductList = () => {
    setLoading(true)
    fetch('https://dummyjson.com/products', {
      method: 'Get',
    })
      .then((res) => res.json())
      .then((response) => {
        setLoading(false)
        setMasterDataSource(response.products); // Display the first 10 items initially
        setProductList(response.products.slice(0, itemsPerPage));
      });
  };

  const loadMoreData = () => {
    const startIndex = productList.length;
    const endIndex = startIndex + itemsPerPage;
    const additionalData = masterDataSource.slice(startIndex, endIndex);
    setProductList((prevData) => [...prevData, ...additionalData]);
  };

  // Search functionality

  const searchFilterFunction = (text: any) => {

    if (text) {
      const newData = masterDataSource.filter((item: any) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      console.log("new data *****",newData)
      setSearchText(text)
      setProductList(newData);
    } else {
      setSearchText(text)
      setProductList(masterDataSource);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);

    // Simulate fetching additional data (next 10 items) on refresh
    loadMoreData();

    setRefreshing(false);
  };

  const renderData = ({ item }: { item: any }) => {
    return (
      <ProductCard
        image={{ uri: item.thumbnail }}
        title={item.title}
        price={item.price}
        category={item.category}
        onPress={() => navigation.navigate('ProductDetails', { productData: item })}
      />
    );
  };

  return (
    <>
   
    <SafeAreaView style={styles.container}>
    
      <Header
      isBackIcon={false}
      />
      <SearchBar
      value={searchText}
        onChangeText={(text: any) => {
          searchFilterFunction(text);
        }}
      />
       {
      loading ?
      <View style={styles.loadingView}>
        <ActivityIndicator
        color={"blue"}
        style={{alignSelf:"center"}}>

        </ActivityIndicator>
      </View>:
      <View style={{ flex: 1 }}>
      {productList.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.noDataText}>Data not found</Text>
        </View>
      ) : (
        <FlatList

        data={productList}
        renderItem={renderData}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
         keyExtractor={(item, index) => item.id.toString()}
        />
      )}
    </View>
    }
      
    </SafeAreaView>
    </>
  );
};

export default HomeScreen;
